using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Iftekhari.Data.Infrastructure;
using Iftekhari.Data.Repositories;
using Iftekhari.Entities;
using Iftekhari.Web.Infrastructure.Core;
using Iftekhari.Web.Infrastructure.Extensions;
using Iftekhari.Web.Models;
using Iftekhari.Data;
using System.Data.SqlClient;
using System.Web;
using System.IO;
using System.Net.Http.Headers;

using System.Drawing;
using PDFLibNet32;
using System.Web.Http.Cors;

namespace Iftekhari.Web.Controllers
{
    //[Authorize(Roles = "Admin")]
    [RoutePrefix("api/books")]
    [AllowAnonymous]
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class BookController : ApiControllerBase
    {
        private readonly IEntityBaseRepository<Book> _bookRepository;
        private static TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
        private static Random random = new Random();

      

        public BookController(IEntityBaseRepository<Book> bookRepository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork)
            : base(_errorsRepository, _unitOfWork)
        {
            _bookRepository = bookRepository;
        }



        [AllowAnonymous]
        [HttpGet]
        [Route("Pagination")]
        public HttpResponseMessage GetBookList(HttpRequestMessage request, [FromUri] int? limit, [FromUri] string type = "popular", [FromUri] int? offset = 0)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                // Query books using repository
                var books = _bookRepository.GetAll(); // assuming _BookRepository implements IQueryable<Book>

                if (type == "popular")
                    books = books.Where(b => b.Popular == true);
                else if (type == "editor-choice")
                    books = books.Where(b => b.EditorChoice == true);
                else if (type == "new-arrival")
                    books = books.OrderByDescending(b => b.ID);

                if (limit.HasValue && limit.Value > 0)
                    books = books.Skip(offset ?? 0).Take(limit.Value);

                var bookList = books.ToList(); // Execute the query

                // Map to ViewModel
                var bookVM = Mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(bookList);

                response = request.CreateResponse<IEnumerable<BookViewModel>>(HttpStatusCode.OK, bookVM);
                return response;
            });
        }


        [HttpGet]
        [Route("list")]
      
        public HttpResponseMessage GetBookList(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                using (var context = new IftekhariContext())
                {
                    HttpResponseMessage response = null;
                    var result = context.Database
                        .SqlQuery<BookViewModel>("EXEC Iftekhari.GetBooks")
                        .ToList();

                    // return result;
                    response = request.CreateResponse<IEnumerable<BookViewModel>>(HttpStatusCode.OK, result);
                    return response;
                }
            });
        }

        
        [HttpOptions]
        [Route("list")]
        public HttpResponseMessage Options()
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [AllowAnonymous]
        [Route("list/{page}/{limit}/{filter}")]
        public HttpResponseMessage Get(HttpRequestMessage request, int page, int limit, string filter = "")
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (page == 0)
                    page = 1;

                if (limit == 0)
                    limit = int.MaxValue;

                var skip = (page - 1) * limit;

                var GetAllBooks = filter == null ? _bookRepository.GetAll() :
                            _bookRepository.GetAll().Where(c => c.Name.ToLower().Contains(filter) ||
                            c.Author.ToLower().Contains(filter));

                var TotalRecords = GetAllBooks.Count();
                var TotalPages = TotalRecords / limit;

                var Books = GetAllBooks.OrderByDescending(a=> a.ID).ToList().Skip(skip).Take(limit);
                

                IEnumerable<BookViewModel> BookVM = Mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(Books);

                response = request.CreateResponse<IEnumerable<BookViewModel>>(HttpStatusCode.OK, BookVM);

                return response;
            });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("list")]
        public HttpResponseMessage GetBooksByPost(HttpRequestMessage request, BookRequest bookRequest )
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
               if (bookRequest.Page == 0)
                    bookRequest.Page = 1;

                if (bookRequest.Limit == 0)
                    bookRequest.Limit = int.MaxValue;

                var skip = (bookRequest.Page - 1) * bookRequest.Limit;

                var GetAllBooks = bookRequest.Filter == null ? _bookRepository.GetAll() :
                            _bookRepository.GetAll().Where(c => c.Name.ToLower().Contains(bookRequest.Filter) ||
                            c.Author.ToLower().Contains(bookRequest.Filter));

                var TotalRecords = GetAllBooks.Count();
            //    int TotalPages =  TotalRecords < bookRequest.Limit ? 1 : TotalRecords / bookRequest.Limit;

                var TotalPages = Math.Ceiling((double)TotalRecords / bookRequest.Limit);

                IEnumerable<Book> BookList = new List<Book>();

               
                switch (bookRequest.SortBy)
                {
                    case "latest":
                        BookList = GetAllBooks.OrderByDescending(a => a.ID).ToList().Skip(skip).Take(bookRequest.Limit);
                        break;
                    case "oldest":
                        BookList = GetAllBooks.OrderBy(a => a.ID).ToList().Skip(skip).Take(bookRequest.Limit);
                        break;
                    case "upcoming":
                        BookList = GetAllBooks.OrderBy(a => a.Published).ToList().Skip(skip).Take(bookRequest.Limit);
                        break;
                     case "viewed":
                        BookList = GetAllBooks.OrderByDescending(a => a.Views).ToList().Skip(skip).Take(bookRequest.Limit);
                        break;
                    case "alphabetical":
                        BookList = GetAllBooks.OrderBy(a => a.Name).ToList().Skip(skip).Take(bookRequest.Limit);
                        break;
                    default:
                        BookList = GetAllBooks.OrderByDescending(a => a.ID).ToList().Skip(skip).Take(bookRequest.Limit);
                        break;
                }

                CustomrBookView vm = new CustomrBookView();
                vm.books = BookList;
                vm.TotalRecords = TotalRecords;
                vm.TotalPageCount = TotalPages;
                vm.HasMore = (TotalPages == bookRequest.Page) ? false : true;


                //CustomrBookView BookVM = Mapper.Map<CustomrBookView>, <CustomrBookView>(vm);
                //response = request.CreateResponse<IEnumerable<CustomrBookView>>(HttpStatusCode.OK, BookVM);
                response = request.CreateResponse<CustomrBookView>(HttpStatusCode.OK, vm);
                return response;
            });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("delete")]
        public HttpResponseMessage Delete(HttpRequestMessage request, BookViewModel bookVm)
        {

            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                bool isPaymentCollector = User.IsInRole("Payment Collector") || User.IsInRole("Complaint Monitor");

                if (!isPaymentCollector)
                {
                    Book bookDB = _bookRepository.GetSingle(bookVm.ID);
                    string dynamicPath = "~/Uploads/" + bookDB.BookId + "/";
                    string finalPath = HttpContext.Current.Server.MapPath(dynamicPath);
                    if (Directory.Exists(finalPath)) Directory.Delete(finalPath, true);
                    _bookRepository.Delete(bookDB);
                    _unitOfWork.Commit();
                    response = request.CreateResponse(HttpStatusCode.OK);
                    return response;
                }
                else
                {
                    response = request.CreateErrorResponse(HttpStatusCode.NotFound, "You are not Authorized to delete any payments..");
                }



                return response;
            });
        }

        public class CustomrBookView
        {
  
            public IEnumerable<Book> books { get; set; }

            public int TotalRecords { get; set; }

            public double TotalPageCount { get; set; }

            public bool HasMore { get; set; }

        }


        [HttpGet]
        [Route("file/{id}")]
        public HttpResponseMessage GetFile(string id)
        {
            //Create HTTP Response.
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);

            using (var context = new IftekhariContext())
            {
                var result = context.Database
                    .SqlQuery<BookViewModel>("EXEC Iftekhari.GetBookByID @BookId", new SqlParameter("BookId", id)).SingleOrDefault();

                var fileName = result.Name.Replace(" ", "-").ToUpper() + ".pdf";
                //Set the File Path.
                string filePath = HttpContext.Current.Server.MapPath("~/Uploads/" + id + "/") + fileName;

                //Check whether File exists.
                if (!File.Exists(filePath))
                {
                    //Throw 404 (Not Found) exception if File not found.
                    response.StatusCode = HttpStatusCode.NotFound;
                    response.ReasonPhrase = string.Format("File not found: {0} .", fileName);
                    throw new HttpResponseException(response);
                }

                //Read the File into a Byte Array.
                byte[] bytes = File.ReadAllBytes(filePath);

                //Set the Response Content.
                response.Content = new ByteArrayContent(bytes);

                //Set the Response Content Length.
                response.Content.Headers.ContentLength = bytes.LongLength;

                //Set the Content Disposition Header Value and FileName.
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = fileName;

                //Set the File Content Type.
                response.Content.Headers.ContentType = new MediaTypeHeaderValue(MimeMapping.GetMimeMapping(fileName));
                return response;

            }

            //string fileName = "DEEDAR-BAKSH.pdf"
            
        }


        [Route("details/{id}")]
        public HttpResponseMessage Get(HttpRequestMessage request, int id)
        {
            return CreateHttpResponse(request, () =>
            {               
                HttpResponseMessage response = null;
                var BookDB = _bookRepository.GetSingle(id);
                BookViewModel BookVM = Mapper.Map<Book, BookViewModel>(BookDB);
                response = request.CreateResponse<BookViewModel>(HttpStatusCode.OK, BookVM);
                return response;
            });
        }

        [Route("info/{id}")]
        public HttpResponseMessage GetBookDetail(HttpRequestMessage request, string id)
        {
            return CreateHttpResponse(request, () =>
            {
                using (var context = new IftekhariContext())
                {
                    HttpResponseMessage response = null;
                    var BookDb = _bookRepository.GetAll().Where(a => a.BookId == id).SingleOrDefault();

                    if (BookDb != null)
                    {
                        List<string> images = new List<string>();

                        for (int i = 0; i < BookDb.TotalPages; i++)
                        {
                            images.Add("/Uploads/" + id + "/" + i + ".jpg");
                        }

                        var result = new BookInfo()
                        {
                            ID = BookDb.ID,
                            BookId = BookDb.BookId,
                            Name = BookDb.Name,
                            Author = BookDb.Author,
                            Category = BookDb.Category.Name,
                            TotalPages = BookDb.TotalPages,
                            Views = BookDb.Views,
                            Language = BookDb.Language,
                            Images = images,
                            Thumbnail = BookDb.ImagePath,
                            Tags = BookDb.Tags,
                            Translator = BookDb.Translator
                        };
                        response = request.CreateResponse<BookInfo>(HttpStatusCode.OK, result);

                    }


                   
                    return response;
                }
            });
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("update")]
        public HttpResponseMessage Update(HttpRequestMessage request, BookViewModel Book)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                if (!ModelState.IsValid)
                {
                    response = request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var BookDb = _bookRepository.GetSingle(Book.ID);
                    if (BookDb == null)
                        response = request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Book.");
                    else
                    {
                        BookDb.UpdateBook(Book);                     
                        _unitOfWork.Commit();
                        response = request.CreateResponse<BookViewModel>(HttpStatusCode.OK, Book);
                    }
                }

                return response;
            });
        }
        public class BookInfo
        {
            public int ID { get; set; }
            public string BookId { get; set; }
            public string Name { get; set; }
            public string Author { get; set; }
            public string Category { get; set; }
            public int TotalPages { get; set; }
            public int Views { get; set; }
            public string Language { get; set; }
            public List<string> Images { get; set; }
            public string Thumbnail { get; set; }

            public string Tags { get; set; }

            public string Translator { get; set; }
        }

        [HttpPost]
        [Route("add")]
        public HttpResponseMessage AddBook(HttpRequestMessage request, BookViewModel book)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                if (!ModelState.IsValid)
                {
                    response = request.CreateResponse(HttpStatusCode.BadRequest,
                        ModelState.Keys.SelectMany(k => ModelState[k].Errors)
                              .Select(m => m.ErrorMessage).ToArray());
                }
                else
                {
                    Book newBook = new Book();
                    book.BookId = RandomString(8);
                    var fileName = book.Name.Replace(" ", "-").ToUpper();

                    book.ImagePath = "Uploads/" + book.BookId + "/" + fileName + ".jpg";
                    book.Published = false;
                    newBook.UpdateBook(book);
                    _bookRepository.Add(newBook);

                    _unitOfWork.Commit();

                    // Update view model
                    book = Mapper.Map<Book, BookViewModel>(newBook);
                    response = request.CreateResponse<BookViewModel>(HttpStatusCode.Created, book);
                }

                return response;
            });
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("update/views/{id}")]
        public HttpResponseMessage Update(HttpRequestMessage request, string id)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;               
                {
                    var BookDb = _bookRepository.GetAll().Where(a => a.BookId == id).SingleOrDefault();
                    if (BookDb != null)                      
                    {
                        BookDb.Views = BookDb.Views+1;
                        _bookRepository.Edit(BookDb);
                        _unitOfWork.Commit();
                        response = request.CreateResponse<bool>(HttpStatusCode.OK, true);
                    }
                }

                return response;
            });
        }

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        [Route("uploadFiles")]
        [HttpPost]
        public HttpResponseMessage UploadFiles()
        {
            var id = HttpContext.Current.Request.Form["id"];
            var fileName = HttpContext.Current.Request.Form["name"];
            fileName = fileName.Replace(" ", "-").ToUpper();

            string dynamicPath = "~/Uploads/" + id + "/";

            //Create the Directory.
            //string path = HttpContext.Current.Server.MapPath("~/Uploads/");
            string path = HttpContext.Current.Server.MapPath(dynamicPath);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            //Save the Files.
            foreach (string key in HttpContext.Current.Request.Files)
            {
                HttpPostedFile postedFile = HttpContext.Current.Request.Files[key];
                string exttension = Path.GetExtension(postedFile.FileName);               
                postedFile.SaveAs(path + fileName + exttension);
                var inputFile = path + fileName + exttension;
                var outputDireectory = path;
                var outputFileName = fileName + ".jpg";

                if (exttension == ".pdf")
                {
                    ConvertPDFtoHojas(inputFile, outputDireectory, outputFileName, id);
                    //ConvertPDFToMultipleImages(inputFile, outputDireectory, outputFileName, id);
                    //       onvertDF(inputFile, outputDireectory);
                    // string path1 = HttpContext.Current.Server.MapPath(dynamicPath);                                   

                    if (File.Exists(Path.Combine(path, fileName + ".pdf")))
                    {
                        // If file found, delete it
                        File.Delete(Path.Combine(path, fileName + ".pdf"));
                    }
                }
            }

            //Send OK Response to Client.
            return Request.CreateResponse(HttpStatusCode.OK);
        }



        public void ConvertPDFtoHojas(string filename, String dirOut, string outputFileName, string bookId)
        {
            PDFWrapper _pdfDoc = new PDFWrapper();
            _pdfDoc.LoadPDF(filename);

            var BookDb = _bookRepository.GetAll().Where(a=> a.BookId == bookId).SingleOrDefault();
           
                BookDb.TotalPages = _pdfDoc.PageCount;
                 _bookRepository.Edit(BookDb);
                _unitOfWork.Commit();        


            for (int i = 0; i < _pdfDoc.PageCount; i++)
           // for (int i = 0; i < 1; i++)
            {
                RenderPageTest(_pdfDoc, i, dirOut , outputFileName);
                //Image img = RenderPage(_pdfDoc, i);
                //img.Save(Path.Combine(dirOut, string.Format(i+".jpg", i, DateTime.Now.ToString("mmss"))));

                //if(i == 0)
                //{
                //    img.Save(Path.Combine(dirOut, string.Format(outputFileName, i, DateTime.Now.ToString("mmss"))));
                //}
            }
            _pdfDoc.Dispose();
            return;
        }
        public Image RenderPage(PDFWrapper doc, int page)
        {
            doc.CurrentPage = page + 1;
        //    doc.CurrentX = 0;
        //    doc.CurrentY = 0;

            doc.RenderPage(IntPtr.Zero);

            // create an image to draw the page into
            var buffer = new Bitmap(doc.PageWidth, doc.PageHeight);
            doc.ClientBounds = new Rectangle(0, 0, doc.PageWidth, doc.PageHeight);
            using (var g = Graphics.FromImage(buffer))
            {
                var hdc = g.GetHdc();
                try
                {
                    doc.DrawPageHDC(hdc);
                }
                finally
                {
                    g.ReleaseHdc();
                }
            }

            return buffer;

        }

        public void RenderPageTest(PDFWrapper doc, int page, string dirOut, string outputFileName)
        {
            doc.CurrentPage = page + 1;
            //    doc.CurrentX = 0;
            //    doc.CurrentY = 0;

            doc.RenderPage(IntPtr.Zero);

            // create an image to draw the page into
            var buffer = new Bitmap(doc.PageWidth, doc.PageHeight);
            doc.ClientBounds = new Rectangle(0, 0, doc.PageWidth, doc.PageHeight);
            using (var g = Graphics.FromImage(buffer))
            {
                var hdc = g.GetHdc();
                try
                {
                    doc.DrawPageHDC(hdc);
                }
                finally
                {
                    g.ReleaseHdc();
                }
            }
            buffer.Save(Path.Combine(dirOut, string.Format(page + ".jpg", page, DateTime.Now.ToString("mmss"))));

            if (page == 0)
            {
                buffer.Save(Path.Combine(dirOut, string.Format(outputFileName, page, DateTime.Now.ToString("mmss"))));
            }
            
        }


        public class BookRequest
        {
            public int Page { get; set; }
            public int Limit { get; set; }
            public string Filter { get; set; }
            public string SortBy { get; set; }
        }
    }
}


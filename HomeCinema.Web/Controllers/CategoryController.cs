using AutoMapper;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Iftekhari.Data.Extensions;
using Iftekhari.Data.Infrastructure;
using Iftekhari.Data.Repositories;
using Iftekhari.Entities;
using Iftekhari.Services.Utilities;
using Iftekhari.Web.Infrastructure.Core;
using Iftekhari.Web.Infrastructure.Extensions;
using Iftekhari.Web.Models;
using Iftekhari.Data;
using System.Data.SqlClient;
using System.Web;
using System.IO;
using System.Net.Http.Headers;
using System.Xml.Linq;
using System.Drawing;
using PDFLibNet32;
using System.Security.Policy;

namespace Iftekhari.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    [RoutePrefix("api/categories")]
    [AllowAnonymous]
    public class CategoryController : ApiControllerBase
    {
        private readonly IEntityBaseRepository<Category> _CategoryRepository;
        private static TimeZoneInfo INDIAN_Category = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");

        public CategoryController(IEntityBaseRepository<Category> CategoryRepository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork)
            : base(_errorsRepository, _unitOfWork)
        {
            _CategoryRepository = CategoryRepository;
        }


        [AllowAnonymous]
        [Route("list")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                var Categorys = _CategoryRepository.GetAll().ToList();

                IEnumerable<CategoryViewModel> CategorysVM = Mapper.Map<IEnumerable<Category>, IEnumerable<CategoryViewModel>>(Categorys);

                response = request.CreateResponse<IEnumerable<CategoryViewModel>>(HttpStatusCode.OK, CategorysVM);

                return response;
            });
        }



        [AllowAnonymous]
        [Route("details/{id:int}")]
        public HttpResponseMessage Get(HttpRequestMessage request, int id)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                var Category = _CategoryRepository.GetSingle(id);

                CategoryViewModel CategoryVM = Mapper.Map<Category, CategoryViewModel>(Category);

                response = request.CreateResponse<CategoryViewModel>(HttpStatusCode.OK, CategoryVM);

                return response;
            });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("add")]
        public HttpResponseMessage Add(HttpRequestMessage request, CategoryViewModel Category)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                bool _CategoryExists = false;

                _CategoryExists = _CategoryRepository.GetAll().Any(c => c.Name.ToLower() == Category.Name.ToLower());

                if (_CategoryExists)
                {
                    ModelState.AddModelError("Invalid Category", "Category already exists");
                    response = request.CreateResponse(HttpStatusCode.BadRequest,
                    ModelState.Keys.SelectMany(k => ModelState[k].Errors)
                          .Select(m => m.ErrorMessage).ToArray());
                }
                else
                {
                    if (!ModelState.IsValid)
                    {
                        response = request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                    }
                    else
                    {
                        Category newCategory = new Category();
                        newCategory.Name = Category.Name;
                        _CategoryRepository.Add(newCategory);
                        _unitOfWork.Commit();

                        // Update view model
                        Category = Mapper.Map<Category, CategoryViewModel>(newCategory);
                        response = request.CreateResponse<CategoryViewModel>(HttpStatusCode.Created, Category);
                    }
                }



                return response;
            });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("update")]
        public HttpResponseMessage Update(HttpRequestMessage request, CategoryViewModel Category)
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
                    var CategoryDb = _CategoryRepository.GetSingle(Category.ID);
                    if (CategoryDb == null)
                        response = request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Category.");
                    else
                    {
                        CategoryDb.Name = Category.Name;
                        _CategoryRepository.Edit(CategoryDb);
                        _unitOfWork.Commit();
                        response = request.CreateResponse<CategoryViewModel>(HttpStatusCode.OK, Category);
                    }
                }

                return response;
            });
        }

    }
}


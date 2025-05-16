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
    [RoutePrefix("api/tags")]
    [AllowAnonymous]
    public class TagsController : ApiControllerBase
    {
        private readonly IEntityBaseRepository<Tags> _tagsRepository;
        private static TimeZoneInfo INDIAN_Tags = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");

        public TagsController(IEntityBaseRepository<Tags> tagsRepository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork)
            : base(_errorsRepository, _unitOfWork)
        {
            _tagsRepository = tagsRepository;
        }


        [AllowAnonymous]
        [Route("list")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                var Tagss = _tagsRepository.GetAll().ToList().OrderBy(a=> a.Name);

                IEnumerable<TagsViewModel> TagssVM = Mapper.Map<IEnumerable<Tags>, IEnumerable<TagsViewModel>>(Tagss);

                response = request.CreateResponse<IEnumerable<TagsViewModel>>(HttpStatusCode.OK, TagssVM);

                return response;
            });
        }

        [AllowAnonymous]
        [Route("listDrodDown")]
        public HttpResponseMessage GetListDropDown(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                var Tagss = _tagsRepository.GetAll().ToList().OrderBy(a => a.Name);

                List<String> tagslist = new List<String>();
                foreach (var item in Tagss)
                {
                    tagslist.Add(item.Name);
                }

                //IEnumerable<String> TagssVM = Mapper.Map<IEnumerable<String>, IEnumerable<String>>(Tagss);

                response = request.CreateResponse<IEnumerable<String>>(HttpStatusCode.OK, tagslist);

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
                var Tags = _tagsRepository.GetSingle(id);

                TagsViewModel TagsVM = Mapper.Map<Tags, TagsViewModel>(Tags);

                response = request.CreateResponse<TagsViewModel>(HttpStatusCode.OK, TagsVM);

                return response;
            });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("add")]
        public HttpResponseMessage Add(HttpRequestMessage request, TagsViewModel Tags)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                bool _TagsExists = false;

                _TagsExists = _tagsRepository.GetAll().Any(c => c.Name.ToLower() == Tags.Name.ToLower());

                if (_TagsExists)
                {
                    ModelState.AddModelError("Invalid Tags", "Tags already exists");
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
                        Tags newTags = new Tags();
                        newTags.Name = Tags.Name;
                        _tagsRepository.Add(newTags);
                        _unitOfWork.Commit();

                        // Update view model
                        Tags = Mapper.Map<Tags, TagsViewModel>(newTags);
                        response = request.CreateResponse<TagsViewModel>(HttpStatusCode.Created, Tags);
                    }
                }



                return response;
            });
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("update")]
        public HttpResponseMessage Update(HttpRequestMessage request, TagsViewModel Tags)
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
                    var TagsDb = _tagsRepository.GetSingle(Tags.ID);
                    if (TagsDb == null)
                        response = request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Tags.");
                    else
                    {
                        TagsDb.Name = Tags.Name;
                        _tagsRepository.Edit(TagsDb);
                        _unitOfWork.Commit();
                        response = request.CreateResponse<TagsViewModel>(HttpStatusCode.OK, Tags);
                    }
                }

                return response;
            });
        }

    }
}


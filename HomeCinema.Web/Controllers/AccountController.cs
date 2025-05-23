﻿using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Iftekhari.Data.Infrastructure;
using Iftekhari.Data.Repositories;
using Iftekhari.Entities;
using Iftekhari.Services.Abstract;
using Iftekhari.Services.Utilities;
using Iftekhari.Web.Infrastructure.Core;
using Iftekhari.Web.Models;

namespace Iftekhari.Web.Controllers
{
    [Authorize(Roles="Admin")]
    [RoutePrefix("api/Account")]
    public class AccountController : ApiControllerBase
    {
        private readonly IMembershipService _membershipService;

        public AccountController(IMembershipService membershipService,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork)
            : base(_errorsRepository, _unitOfWork)
        {
            _membershipService = membershipService;
        }

        [AllowAnonymous]
        [Route("authenticate")]
        [HttpPost]
        public HttpResponseMessage Login(HttpRequestMessage request, LoginViewModel user)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                if (ModelState.IsValid)
                {
                    MembershipContext _userContext = _membershipService.ValidateUser(user.Username, user.Password);

                    if (_userContext.User != null)
                    {
                        UserRole first = null;
                        foreach (var role in _userContext.User.UserRoles)
                        {
                            first = role;
                            break;
                        }
                        response = request.CreateResponse(HttpStatusCode.OK, new { success = true, role = first.Role.Name, mobile = _userContext.User.Phone });
                    }
                    else
                    {
                        response = request.CreateResponse(HttpStatusCode.OK, new { success = false });
                    }
                }
                else
                    response = request.CreateResponse(HttpStatusCode.OK, new { success = false });

                return response;
            });
        }

        [AllowAnonymous]
        [Route("register")]
        [HttpPost]
        public HttpResponseMessage Register(HttpRequestMessage request, RegistrationViewModel user)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                if (!ModelState.IsValid)
                {
                    response = request.CreateResponse(HttpStatusCode.BadRequest, new { success = false });
                }
                else
                {
                    Entities.User _user = _membershipService.CreateUser(user.Username, user.Email, user.Password, new int[] { 1 });

                    if (_user != null)
                    {
                        response = request.CreateResponse(HttpStatusCode.OK, new { success = true });
                    }
                    else
                    {
                        response = request.CreateResponse(HttpStatusCode.OK, new { success = false });
                    }
                }

                return response;
            });
        }

        [AllowAnonymous]
        [Route("changePassword")]
        [HttpPost]
        public HttpResponseMessage ChangePassword(HttpRequestMessage request, ChangePasswordViewModel user)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                if (ModelState.IsValid)
                {
                    bool result = _membershipService.UpdatePassword(user.Username,user.Password);
                    response = request.CreateResponse(HttpStatusCode.OK, new { success = true });
                  
                }
                else
                    response = request.CreateResponse(HttpStatusCode.OK, new { success = false });

                return response;
            });
        }
    }
}

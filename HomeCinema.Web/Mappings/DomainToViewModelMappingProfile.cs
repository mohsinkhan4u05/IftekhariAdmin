using AutoMapper;
using Iftekhari.Entities;
using Iftekhari.Web.Models;

namespace Iftekhari.Web.Mappings
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public override string ProfileName
        {
            get { return "DomainToViewModelMappings"; }
        }

        protected override void Configure()
        {           
            Mapper.CreateMap<User, UserViewModel>();
            Mapper.CreateMap<Book, BookViewModel>();
            Mapper.CreateMap<Category, CategoryViewModel>();
            Mapper.CreateMap<Tags, TagsViewModel>();
        }
    }
}
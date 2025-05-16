using AutoMapper;
using Iftekhari.Entities;
using Iftekhari.Web.Models;

namespace Iftekhari.Web.Mappings
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public override string ProfileName
        {
            get { return "ViewModelToDomainMappings"; }
        }

        protected override void Configure()
        {
            //Mapper.CreateMap<CustomerViewModel, Customer>()
            //    .ForMember(m => m.Email, map => map.Ignore());
        }
    }
}
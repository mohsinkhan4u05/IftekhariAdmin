using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;
using Iftekhari.Entities;

namespace Iftekhari.Web.Models
{
    public class BookViewModel 
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public string BookId { get; set; }
        public string Author { get; set; }
        public string ImagePath { get; set; }
        public int Views { get; set; }
        public decimal? Rating { get; set; }
        public string Tags { get; set; }
        public string Translator { get; set; }
        public int TotalPages { get; set; }

        public string Language { get; set; }

        public virtual Category Category { get; set; }
        public int? CategoryId { get; set; }

        public string CategoryName { get; set; }

        public string AddedBy { get; set; }
        public string UpdatedBy { get; set; }
        public bool Published { get; set; }

        public int TotalRecords { get; set;}
        public int TotalPageCount { get; set; }

        public bool Popular { get; set; }
        public bool EditorChoice { get; set; }

    }
}
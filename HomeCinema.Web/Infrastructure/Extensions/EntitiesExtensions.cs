using Iftekhari.Entities;
using Iftekhari.Web.Models;
using System;
using System.Linq;

namespace Iftekhari.Web.Infrastructure.Extensions
{
    public static class EntitiesExtensions
    {
       
        public static void UpdateBook(this Book book, BookViewModel bookVm)
        {
            book.Name = bookVm.Name;
            book.Author = bookVm.Author;
            book.Rating = bookVm.Rating;
            book.ImagePath = bookVm.ImagePath;
            book.Tags = bookVm.Tags;
            book.Translator = bookVm.Translator;
            book.Views = bookVm.Views;
            book.CategoryId = bookVm.Category.ID;
            book.Language = bookVm.Language;
            book.BookId = bookVm.BookId;
            book.AddedBy = bookVm.AddedBy;
            book.UpdatedBy = bookVm.UpdatedBy;
            book.Published = bookVm.Published;
        }

    
    }
}
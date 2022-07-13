using System;

namespace MyBlog.Models
{
    public class Post 
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImageDefault { get; set; }
        public string Description { get; set; }
        public DateTime DateCreate { get; set; }
        public int AuthorId { get; set; }
        public Author Author { get; set; }
    }
}
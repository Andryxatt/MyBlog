using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog
{
    public class BlogDataContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Author> Author { get; set; }
        public BlogDataContext(DbContextOptions<BlogDataContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Author>().HasData(
                new Author[]
                {
                    new Author {Id = 1, FirstName = "Taras", LastName="Bulba", AgeOfB = new DateTime(1990, 7, 20)},
                    new Author {Id = 2, FirstName = "Andrii", LastName="Kvas", AgeOfB = new DateTime(1980, 5, 10)},
                    new Author {Id = 3, FirstName = "Stepan", LastName="One", AgeOfB = new DateTime(1977, 1, 1)},
                    new Author {Id = 4, FirstName = "Oleksandr", LastName="Two", AgeOfB = new DateTime(2000, 3, 29)},
                    new Author {Id = 5, FirstName = "Mukola", LastName="Tree", AgeOfB = new DateTime(1991, 11, 19)},

                });
            builder.Entity<Post>().HasData(
                new Post[]
                {
                    new Post {Id = 1, DateCreate = DateTime.Now, Title="Some Title 1", Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", AuthorId = 1, ImageDefault="https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg"},
                    new Post {Id = 2, DateCreate = DateTime.Now, Title="Some Title 2", Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", AuthorId = 1, ImageDefault="https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg"},
                    new Post {Id = 3, DateCreate = DateTime.Now, Title="Some Title 3", Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", AuthorId = 2, ImageDefault="https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg"},
                    new Post {Id = 4, DateCreate = DateTime.Now, Title="Some Title 4", Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", AuthorId = 3, ImageDefault="https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg"},
                    new Post {Id = 5, DateCreate = DateTime.Now, Title="Some Title 5", Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", AuthorId = 4, ImageDefault="https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg"},
                    new Post {Id = 6, DateCreate = DateTime.Now, Title="Some Title 6", Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", AuthorId = 5, ImageDefault="https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg"}
                });
        }
    }
}

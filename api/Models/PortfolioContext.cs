using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace PortfolioApi.Models
{
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options)
            : base(options)
            {
            }

            public DbSet<PortfolioItem> PropertyItems {get; set;}
            public DbSet<AdminItem> AdminItems {get; set;}
            public DbSet<UserItem> UserItems {get; set;}
    }
}
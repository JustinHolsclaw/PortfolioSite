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

            public DbSet<PortfolioItem> PropertyItems {get; set;} = null!;
    }
}
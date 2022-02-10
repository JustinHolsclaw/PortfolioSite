using PortfolioApi.Models;
namespace PortfolioApi.services;

public interface IDbService{
    Task<PortfolioItem> GetPortfolioItemByIdAsync(int Id);  //Define the rest of the operations
}
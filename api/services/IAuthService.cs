namespace PortfolioApi.services;

public interface IAuthService
{
    Task<bool> ValidateAsync(string UserName, string Password);
}
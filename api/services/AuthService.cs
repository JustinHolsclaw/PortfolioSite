using PortfolioApi.Models;
using Microsoft.EntityFrameworkCore;
namespace PortfolioApi.services;

public class AuthService : IAuthService
{
    private readonly PortfolioContext context;

    public AuthService(PortfolioContext context)
    {
        this.context = context;
    }
    public async Task<bool> ValidateAsync(string UserName, string Password)
    {
        UserItem? User = await context.UserItems.FirstOrDefaultAsync(u => u.UserName == UserName);
        if(User == null){
            return false;
        }
        string Hash = BCrypt.Net.BCrypt.HashPassword(Password, User.Salt);
        if(Hash == User.Hash){
            return true;
        }
        return false;
    }
}
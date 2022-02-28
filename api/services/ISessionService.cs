using PortfolioApi.Models;

namespace PortfolioApi.services;

public interface ISessionService
{
    Task <bool> IsSessionValid(string Session_id);
    Task<SessionItem> AddSessionAsync(string Session_Id, string UserName);
    Task<SessionItem?> GetSessionBySessionIdAsync(string Session_Id);
    Task DeleteSessionAsync(string Session_Id);
}
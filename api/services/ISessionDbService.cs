using PortfolioApi.Models;

namespace PortfolioApi.services;

public interface ISessionDbService
{
    Task<SessionItem?> GetSessionBySessionId(string Session_id);
    Task DeleteSessionAsync(string Session_id);

    Task<SessionItem> AddSessionAsync(SessionItem session);
}
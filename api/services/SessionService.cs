using PortfolioApi.Models;

namespace PortfolioApi.services;

public class SessionService : ISessionService
{
    private readonly ISessionDbService dbService;

    public SessionService(ISessionDbService dbService)
    {
        this.dbService = dbService;
    }
    public async Task <bool> IsSessionValid(string Session_id)
    {
        if(Session_id == null)
        {
            return false;
        }
        var session = await GetSessionBySessionIdAsync(Session_id);
        if(session == null)
        {
            return false;
        }
        if(DateTime.Compare(DateTime.UtcNow, session.Expiration) < 0)
        {
            return true;
        }

        return false;
    }
    public async Task<SessionItem> AddSessionAsync(string Session_Id, string UserName)
    {
        var session = new SessionItem(null, Session_Id, UserName, DateTime.UtcNow.AddHours(2));
        return await dbService.AddSessionAsync(session);
    }
    public async Task<SessionItem?> GetSessionBySessionIdAsync(string Session_Id)
    {
        return await dbService.GetSessionBySessionId(Session_Id);
    }
    public async Task DeleteSessionAsync(string Session_Id)
    {
        
    }
}
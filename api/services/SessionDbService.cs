using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

namespace PortfolioApi.services;

public class SessionDbService : ISessionDbService
{
    private readonly PortfolioContext context;

    public SessionDbService(PortfolioContext context)
    {
        this.context = context;
    }
    public async Task<SessionItem?> GetSessionBySessionId(string Session_id)
    {
        return await context.SessionItems.FirstOrDefaultAsync(s => s.Session_id == Session_id);
    }
    public async Task DeleteSessionAsync(string Session_id)
    {
        var S = await context.SessionItems.FirstAsync(s => Session_id == s.Session_id);
        context.Remove(S);
        await context.SaveChangesAsync();
    }

    public async Task<SessionItem> AddSessionAsync(SessionItem session)
    {
        var S = await context.SessionItems.FirstOrDefaultAsync(s => s.UserName == session.UserName);
        if(S is not null)
        {
            await DeleteSessionAsync(S.Session_id);
        }
        await context.SessionItems.AddAsync(session);
        await context.SaveChangesAsync();
        return await context.SessionItems.FirstAsync(s => s.Id == session.Id);
    }

    
}
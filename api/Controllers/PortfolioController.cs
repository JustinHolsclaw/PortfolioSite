#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;
using System.Diagnostics;
using BCrypt;
using PortfolioApi.services;

namespace PortfolioApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly PortfolioContext _context;
        private readonly IAuthService authService;
        private readonly ISessionService sessionService;

        public PortfolioController(PortfolioContext context, IAuthService authService, ISessionService sessionService)
        {
            _context = context;
            this.authService = authService;
            this.sessionService = sessionService;
        }

        // GET: api/Portfolio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PortfolioItem>>> GetPropertyItems()
        {
            return await _context.PropertyItems.ToListAsync();
        }

        // GET: api/Portfolio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PortfolioItem>> GetPortfolioItem(int id)
        {
            var portfolioItem = await _context.PropertyItems.FindAsync(id);

            if (portfolioItem == null)
            {
                return NotFound();
            }

            return portfolioItem;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPortfolioItem(int id, PortfolioItem portfolioItem)
        {
            if (id != portfolioItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(portfolioItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PortfolioItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<PortfolioItem>> PostPortfolioItem(PortfolioItem portfolioItem)
        {
            _context.PropertyItems.Add(portfolioItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPortfolioItem), new { id = portfolioItem.Id }, portfolioItem);
        }

        // DELETE: api/Portfolio/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePortfolioItem(int id)
        {
            var portfolioItem = await _context.PropertyItems.FindAsync(id);
            if (portfolioItem == null)
            {
                return NotFound();
            }

            _context.PropertyItems.Remove(portfolioItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PortfolioItemExists(int id)
        {
            return _context.PropertyItems.Any(e => e.Id == id);
        }
        // GET: api/Portfolio/restartService
        [HttpGet("/api/Portfolio/restart")]

        public string PostRestartWgAdmin()
        {
            var process = new Process()
            {
                StartInfo = new()
                {
                    FileName = "sudo",
                    Arguments = "systemctl restart wg-quick@wg0.service",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };
            process.Start();
            string output = process.StandardOutput.ReadToEnd();
            string error = process.StandardError.ReadToEnd();
            process.WaitForExit();

            if (string.IsNullOrEmpty(error)) { return output; }
            else { return error; }
        }
        // POST: api/Portfolio/createUser
        [HttpPost("/api/Portfolio/createUser")]

        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            if (request.UserName.Trim().Length <= 5)
            {
                return StatusCode(400);
            }
            if (request.Password.Trim().Length < 8)
            {
                return StatusCode(400);
            }
            if (request.RePassword.Trim() != request.Password.Trim())
            {
                return StatusCode(400);
            }

            string salt = BCrypt.Net.BCrypt.GenerateSalt(10);
            string hash = BCrypt.Net.BCrypt.HashPassword(request.Password, salt);

            _context.UserItems.Add(new UserItem(null, request.UserName, hash, salt));
            await _context.SaveChangesAsync();
            return Ok();
        }

        //POST: api/Portfolio/Login
        [HttpPost("/api/Portfolio/Login")]

        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (await authService.ValidateAsync(request.UserName, request.Password))
            {
                string Session_id = Guid.NewGuid().ToString();

                var cookieOptions = new CookieOptions()
                {
                    SameSite = SameSiteMode.Strict,
                    HttpOnly = true,
                    Secure = true
                };
                
                try
                {
                    await sessionService.AddSessionAsync(Session_id, request.UserName);
                    Response.Cookies.Append("Session_id", Session_id, cookieOptions);
                    return Ok();
                }
                catch(Exception ex){
                    return StatusCode(500);
                }
            }
            else{
                return Unauthorized();
            }
        }

        [HttpGet("/api/Portfolio/Secure")]

        public async Task<IActionResult> Secure()
        {
            HttpContext.Request.Cookies.TryGetValue("Session_id", out string? Session_id);
            if(Session_id == null)
            {
                return StatusCode(403);
            }
            if(await sessionService.IsSessionValid(Session_id))
            {
                var UserName = (await sessionService.GetSessionBySessionIdAsync(Session_id))?.UserName;
                return Ok(UserName);
            }
            return StatusCode(403);
        }
    }
}

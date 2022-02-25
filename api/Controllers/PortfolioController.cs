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

namespace PortfolioApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly PortfolioContext _context;

        public PortfolioController(PortfolioContext context)
        {
            _context = context;
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
        // POST: api/Portfolio/restartService
        [HttpGet ("/restart")]

        public string PostRestartWgAdmin()
        {
            var process = new Process()
            {
                StartInfo = new()
                {
                    FileName = "sudo",
                    Arguments = "systemctl restart wg-quick@wg0",
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
    }
}

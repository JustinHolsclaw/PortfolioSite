using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<PortfolioContext>(opt =>
   opt.UseNpgsql("server=localhost;port=5432;database=postgres;user id=justin_admin;password=justin_admin"));
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "PortfolioApi", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/api/swagger/v1/swagger.json", "PortfolioApi v1"));
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<PortfolioContext>();
    context.Database.Migrate();
}

app.Run();

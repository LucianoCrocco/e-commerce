using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middlewares
{
    public class ExceptionMW
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionMW> logger;
        private readonly IHostEnvironment env;

        public ExceptionMW(RequestDelegate next, ILogger<ExceptionMW> logger, IHostEnvironment env)
        {
            this.next = next;
            this.logger = logger;
            this.env = env;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {

                await next(context);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 500;
                var response = new ProblemDetails
                {
                    Status = 500,
                    Detail = env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                    Title = ex.Message
                };
                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);
            }

        }

    }
}
namespace PortfolioApi.Models
{
    public class PortfolioItem
    {
        public int Id {get; set;}
        public string? Name {get; set;}
        public string? Description {get; set;}
    }

    public class AdminItem
    {
        public int Id {get; set;}
        public int IpAddress {get; set;}
        public DateOnly DateAdded {get; set;}
        public int AllowedIpRange {get; set;}
        public int ClientPublicKey {get; set;}
        public int ClientPrivateKey {get; set;}
    }
}
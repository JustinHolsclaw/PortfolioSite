using System.Text.Json.Serialization;

namespace PortfolioApi.Models
{

    public class PortfolioItem
    {
        public int? Id {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}

        [JsonConstructor]
        public PortfolioItem(string name, string description, int? id){
            Id= id;
            Name = name;
            Description = description;
        }
    }

    public class AdminItem
    {
        public int? Id {get; set;}
        public string IpAddress {get; set;}
        public DateTime DateAdded {get; set;}
        public int AllowedIpRange {get; set;}
        public int ClientPublicKey {get; set;}
        public int ClientPrivateKey {get; set;}
        public AdminItem(int? id, string ipAddress, DateTime dateAdded, int allowedIpRange, int clientPublicKey, int clientPrivateKey){
            Id = id;
            IpAddress = ipAddress;
            DateAdded = dateAdded; 
            AllowedIpRange = allowedIpRange;
            ClientPublicKey = clientPublicKey;
            ClientPrivateKey = clientPrivateKey;
        }
    }


}
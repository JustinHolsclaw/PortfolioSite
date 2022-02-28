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

    public class UserItem
    {
        public int? Id {get; set;}
        public string UserName {get; set;}
        public string Hash {get; set;}
        public string Salt {get; set;}
        public UserItem(int? Id, string UserName, string Hash, string Salt){
            this.Id = Id;
            this.UserName = UserName;
            this.Hash = Hash;
            this.Salt = Salt;
        }
    }

    public class SessionItem
    {
        public int? Id {get; set;}
        public string Session_id {get; set;}
        public string UserName {get; set;}
        public DateTime Expiration {get; set;}
        
        public SessionItem(int? Id, string Session_id, string UserName, DateTime Expiration){
            this.Id = Id;
            this.Session_id = Session_id;
            this.UserName = UserName;
            this.Expiration = Expiration;
        }
    }

}
using System.Text.Json.Serialization;

namespace PortfolioApi.Models
{

    public class PortfolioItem
    {
        public int? Id {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}
        public string Github_Url {get; set;}
        

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
        public byte[] Image {get; set;}
        public string Description {get; set;}
        public UserItem(int? Id, string UserName, string Hash, string Salt, byte[] Image, string Description){
            this.Id = Id;
            this.UserName = UserName;
            this.Hash = Hash;
            this.Salt = Salt;
            this.Image = Image;
            this.Description = Description;
        }
    }

    public class CommentItem
    {
        public int? Id {get; set;}
        public int? User_id {get; set;}
        public int? PortfolioItem_id {get; set;}
        public string Comment {get; set;}

        public CommentItem(int? Id, int? User_id, int? PortfolioItem_id, string Comment){
            this.Id = Id;
            this.User_id = User_id;
            this.Comment = Comment;
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
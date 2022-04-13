public class CreateUserRequest {
    public string UserName {get; set;}
    public string Password {get; set;}
    public string RePassword {get; set;}
    public byte[] Image {get; set;}
    public string Description {get; set;}

    public CreateUserRequest(string userName, string password, string rePassword, byte[] image, string description){
        UserName = userName;
        Password = password;
        RePassword = rePassword;
        Image = image;
        Description = description;
    }
}


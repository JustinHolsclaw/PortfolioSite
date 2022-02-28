public class CreateUserRequest {
    public string UserName {get; set;}
    public string Password {get; set;}
    public string RePassword {get; set;}

    public CreateUserRequest(string userName, string password, string rePassword){
        UserName = userName;
        Password = password;
        RePassword = rePassword;
    }
}


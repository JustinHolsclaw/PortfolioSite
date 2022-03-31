const express = require("express");
const axios = require("axios");
var cors = require("cors");

const CLIENT_ID = "6d5d35c0bd9ad6cf24d2";
const CLIENT_SECRET = "0058905fc7cb27acfc7eb267688a8b30cfdffd41";
const GITHUB_URL = "https://github.com/login/oauth/access_token";
const app = express();
const user = {
  Token: "",
  Birthday: "",
  MiddleName: "",
  FavoriteAnimal: "",
  FavoriteFood: ""
}
const users = []
const createUser = (token) => {
  if (token != null){
    console.log(token);
    users.push(new user(token, '', '', '', ''));
  }
  else{
    console.log("invalid token or no token");
  }
}
const findUser =(token)=>{
  for(const x in users){
    if(users[x].Token == token){
      return true;
    }
  }
  return false;
}

app.use(cors({ credentials: true, origin: true }));
app.get("/oauth/redirect", (req, res) => {
  axios({
    method: "POST",
    url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    createUser(response.data.access_token);
    res.redirect(
      `http://localhost:3000?access_token=${response.data.access_token}`
    );
  });
});

// app.post("/editUser", (req, res)){
//   if(findUser(req.body.token)){
    
//   }
// }

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});


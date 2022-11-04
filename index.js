const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/users');
const Contact = require('./db/Contact')


let app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req,res)=>{
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;

    res.send(result);

});

app.post('/login', async (req,res)=>{
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
    }else{
        res.send({result:"No User found"});
    }
});

app.post("/add-contact", async (req, res) => {
    let contact = new Contact(req.body);
    let result = await contact.save();
    res.send(result);
  });

  app.get("/contacts", async (req, res) => {
    let contact = await Contact.find();
    if (contact.length > 0) {
      res.send(contact);
    } else {
      res.send({ result: "Products not found" });
    }
  });


app.listen(5000);
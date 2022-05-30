const mongoose = require('mongoose')

//const uri =
//  'mongodb+srv://prtcbotdb:12345678JASW@cluster0.v5jln.mongodb.net/deltax?retryWrites=true&w=majority'
//const uri = "http://localhost:2717/chatbot/tickets";

const uri =
  'mongodb+srv://prtcbotdb:12345678JASW@cluster0.v5jln.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(uri, {
    //userCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection sucessful..')
  })
  .catch((e) => {
    console.log('no connection')
  })

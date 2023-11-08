//express
const express = require("express")
const app = express()

//handlebars
const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//firebase
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore')
var admin = require("firebase-admin");
var serviceAccount = require("./correios-dc355-firebase-adminsdk-15m0z-1af7d436cd.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const db = getFirestore();



//tradutor
const translate = require('translator-for-you')
translate('Hello, my name is mark, i am a 20 year old boy who needs therapy', 'pt').then(result => console.log(result)).catch(err => console.log(err));


//rotas
app.listen(8081, function(){
  console.log("teste")
})

app.get("/", function(req,res){
  res.render("pagina_principal")
})

app.post("/traduzir", function(req,res){
  translate(req.body.traduzir, req.body.idioma).then(result => 
    res.render("pagina_principal",{
      traduzido: result
    })
    ).catch(err => console.log(err))
})

//express
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8081

//handlebars
const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//tradutor
const translate = require('translator-for-you')
translate('Hello, my name is mark, i am a 20 year old boy who needs therapy', 'pt').then(result => console.log(result)).catch(err => console.log(err));


//rotas
app.listen(PORT, () => {
  console.log(`teste porta: ${PORT}`);
});

app.get("/", function(req,res){
  res.render("pagina_principal")
})

app.post("/", function(req,res){
  translate(req.body.traduzir, req.body.idioma).then(result => 
    res.render("pagina_principal",{
      traduzido: result,
      traduzir: req.body.traduzir
    })
    ).catch(err => console.log(err))
})


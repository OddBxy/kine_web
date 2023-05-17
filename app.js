const express = require('express');
const app = express()
const port = 3000
const cors = require('cors')
const { setEvent } = require('./calendar');

app.use(express.json());
//app.use(bodyParser.json());
app.use('/application', express.static('site'))
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETTE", "PUT"],
  credentials: false
}))

let MongoClient = require('mongodb').MongoClient;
let ServerApiVersion = require('mongodb').ServerApiVersion
let mongodb = require('mongodb');

//yn8EgzfktP1ugIkj
//OG9KknnwzaxgCmXe
//mongodb+srv://kine_db:yn8EgzfktP1ugIkj@cluster0.grvit4v.mongodb.net/test
let url = "mongodb+srv://kine_db:yn8EgzfktP1ugIkj@cluster0.grvit4v.mongodb.net/test";

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/questions', async (req, res, next) => {

    try {
      db = await client.connect(url);
      let dbo = db.db("kine_api");
      let datas = await dbo.collection("questions").find({}).toArray();
      res.status(200).json(datas);
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err })
    }
  
  }
);


app.delete('/questions/:id', async(req,res, next) =>{
    try{
      let db = await client.connect(url);
      let dbo = db.db("kine_api");
      let data = await dbo.collection("questions").deleteOne({_id: new mongodb.ObjectId(req.params.id)});
      res.status(200).json({data});
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ ok: false });
    }
  }
);

app.put('/questions/:id',async(req, res, next) => {
  let question = req.body;
  question.status = "stored";
  try {
      let db = await client.connect(url);
      let dbo = db.db("kine_api");
      console.log(req.body)
      let retour = await dbo.collection("questions").updateOne({ _id: new mongodb.ObjectId(question._id) }, { $set: {question : question.question, reponse : question.reponse, status : question.status} }); //on aurai pu mettre juste set : question, mais ca modifie l'id et il aime pas
      res.status(200).json({ ok: true });
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: err })
  }
});


app.post('/questions', async(req,res,next) =>{
  try{
    let question = req.body;
    question.status = "not stored"
    let db = await client.connect(url);
    let dbo = db.db("kine_api");
    let data = await dbo.collection("questions").insertOne(question);
  }
  catch(err){
    console.log(err)
    res.status(500).json({ ok: false})
  }
})

app.listen(port, () => {
    console.log(`L'application écoute le port ${port}`)
  });
  
app.post('/calendar', setEvent)

const express = require("express");
const cors = require("cors");

const app = express();

const {register, update} = require('./controller');
app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) =>{
  const fortunes = ["You will be given magical cocktail wieners from a talking hamster.",
  "You will start hearing voices telling you to build a space craft capable of transporting you to the highest dimension of human consciousness... Don't listen to them, it's the artificial sweetener in your coffee talking.",
  "You will fall deeply and passionately in love only to have the person leave you abruptly and break your heart. You will live out the rest of your miserable life alone, occasionally posting pick up videos on youtube of Funko Pops that you got at Walmart."];

  let randomIndex = Math.floor(Math.random()*fortunes.length);
  let randomFortune = fortunes[randomIndex];
  console.log(randomFortune);

  res.status(200).send(randomFortune);
})

app.post("/api/goober", register);
app.put("/api/goober/:id", update);

app.listen(4000, () => console.log("Server running on 4000"));

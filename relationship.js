const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/fruitdb')
const fruitschema=mongoose.Schema({
    name:String,
    rating:Number,
    review:String
})
const Favfruit = mongoose.model("Favfruit", fruitschema);



const Mango=new Favfruit({
    name:'Mango',
    rating:8,
    review:'Summer Fruit'
})

// Mango.save()
const Banana = new Favfruit({
  name: "Banana",
  rating: 9,
  review: "Its a Every Month Fruit its Healthy for Bones & Also its Milkshake is Tasty",
});
// Banana.save()


//****************Person Schema**********************//
const Personschema = mongoose.Schema({
  name: String,
  age: Number,
  favfruit: fruitschema,
});
const Person = mongoose.model("Person", Personschema);


const person1=new Person({
    name:'Zeeshan',
    age:24,
    favfruit:Mango
})
// person1.save()






//****************Update Person1 Fav Fruit *************************//
Person.updateOne({ name: "Zeeshan" }, { favfruit: Banana })
  .then(() =>console.log("Successfully Updated"))
  .catch((err) => console.log(err));



// Get Data into Terminal from Database after Update
setTimeout(()=>{ 

Person.find()
.then((data)=> {
    console.log(data)
    mongoose.connection.close()
})
.catch((err)=>console.log(err))

},2000)                                                                       // Set Timeout for 2 Sec, Bcz 'find Method" Run Faster then "updateOne Method"


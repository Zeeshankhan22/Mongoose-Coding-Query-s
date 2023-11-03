const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/unidb')             //Imp Upto Version 6.0 Use this '127.0.0.1' Behalf of 'localhost'

const unischema = new mongoose.Schema({                         //Validate This Schema for User
  name:{type:String,required:[true, 'Please Enter Name']},      //PreDefine Name -> Data Validation -> InCase 'User' Miss Enter Name
  age: Number,
  CGPA: {                                                       //Predefine 'Data Validation Into Number' For More Info Goto => Mongoose Documentaion -> Validation -> Built-in Validators
    type: Number,
    min: 2.5,
    max: 4,
  },
});


const Student=mongoose.model('Student',unischema)

const student1=new Student({
    name:"Zeeshan",
    age:24,
    CGPA:2.7
})
//student1.save()                                                                            

const student2 = new Student({
  name: "Faizan",
  age: 17,
  CGPA: 2.9,
})


//************Add Another Collection or Another Schema in Same DB**********************/

// const studentfavfruit=new mongoose.Schema({
//     name:String,
//     Fruitname:String,
//     review:String
// })
// const Favfruit=mongoose.model('Favfruit',studentfavfruit)

// const Azlan=new Favfruit({
//     name:'Azlan',
//     Fruitname:"Banana",
//     review:'I Love Banana bcz its all season fruit'

// })
// Azlan.save()









//////////////////////////////////////////////////////////////////////DB COding Query's///////////////////////////////////////////////////////////////////////////////////////


//***********************Inserted One Data **********************************/

// const student1=new Student({
//     name:"Zeeshan",
//     age:24,
//     CGPA:2.7
// })
//student1.save()  


//***********************Inserted Many Data ***********************************/

// const data=[student1, student2]

// Student.insertMany(data)
//   .then(function () {
//     console.log("Successfully saved defult items to DB");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });



//****************** Find Data   Or   Get Exists Data **************************/

// Student.find()
// .then((data)=>{
//     // console.log(data);
//     data.forEach((datas) => console.log(datas.name))
//     mongoose.connection.close()                                                              // Connection Close After Code Run In Terminal
// })

// .catch((err)=>console.log(err))


/////2.Find One//////

// List.findOne({ name: listname })
//   .then((data) => {
//     data.items.push(item);
//     data.save();
//     res.redirect("/" + listname);
//   })
//   .catch((err) => console.log(err));


//////3.Find One But has No Data///////
//  User.find({ secret: { $ne: null } }).then().catch()


//************************ Update Data One *********************************/

// Student.updateOne({_id:'652ee5b68e37b307e543a897'},{name:"Azlan"})                          //Update Faizan Name Student Into Azlan
// .then(()=>console.log("Data Updated"))
// .catch((err)=>console.log(err))



/////2.FindOneandUpdate///////

// List.findOneAndUpdate(
//   { name: listName },
//   { $pull: { items: { _id: checkeditem } } }
// )
//   .then((data) => {
//     console.log("Removed User : ", data);
//     res.redirect("/" + listName);
//   })
//   .catch((err) => console.log(err));





//********************** Delete  Data ********************************/

// Student.deleteOne({ _id: "652ee5b68e37b307e543a897" })                                    // Run this Code Azlan name Student will Deleted
// .then(()=>console.log('Student Deleted'))
// .catch((err)=>console.log(err))



/////2.Delete By ID////////
// const checkeditem = req.body.checkbox
//     Item.findByIdAndRemove(checkeditem)
//       .then((docs) => {
//         console.log("Removed User : ", docs);
//         res.redirect("/");
//       })
//       .catch((err) => console.log(err))
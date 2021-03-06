const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true,
useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  rating: {
      type: Number,
      min: 1,
      max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({

//   rating: 11,
//   review: "Pretty Solid",
// });

// fruit.save();

// defining new fruit without name and checking its validation

const fruit = new Fruit({
    rating: 9,
    review: "Very Good"
})
fruit.save((err)=>{
    if(err){
        console.log("Name is Required");
    }else{
        console.log("Successfully inserted data");
    }
})
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model("person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 56,
// });

// // person.save();

// const mango = new Fruit({
//   name: "mango",
//   rating: 10,
//   review: "King",
// });
// const orange = new Fruit({
//   name: "orange",
//   rating: 6,
//   review: "Soar Fruit Vitamin C",
// });
// const banana = new Fruit({
//   name: "banana",
//   rating: 8,
//   review: "Power Energy",
// });

// // insert many data in single run
// // Fruit.insertMany([mango,orange,banana],(err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log("Data successfully uploaded");
// //     }
// // })

// // to find your data in database

// // returns an array of all data which means we can apply all the method of java script
// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//   }
// });

Fruit.find((err, fruits) => {
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach((ele)=>{
            console.log(ele.name);
        })
    }
});

// its a good idea to close the connection from the server after doing all operation
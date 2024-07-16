

    const fs = require("fs")

  
   const  yargs = require("yargs")
  
   const data10 = require("./data10")
const { type } = require("os")

    yargs.command({
       command : "add" ,
       describe : " to add an item",
       builder : {
         fname : {
            describe :"this is the first name desc in add command",
            demandOption : true ,
            type : "string"
         },
         lname : {
            describe :"this is the last name desc in add command",
            demandOption : true ,
            type : "string"
         }

       },
       handler :(x)=> {
         data10.addPerson(x.id , x.fname , x.lname , x.city , x.age)
       }
   })




   yargs.command({
      command : "delete",
      describe: "to delete an item",
      handler : (x)=> {
         //console.log("you have already deleted an item")
         data10.deleteData(x.id)
      }
   })

   //////////
   yargs.command({
      command:'read',
      describe:'to read an item',
      builder : {
         id:{
            describe : "this is id desc in read command",
            demandOption: true,
            type:'string',
         }
      },
      handler : (x)=> {
         data10.readData(x.id)
      }

   })
   /////////////


   yargs.command({
      command : "list",
      describe :"To List Data",
      handler: ()=>{
         data10.listData()
         
      }
   })



   yargs.parse()  

   // console.log(yargs.argv)


//   const  person1 = {
//       fname : "islam",
//       lname : "mohamed",
//       city : "mansoura"
//   }

// //   console.log(person1.city)


//     const person1Json = JSON.stringify(person1)

//     console.log(person1Json)

//     const person1Obj = JSON.parse(person1Json)

//      console.log(person1Obj)

//      fs.writeFileSync("data10.json" , person1Json)



function CreateData(){
   fetch("https://students-4278d-default-rtdb.asia-southeast1.firebasedatabase.app/students.json",{method:"POST",body:JSON.stringify({
    name:"ani",
    rollno:1,
   })
})
.then((res)=>res.json())
.then((data)=>console.log("Data is added",data))
}
function GetData(){
     fetch("https://students-4278d-default-rtdb.asia-southeast1.firebasedatabase.app/students.json",{method:"GET"})
     .then((res)=>res.json())
     .then((data)=>console.log("get the data",data))
}
function UpdateData(){
   // method:"PATCH",used for partial updation//
   //PUT is used for updation here//
   fetch("https://students-4278d-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OfURLPATHasm0mXmKzr.json",{method:"PUT",
    body:JSON.stringify({
        name:"Kusuma",
        rollno:6

    }),
   })
   .then((res)=>res.json())
   .then((data)=>console.log("updated using PUT",data));
    
}
function DeleteData(){
     fetch("https://students-4278d-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OfURLPATHasm0mXmKzr.json",{method:"DELETE"})
     .then((res)=>res.json())
     .then((data)=>console.log("deleted record",data))
    
}
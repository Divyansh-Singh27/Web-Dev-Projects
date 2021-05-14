//functions,arrays.objects
//function definition
function sayHi(param){
    //console.log("Hello from fn");
    console.log("Param is ", param);
    let rVal = Mah.random() > 0.5 ? "good" : "false";
    return rVal;
}
//function invoke
//sayHi(10);
//sayHi("dfdfgdgf");
//let rVal = sayHi([1,2,3,4,5,6,7]);
//console.log(rVal);

//arrays
 // arrays -> arrays is a colleciton of homogeneous datatypes
 // array -> array is a collection of anything
 // array declare
  let arr=[
     1,
     1.1,
     "string",
     "single quotes",
     null,
     true,
     [1,2,3,4,5],
     function inside(param){
         console.log("Hello from the array");
    console.log("I received ",param)
        return "some value";
     },
     { name: "Divyansh",
     lastName: "Singh"},
 ] 
 console.log(arr);
 console.log("val at index 5",arr[5]);
 console.log("val at index 6",arr[6][7]);
 console.log("last val",arr[arr.length-1].name);
 console.log("last val",[arr.length-1].name);
 //function
 console.log(arr[arr.length-2]);
 console.log("returned value",arr[arr.length-2]("holaa!"));

 // push -> addLast, pop -> removeLast
 // unshift -> addFirst, shift ->removeFirst
 arr.shift();
 console.log(arr);
 // slice-> starting indx,end indx
 // let slicedArr = arr.slice(2, 5);
 // console.log("sliced Arr", slicedArr);
 // console.log("array", arr);
 // // splice -> starting index,delete count
 // console.log("```````````````````````");
 // let removedElemArr = arr.splice(2, 3);
 // console.log("removed elemArr", removedElemArr)
 // console.log("arr", arr);
 // loop
 // for (let i = 0; i < arr.length; i++) {
 //     console.log("index ", i, "value ", arr[i]);
 // }
 
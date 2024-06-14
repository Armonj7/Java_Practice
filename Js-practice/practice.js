// This is a single line comment

/* 
This allows you to write multi-line comments
See!
*/
// This is a single line comment
 
/*
This allows you to write multi-line comments
I can add comments
*/
 
/**
 * This is a test function
 * There is nothing within it
 * @param {string}  parameter1 this is the first parameter
 */
function TestFunction(parameter1) {
    let hello = "hi";
   
    if (true) {
      const testObj = { prop1: "hello", prop2: "hello2" };
      testObj.prop1 = "world";
      console.log("testObj", testObj);
    }
   
    let test = "123455";
   
    console.log(test + 1 + parameter1);
  }
   
  TestFunction();
   
  console.log(5 != "5");
   
  //console.log(test);

  const str ='ArmonJackson';

  for(let i in str) {
    console.log(str[i]);
  }

  for(let i = 0; i < str.length; i++){
  console.log(str[i]);
  }
   if (i === 1) {
    continues;
  }
  console.log(str[i]);
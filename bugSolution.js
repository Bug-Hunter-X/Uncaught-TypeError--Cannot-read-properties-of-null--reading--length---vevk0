function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  return x.length; 
}
//Alternatively using optional chaining
function foo(x) {
  return x?.length || 0; //Return 0 if x?.length is null or undefined
}
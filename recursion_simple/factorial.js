const factorial =(base)=>{
  if(base===0)return 1;
  return base*factorial(base-1)
}
console.log(factorial(2))
const fib =(n)=>{
  if(n===1)return 1;
  if(n===2)return 1;
  let res=fib(n-1)+fib(n-2)
  return res
}

console.log(fib(35))
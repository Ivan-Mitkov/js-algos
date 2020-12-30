const reverseString =(str)=>{
  if(!str)return '';
  if(str.length===1)return str;
  return str[str.length-1] +reverseString(str.substring(0,str.length-1))
}
console.log(reverseString('abcd as'))
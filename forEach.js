 const letters=['a','b','c','d','e'];

 const f=function(){
  console.log("Un elemento");
 }
 letters.forEach(f);

 letters.forEach(function() {
    console.log("Un elemento");
 })

 letters.forEach(()=>console.log("Un elemento"));

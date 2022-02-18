
function welcome(firstName,lastName) {
    const welcomeMassage = `Welcome ${firstName} ${lastName} to this website`;
     return welcomeMassage;
   }
   function test1() {
   let enter = welcome("marzieh","nikkhoo") ;
   document.getElementById("demo").innerHTML=enter;
   }
//  define p with demo id & define button relate to test1 function

function getProduct(productName,imageAddress,price){
  const product =`<div style="width:406px;margin: auto auto;background-color: purple;border-radius: 3px;padding:3px;">
   <img src="${imageAddress}" style="width:400px;margin:auto auto;margin:3px ;">
   <h1>${productName}</h1>
   <p>${price}</p>
</div>`
return product;
}

function test2() {
  let enter = getProduct("pants","https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg","200$") ;
  document.getElementById("demo").innerHTML=enter;
  }
  //  define p with demo id & define button relate to test2 function

  function checkAge(age){
    
      let login="true"
      let denied="false";
      if(age >= 18){
          return login;

      }
      else{
          return denied;
      }
      }
  function test3(){
    let enter=checkAge(17);
    document.getElementById("demo").innerHTML=enter;
  }
   //  define p with demo id & define button relate to test3 function

   function  countryNameToCountryCode(country){


    if (country === "Iran") { return "+98";
    }
     else if (country === "USA") {
        return "+1";
    }
     else if (country === "Canada") {
        return "+1";
    }
     else if (country === "Spain")  { 
       return "+34";
    }
     else if (country === "Norway") {
       return "+47";
    }
     else if (country === "Sweden") {
       return "+46";  
    } 
    else if (country === "Andorra") {
      return "+376";  
    } 
    else if (country === "United Arab Emirates") {
      return "+971";  
    } 
    else if (country === "Afghanistan") {
      return "+93";  
    } 
    else if (country === "Antigua and Barbuda") {
      return "+1";  
    } 
    else if (country === "Anguilla") 
    {return "+1";  
    } 
    else if (country === "Albania") {
      return "+355";  
    } 
    else if (country === "Armenia") {
      return "+374";  
    } 
    else if (country === "Angola") {
      return "+244";  
    } 

   }
   function test4(){
    let enter=countryNameToCountryCode("Iran");
    document.getElementById("demo").innerHTML=enter;
  }
  //  define p with demo id & define button relate to test4 function
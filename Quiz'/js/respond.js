var name,password;
openForm=()=> {
    document.getElementById("myForm").style.display = "flex";
  }
  
closeForm=()=> {
    document.getElementById("myForm").style.display = "none";
  }
  msg=()=>
  {
      alert("login first");
  }
  validateform=()=>{  
    name=document.myform.name.value;  
    password=document.myform.password.value;  
    createCookie(name,"user", "2"); 
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  
 myFunction=()=>{
    //x = document.getElementById("myText").value;
    document.getElementById("detail").style.display = "flex";
    document.getElementById("user").innerHTML = name;
  }
  closetab=()=>{
    document.getElementById("detail").style.display = "none"; 
  }


  var dropCookie = true;                     
createCookie=(name,value,days)=> {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+"; path=/"; 
    }
}




  
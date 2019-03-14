var dropCookie = true;                      
var cookieDuration = 2;                    
var cookieName = 'Cookie';  
var cookieValue = 'on';          

createDiv=()=>{
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our privacy policy<a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><button>Got it</button></a></p>';    
 
    bodytag.insertBefore(div,bodytag.firstChild); 
     
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; 
}
 
checkCookie=(name) =>{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
eraseCookie=(name)=> {
    createCookie(name,"",-1);
}
 
window.onload = ()=>{
    if(checkCookie(name) != window.cookieValue){
        createDiv(); 
    }
}

removeMe=()=>{
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}
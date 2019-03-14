 _=(x)=>{
	return document.getElementById(x);
}
var i=0,a,b,c,d,correct=0,res;
 var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var quiz=myFunction(this);
              give(quiz); 
            } 
        }; 
        xhttp.open("GET","data.json", true);
        xhttp.send();
            myFunction=(xhttp)=> {
                var response = JSON.parse(xhttp.responseText);
                return response.quiz;
              }
give=quiz=>
{   
                test = _("test");
                if(i >= quiz.length){
                  _("b").style.display = "inline-flex";
                    test.innerHTML = "<h2>You got "+correct+" of "+quiz.length+" questions correct</h2>";
                    _("status").innerHTML = "Test Completed";
                    i = 0;
                    display();
                   // correct = 0;
                    return false;
                }
                _("status").innerHTML = "Question "+(i+1);
                q = quiz[i].question;
                a = quiz[i].options[0];
                b = quiz[i].options[1];
                c = quiz[i].options[2];
                d = quiz[i].options[3];
                res=quiz[i].answer;
                test.innerHTML = "<h3>"+q+"</h3>";
                test.innerHTML += "<input type='radio' name='choices' value='0'> "+a+"<br><br>";
                test.innerHTML += "<input type='radio' name='choices' value='1'> "+b+"<br><br>";
                test.innerHTML += "<input type='radio' name='choices' value='2'> "+c+"<br><br>";
                test.innerHTML += "<input type='radio' name='choices' value='3'> "+d+"<br><br>";
               test.innerHTML += '<button onclick="checkAnswer()">Submit</button>';

}
var width = 0;
checkAnswer=()=> {
  
    choices = document.getElementsByName("choices");
    var choice='',c=-1;
    var quiz=myFunction(xhttp);
	for(var j=0; j<choices.length; j++){
		if(choices[j].checked){
            c = Number(choices[j].value);
            choice=quiz[i].options[c];
		}
    }
    if(c==-1)
     {
        window.alert("Without answering you can't move to next ?");
     }
    else
     {
	  if(choice == res){
        correct++;
     }
     move();
    i++; 
}  
    give(quiz);
} 
move=()=>
{
var elem = document.getElementById("myBar");   
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width=width+10; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
      clearInterval(id);
    }
  }
}
display=()=>{
  if(correct<5)
     document.getElementById("bg").style.backgroundImage="url('cool.jpg');";
  else
    document.getElementById("bg").style.backgroundImage="url('shower.jpg')";
}


var secvis0 = document.getElementById("pag1")
var secvis1 = document.getElementById("pag2");
var secvis2 = document.getElementById("pag3");
var secvis3 = document.getElementById("pag4");
var secvis4 = document.getElementById("pag5");
var secvis5 = document.getElementById("pag6");
var secvis6 = document.getElementById("final");

var info01=document.getElementById("info1");
var info02=document.getElementById("info2");
var info03=document.getElementById("info3");
var info04=document.getElementById("info4");
var info05=document.getElementById("info5");

var but0=document.querySelector("#start");
var buta=document.querySelector("#aa");
var butb=document.querySelector("#bb");
var butc=document.querySelector("#cc");
var butd=document.querySelector("#dd");
var bute=document.querySelector("#ee");
var butf=document.querySelector("#ff");
var butg=document.querySelector("#gg");
var buth=document.querySelector("#hh");
var buti=document.querySelector("#ii");
var butj=document.querySelector("#jj");
var butk=document.querySelector("#kk");
var butl=document.querySelector("#ll");
var butm=document.querySelector("#mm");
var butn=document.querySelector("#nn");
var buto=document.querySelector("#oo");
var butp=document.querySelector("#pp");
var butq=document.querySelector("#qq");
var butr=document.querySelector("#rr");
var buts=document.querySelector("#ss");
var butt=document.querySelector("#tt");

var time = document.getElementById("timecounter");
var scorerecord = document.getElementById("scorerecord");
var iniInput = document.querySelector("#in");
var submit0=document.querySelector("#submit");
var scoretext = document.getElementById("scoretext");

var localRe=0;

var user=localStorage.getItem("user")
var hscoreholder=localStorage.getItem("holder")

if (user===null) {
    localStorage.setItem("user",0);
};

if (hscoreholder===null) {
    localStorage.setItem("holder",' no one');
};

scorerecord.textContent=user;

var counter=75;
var counter1=2;
var wrong=0;
var good=0;
var answcount=0;
var answer="";

init();

function init(){

    counter=75;
    counter1=2;
    wrong=0;
    good=0;
    answcount=0;
    answer="";

    secvis1.setAttribute("class","hidden");
    secvis2.setAttribute("class","hidden");
    secvis3.setAttribute("class","hidden");
    secvis4.setAttribute("class","hidden");
    secvis5.setAttribute("class","hidden");
    secvis6.setAttribute("class","hidden");
    
};


but0.addEventListener("click", function() {
    q1();  
   
});

function q1() {
   
    secvis0.setAttribute("class","hidden");
    secvis1.setAttribute("class","visible");
    secvis2.setAttribute("class","hidden");
    secvis3.setAttribute("class","hidden");
    secvis4.setAttribute("class","hidden");
    secvis5.setAttribute("class","hidden");
    secvis6.setAttribute("class","hidden");

    buta.addEventListener("click", function(event) {
            event.preventDefault();
            
            document.getElementById("aa").disabled=true;
            document.getElementById("bb").disabled=true;
            document.getElementById("cc").disabled=true;
            document.getElementById("dd").disabled=true;

            wrong=wrong+1;
            info01.textContent="wrong";
            answer=1;
            answcount=wrong+good;
    })    


    butb.addEventListener("click", function(event) {

            event.preventDefault();
            document.getElementById("aa").disabled=true;
            document.getElementById("bb").disabled=true;
            document.getElementById("cc").disabled=true;
            document.getElementById("dd").disabled=true;

            wrong=wrong+1;
            info01.textContent="wrong";
            answer=1;

            answcount=wrong+good;
            console.log(answer);

    })


    butc.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("aa").disabled=true;
            document.getElementById("bb").disabled=true;
            document.getElementById("cc").disabled=true;
            document.getElementById("dd").disabled=true;

            good=good+1;
            info01.textContent="good";
            answer=1;

            answcount=wrong+good;
    })


    butd.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("aa").disabled=true;
            document.getElementById("bb").disabled=true;
            document.getElementById("cc").disabled=true;
            document.getElementById("dd").disabled=true;

            wrong=wrong+1;
            info01.textContent="wrong";
            answer=1;

            answcount=wrong+good;
    })

    var timerInterval = setInterval(function() {
        counter--;
        time.textContent = counter;
            if((counter===0)||(answer===1)){
               
            clearInterval(timerInterval);
            countdown();
        }   
      
    }, 1000) 
    
}

function countdown() {
    counter1 = 2;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval1 = setInterval(function () {
        counter1--;
      if ((counter===0)&&(counter1===0)) {
        clearInterval(timeInterval1);
        finalscore();
      } else if (counter1===0) {
        clearInterval(timeInterval1);
        answer=0;
        q2();
      } else {
        return;
      }
    }, 1000);
}

function q2() {
   
    secvis0.setAttribute("class","hidden");
    secvis1.setAttribute("class","hidden");
    secvis2.setAttribute("class","visible");
    secvis3.setAttribute("class","hidden");
    secvis4.setAttribute("class","hidden");
    secvis5.setAttribute("class","hidden");
    secvis6.setAttribute("class","hidden");

    bute.addEventListener("click", function(event) {
        event.preventDefault();
                
        document.getElementById("ee").disabled=true;
        document.getElementById("ff").disabled=true;
        document.getElementById("gg").disabled=true;
        document.getElementById("hh").disabled=true;
            
        wrong=wrong+1;
        info02.textContent="wrong";
        answer=1;
        answcount=wrong+good;
       
    });
            
    butf.addEventListener("click", function(event) {
        event.preventDefault();
                
                
        document.getElementById("ee").disabled=true;
        document.getElementById("ff").disabled=true;
        document.getElementById("gg").disabled=true;
        document.getElementById("hh").disabled=true;
            
        wrong=wrong+1;
        info02.textContent="wrong";
        answer=1;
             
        answcount=wrong+good;   
          
    });
            
    butg.addEventListener("click", function(event) {
        event.preventDefault();
                
        document.getElementById("ee").disabled=true;
        document.getElementById("ff").disabled=true;
        document.getElementById("gg").disabled=true;
        document.getElementById("hh").disabled=true;
            
        good=good+1;
        info02.textContent="good";
        answer=1;
        
        answcount=wrong+good;    
            
    });
            
    buth.addEventListener("click", function(event) {
        event.preventDefault();
                
        document.getElementById("ee").disabled=true;
        document.getElementById("ff").disabled=true;
        document.getElementById("gg").disabled=true;
        document.getElementById("hh").disabled=true;
        
        wrong=wrong+1;
        info02.textContent="wrong";
        answer=1;
             
        answcount=wrong+good;
            
    });

    var timerInterval2 = setInterval(function() {
        counter--;
        time.textContent = counter;
            if((counter===0)||(answer===1)){
               
            clearInterval(timerInterval2);
            countdown2();
        }   
      
    }, 1000) 
    
}

function countdown2() {
    counter1 = 2;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval3 = setInterval(function () {
        counter1--;
      if ((counter===0)&&(counter1===0)) {
        clearInterval(timeInterval3);
        finalscore();
      } else if (counter1===0) {
        clearInterval(timeInterval3);
        answer=0;
        q3();
      } else {
        return;
      }
    }, 1000);
}

function q3() {
 
    secvis0.setAttribute("class","hidden");
    secvis1.setAttribute("class","hidden");
    secvis2.setAttribute("class","hidden");
    secvis3.setAttribute("class","visible");
    secvis4.setAttribute("class","hidden");
    secvis5.setAttribute("class","hidden");
    secvis6.setAttribute("class","hidden");

    buti.addEventListener("click", function(event) {
        event.preventDefault();
  
       document.getElementById("jj").disabled=true;
       document.getElementById("kk").disabled=true;
       document.getElementById("ll").disabled=true;
       document.getElementById("ii").disabled=true;
    
       good=good+1;
       info03.textContent="good";
       answer=1;
    
       answcount=wrong+good;
       
    });
    
    butj.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("jj").disabled=true;
        document.getElementById("kk").disabled=true;
        document.getElementById("ll").disabled=true;
        document.getElementById("ii").disabled=true;
    
        wrong=wrong+1;
        info03.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;
    
    });
    
    butk.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("jj").disabled=true;
        document.getElementById("kk").disabled=true;
        document.getElementById("ll").disabled=true;
        document.getElementById("ii").disabled=true;

        wrong=wrong+1;
        info03.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;
    
    });
    
    butl.addEventListener("click", function(event) {
        event.preventDefault();
 
        document.getElementById("jj").disabled=true;
        document.getElementById("kk").disabled=true;
        document.getElementById("ll").disabled=true;
        document.getElementById("ii").disabled=true;

       wrong=wrong+1;
       info03.textContent="wrong";
       answer=1;
    
       answcount=wrong+good;
    });

    var timerInterval4 = setInterval(function() {
        counter--;
        time.textContent = counter;
            if((counter===0)||(answer===1)){
               
            clearInterval(timerInterval4);
            countdown3();
        }   
      
    }, 1000) 
    
}

function countdown3() {
    counter1 = 2;
  
    var timeInterval5 = setInterval(function () {
        counter1--;
      if ((counter===0)&&(counter1===0)) {
        clearInterval(timeInterval5);
        finalscore();
      } else if (counter1===0) {
        clearInterval(timeInterval5);
        answer=0;
        q4();
      } else {
        return;
      }
    }, 1000);
}

function q4() {
    

    secvis0.setAttribute("class","hidden");
    secvis1.setAttribute("class","hidden");
    secvis2.setAttribute("class","hidden");
    secvis3.setAttribute("class","hidden");
    secvis4.setAttribute("class","visible");
    secvis5.setAttribute("class","hidden");
    secvis6.setAttribute("class","hidden");

    butm.addEventListener("click", function(event) {
        event.preventDefault();
   
       document.getElementById("mm").disabled=true;
       document.getElementById("nn").disabled=true;
       document.getElementById("oo").disabled=true;
       document.getElementById("pp").disabled=true;
    
       good=good+1;
       info04.textContent="good";
       answer=1;
    
       answcount=wrong+good;        
    });
    
    butn.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("mm").disabled=true;
        document.getElementById("nn").disabled=true;
        document.getElementById("oo").disabled=true;
        document.getElementById("pp").disabled=true;
     
        wrong=wrong+1;
        info04.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;    
    });
    
    buto.addEventListener("click", function(event) {
        event.preventDefault();

        document.getElementById("mm").disabled=true;
        document.getElementById("nn").disabled=true;
        document.getElementById("oo").disabled=true;
        document.getElementById("pp").disabled=true;
          
        wrong=wrong+1;
        info04.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;    
    });
    
    butp.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("mm").disabled=true;
        document.getElementById("nn").disabled=true;
        document.getElementById("oo").disabled=true;
        document.getElementById("pp").disabled=true;     
     
        wrong=wrong+1;
        info04.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;
    });
    

    var timerInterval6 = setInterval(function() {
        counter--;
        time.textContent = counter;
            if((counter===0)||(answer===1)){
               
            clearInterval(timerInterval6);
            countdown4();
        }   
      
    }, 1000) 
    
}

function countdown4() {
    counter1 = 2;
  
   
    var timeInterval7 = setInterval(function () {
        counter1--;
      if ((counter===0)&&(counter1===0)) {
        clearInterval(timeInterval7);
        finalscore();
      } else if (counter1===0) {
        clearInterval(timeInterval7);
        answer=0;
        q5();
      } else {
        return;
      }
    }, 1000);
}

function q5() {
    // Sets interval in variable
    secvis0.setAttribute("class","hidden");
    secvis1.setAttribute("class","hidden");
    secvis2.setAttribute("class","hidden");
    secvis3.setAttribute("class","hidden");
    secvis4.setAttribute("class","hidden");
    secvis5.setAttribute("class","visible");
    secvis6.setAttribute("class","hidden");

    butq.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
       document.getElementById("rr").disabled=true;
       document.getElementById("ss").disabled=true;
       document.getElementById("tt").disabled=true;
       document.getElementById("qq").disabled=true;
    
       wrong=wrong+1;
       info05.textContent="wrong";
       answer=1;
    
       answcount=wrong+good;

    
    });
    
    butr.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("rr").disabled=true;
        document.getElementById("ss").disabled=true;
        document.getElementById("tt").disabled=true;
        document.getElementById("qq").disabled=true;
     
        good=good+1;
        info05.textContent="good";
        answer=1;
     
        answcount=wrong+good;

    
    });
    
    buts.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("rr").disabled=true;
        document.getElementById("ss").disabled=true;
        document.getElementById("tt").disabled=true;
        document.getElementById("qq").disabled=true;
     
        wrong=wrong+1;
        info05.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;

    
    });
    
    butt.addEventListener("click", function(event) {
        event.preventDefault();
        
        // document.getElementById("#aa").disabled;
        document.getElementById("rr").disabled=true;
        document.getElementById("ss").disabled=true;
        document.getElementById("tt").disabled=true;
        document.getElementById("qq").disabled=true;
     
        wrong=wrong+1;
        info05.textContent="wrong";
        answer=1;
     
        answcount=wrong+good;

    });
    

    var timerInterval8 = setInterval(function() {
        counter--;
        time.textContent = counter;
            if((counter===0)||(answer===1)){
               
            clearInterval(timerInterval8);
            countdown5();
        }   
      
    }, 1000) 
    
}

function countdown5() {
    counter1 = 2;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval9 = setInterval(function () {
        counter1--;
      if ((counter1===0)) {
        clearInterval(timeInterval9);
        finalscore();
      }
    }, 1000);
}

function finalscore(){

     
    secvis0.setAttribute("class","hidden");
    secvis1.setAttribute("class","hidden");
    secvis2.setAttribute("class","hidden");
    secvis3.setAttribute("class","hidden");
    secvis4.setAttribute("class","hidden");
    secvis5.setAttribute("class","hidden");
    secvis6.setAttribute("class","visible");

    

    if ((counter-(wrong*10)-((5-answcount)*10))<0) {
            localRe=0;
    } else {
        localRe=(counter-(wrong*10)-((5-answcount)*10))
    }

    scoretext.textContent = localRe;

 
    submit0.addEventListener("click", function (event) {

        

        event.preventDefault();
        
        var name1=iniInput.value;
        
            
        if (user<localRe) {
            localStorage.setItem("user",localRe);
            
            localStorage.setItem("holder",name1);
            window.alert("you have highest score");
            location.reload();
           
        } else {
            
            window.alert("highest score is held by_"+hscoreholder+"("+user+")");
            location.reload();
            
        }; 
               

    })
};
var user=document.getElementsByClassName("UserName")[0];
var pass=document.getElementsByClassName("pass")[0];
var sing=document.getElementsByClassName("Sing")[0];
var login=document.getElementsByClassName("login")[0];

login.onmouseover=function(){
    login.style.fontSize="50px";
    login.style.color="red";
};
login.onmouseout=function(){
    login.style.fontSize="40px";
    login.style.color="black";
};
user.onclick=function () {

    user.value="";
    
   
    
}
user.onmouseover=function(){
    
    user.style.border="3px solid blue"
};
user.onmouseout=function () {
    
    user.style.border="2px solid black"
    
}
user.onchange=function(){
    user.style.border="3px solid green"
};

pass.onclick=function () {

    pass.value="";
    
}
pass.onmouseover=function(){
    
    pass.style.border="3px solid blue"
};
pass.onmouseout=function () {
    
    pass.style.border="2px solid black"
    
}
pass.onchange=function(){
    pass.style.border="3px solid green"
};




$(function Selam(){
    
    var x =0;
    var div1=$(".div1");
    var div2=$(".div2");
    var div3=$(".div3");
    var menu=$(".menu");
   
    div1.animate({
        opacity: 1

    });
    
    div2.animate({
        opacity:1
    });
    div2.animate({
        left:'+=50%',
    
        
    },1000);
    div3.animate({
        opacity:1
    });
    div3.animate({
        left:'+=94%' 
        
    },1000);
    div3.animate({
        top:'+=60%' 
        
    },1000);
    
    div2.animate({
        top:'+=60%' 
        
    },1000);
    div1.animate({
        top:'+=60%' 
        
    },2000);

    div1.animate({
        left:'+=94%'

    },1000);
    div3.animate({
        left:'-=94%'

    },1000);
    div1.animate({
        left:'-=44%'

    },1000);
    div3.animate({
        left:'+=50%'

    },1000);    
    div2.animate({

        left:'+=250px',
        top:'-=50%',

    },700); 
    div1.animate({

        left:'+=250px',
        top:'-=50%',

    },700); 

    div3.animate({

        left:'+=250px',
        top:'-=50%',

    },700); 




    div1.animate({
        width: '0px',
        height: '0px',


    },1000);
    div3.animate({
        width: '0px',
        height: '0px'

    },1000);
    div2.animate({
        width: '0px',
        height: '0px'
        

    },3000);

    menu.animate({

        opacity:1

    },6000);

   
  
   
    

   
  

    

});





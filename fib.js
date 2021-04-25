var num;
var n1=0;
var n2=1;
var n3;
function fibanaci(){
    num=parseInt(document.getElementById('fib').value);
    if(num==1){
          document.getElementById('result').innerHTML=0;
    }
    if(num==2)
    {
      document.getElementById('result').innerHTML='0'+','+'1';
    }
   
    console.log('fibonacci series');
       var output="0"+","+"1";
    
    
       for(var i=3;i<=num;i++)
       {  
             n3=n1+n2;
             n1=n2;
             n2=n3;
             output+=','+n3;
             document.getElementById('result').innerHTML=output;
             console.log(output);
             
       }
       
        return false;
}
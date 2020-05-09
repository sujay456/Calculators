var ac=document.getElementById('ac');//done
var rem=document.getElementById('remainder');//d
var del=document.getElementById('delete');//d
var divide=document.getElementById('divide');//d
var seven=document.getElementById('seven');//done
var eight=document.getElementById('eight');//d
var nine=document.getElementById('nine');//d
var multiply=document.getElementById('multiply');//d
var four=document.getElementById('four');//d
var five=document.getElementById('five');//d
var six=document.getElementById('six');//d
var subtract=document.getElementById('subtract');//d
var one=document.getElementById('one');//d
var two=document.getElementById('two');//d
var three=document.getElementById('three');//d
var add=document.getElementById('add');//d
var sign=document.getElementById('sign');//d
var zero=document.getElementById('zero');//d
var point=document.getElementById('point');
var equal=document.getElementById('equal');//d
var op=document.getElementById('operator');//d
//-----------------------------------------------------
var answer=document.getElementById('answer');
var a=document.getElementById('answer_container');
a.style.right="275px";
// Function of ac
ac.addEventListener('click',function()
{
   answer.innerText=0;
   op.innerText="";
   op1='';
   op2='';
   operator='';
});

var op1,op2,operator;
op1='';
op2='';
operator='';
//-------------------------operator--------------
rem.addEventListener('click',function()
{
    if(op1!='')
    { 
        operator='%';
        op.innerText="%";
    }
});
add.addEventListener('click',function()
{
    if(op1!='')
    { 
        operator='+';
        op.innerText="+";
    }
});
subtract.addEventListener('click',function()
{
    if(op1!='')
    { 
        operator='-';
        op.innerText="-";
    }
});
multiply.addEventListener('click',function()
{
    if(op1!='')
    { 
        operator='*';
        op.innerText="*";
    }
});
divide.addEventListener('click',function()
{
    if(op1!='')
    { 
        operator='/';
        op.innerText="/";
    }
});
del.addEventListener('click',function()
{
    if(operator=='')
    {
        op1=op1.slice(0,op1.length-1);
        answer.innerText=op1;
    }
    else
    {
        op2=op2.slice(0,op2.length-1);
        answer.innerText=op2;
    }

    if(op1=='')
    {
        answer.innerText=0;
    }
});
sign.addEventListener('click',function()
{
    if(op1!='')
    {
        op1="-"+op1;
        answer.innerText=op1;
    }
    if(op2!='')
    {
        op2="-"+op2;
        answer.innerText=op2;
    }
})
point.addEventListener('click',function()
{
    if(op1!='')
    {
        op1=op1+".";
        answer.innerText=op1;
    }
    if(op2!='')
    {
        op2=op2+".";
        answer.innerText=op2;
    }
})
//-----------------numbers------------------
zero.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'0';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'0';
        answer.innerText=op2;
    }

});

one.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'1';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'1';
        answer.innerText=op2;
    }
});
two.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'2';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'2';
        answer.innerText=op2;
    }
});
three.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'3';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'3';
        answer.innerText=op2;
    }
});
four.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'4';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'4';
        answer.innerText=op2;
    }
});
five.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'5';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'5';
        answer.innerText=op2;
    }
});
six.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'6';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'6';
        answer.innerText=op2;
    }
});
seven.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'7';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'7';
        answer.innerText=op2;
    }
});
eight.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'8';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'8';
        answer.innerText=op2;
    }
});
nine.addEventListener('click',function()
{
    
    if(operator=='')
    {
        op1=op1+'9';
        answer.innerText=op1;
    }
    else
    {
        op2=op2+'9';
        answer.innerText=op2;
    }
});
//---------------results-------------------
var result;

equal.addEventListener('click',function()
{
    if(operator=='%')
       {
           result=op1/100;
           answer.innerText=result;

       }
    if(op1!='' && op2!='' )
   {
       
     result=eval(op1 +" "+ operator +" "+ op2);
     answer.innerText=result;
     op.innerText="";
   }
   op1=result;
   op2="";
}
);
document.addEventListener('keypress',function(event)
{
    
    if(operator=="")
    {
        op1=op1+event.key;
        answer.innerText=op1;
    }
    else
    {
        op2=op2+event.key;
        answer.innerText=op2;
    }
});



    



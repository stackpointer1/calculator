function display(element){
    document.getElementById("input").value+=element;
}
//function to  do calcaulation
function solve(){
    let x=document.getElementById("input").value;
    let y=eval(x);
    document.getElementById("input").value=y
}
function clr()
{
    document.getElementById("input").value=""
}
studentarray=[]
function submit(){
    for(i=1;i<=4;i++){
var name=document.getElementById("Name"+i).value
studentarray.push(name)
    }
    console.log(studentarray)
    document.getElementById("result").innerHTML=studentarray;
 displayarray=[]
 for (j=0;j<studentarray.length;j++){
     displayarray.push("<h4>name-"+studentarray[j]+"</h4>")
 }
 document.getElementById("result1").innerHTML=displayarray.join(" ")
    document.getElementById("submit").style.display="none";
document.getElementById("sorting").style.display="inline";

}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    document.getElementById("result").innerHTML=studentarray;
}   
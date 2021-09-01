var s = false;
function toggle(){
  if(s){
    document.getElementById("password"). setAttribute("type", "password");
    s = false;
  }else{
    document.getElementById("password"). setAttribute("type", "text");
    s = true;
  }
}
function newWindow(src, title="Untitled Window", ico="", wclass="modern", width, height, x="center", y="center"){
  let win = new WinBox({
    url: src,
    title: title,
    icon: ico,
    class: wclass,
    x:x,
    y:y,
  })
}
const smenu = document.getElementById("menu")
function menu(){
  if(document.getElementById("menu").hidden == false){
    smenu.hidden = true
    console.log("The menu should hide")
  }
  else{
    smenu.hidden = false
    console.log("The menu should show")
  }

}
smenu.onclick = function(){
  smenu.hidden=true
  console.log("The menu should hide and whatever was clicked should do something")
}

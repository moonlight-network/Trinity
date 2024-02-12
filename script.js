function newWindow(src, title="Untitled Window", ico="", width, height, x="center", y="center"){
  let win = new WinBox({
    url: src,
    title: title,
    icon: ico,
    width: width,
    height:height,
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
function Aero(){
  console.log("Should do something")
  if(document.getElementById("theme").href.includes("themes/frutiger.css") == false){
    document.getElementById("theme").href = "themes/frutiger.css"
    console.log("Should switch to the Frutiger Aero theme")
  }else{
    document.getElementById("theme").href = "themes/default.css"
  }
}

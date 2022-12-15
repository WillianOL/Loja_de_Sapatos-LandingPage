let menu = document.getElementById("AbriMenu")

function abrirMenu(){
    if(menu.classList.contains('MenuShow')){
        menu.classList.remove('MenuShow')
    } else{
        menu.classList.add('MenuShow')
    }
}
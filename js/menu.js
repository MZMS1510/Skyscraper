document.getElementById("open-menu").addEventListener("click", function(){
    let menu = document.getElementById("menu")
    let open_menu = document.getElementById("open-menu")

    if (menu.style.left = "-460px"){
        menu.style.left = "0"
        menu.style.transition = "1s ease all"
        open_menu.style.visibility = "hidden"
    }
})

document.getElementById("close-menu").addEventListener("click", function(){
    let menu = document.getElementById("menu")
    let open_menu = document.getElementById("open-menu")

    if(menu.style.left = "0"){
        menu.style.left = "-460px"
        menu.style.transition = "1s ease all"
        open_menu.style.visibility = "visible"
    }
})

document.getElementById("open-universe").addEventListener("click", function(){
    let menu_universe = document.getElementById("menu-universe")
    let menu = document.getElementById("menu")
    let close_universe = document.getElementById("close-universe")

    if (menu_universe.style.left = "-460px"){
        menu.style.left = "-460px"
        menu.style.transition = "0.9s ease all"
        close_universe.style.fontWeight = "bold"
        close_universe.style.textDecoration = "none"
        close_universe.style.color = "white"
        menu_universe.style.left = "0"
        menu_universe.style.transition = "1s ease all"
    }
})

document.getElementById("close-universe").addEventListener("click", function(){
    let menu_universe = document.getElementById("menu-universe")
    let menu = document.getElementById("menu")
    let close_universe = document.getElementById("close-universe")

    if(menu_universe.style.left = "0"){
        menu.style.left = "0"
        menu.style.transition = "0.9s ease all"
        menu_universe.style.left = "-460px"
        menu_universe.style.transition = "1s ease all"
    }
})
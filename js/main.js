




var element = document.getElementById("darcMod")
var btn = document.getElementById("btn")
var btn0 = document.getElementById("btn0")
btn.classList.add("dn")





function darcMode(){



        // element.classList.toggle("mod")
        element.classList.add("mod")
        btn0.classList.add("dn")
        btn.classList.remove("dn")
        

}

function lightMode(){



        element.classList.remove("mod")
        btn.classList.add("dn")
        btn0.classList.remove("dn")

}



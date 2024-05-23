var val = 0
var player = 0

var nbP1 = 0
var nbP2 = 0

function lancement(id1,id2){
    val = Math.floor((Math.random() * 6) + 1);
    if(val == 1){
    document.getElementById("centre").style.backgroundImage = "url('IMG/1.png')"
    }
    if(val == 2){
        document.getElementById("centre").style.backgroundImage = "url('IMG/2.jpeg')"
    }
    if(val == 3){
        document.getElementById("centre").style.backgroundImage = "url('IMG/3.jpeg')"
    }
    if(val == 4){
        document.getElementById("centre").style.backgroundImage = "url('IMG/4.png')"
    }
    if(val == 5){
        document.getElementById("centre").style.backgroundImage = "url('IMG/5.jpeg')"
    }
    if(val == 6){
        document.getElementById("centre").style.backgroundImage = "url('IMG/6.jpeg')"
    }
    if(val != 6){
        player += 1
        document.getElementById(id1).style.visibility = "hidden"
        document.getElementById(id2).style.visibility = "visible"
    }
}
function deplacer(id,nature,player){
    if (val != 0){
        var point = document.getElementById(id)
        var value = Math.floor(point.textContent)
        if (val == 6 && value == -1 ){
            if(nature == 'red'){
                if(document.getElementById(player).style.visibility === "hidden"){
                    point.style.top = "0px"
                    point.style.left = "0px"
                    point.style.bottom = "0px"
                    point.style.right = "0px"
                    if(document.getElementById('0').hasChildNodes()){
                        if(document.getElementById('0').firstElementChild.classList.contains('pion-red')){
                            
                        }else{
                            document.getElementById('0').firstElementChild.textContent = -1
                            document.getElementById('HomeJaune').appendChild(document.getElementById('0').firstElementChild)
                        }
                    }
                document.getElementById('0').appendChild(point)
                point.style.left = "25px"
                point.style.top = "21px"
                val = 0
                value += 1
                point.textContent = value
            }else{
                alert("c'est le tour de "+player)
            }
            }else{
                if(document.getElementById(player).style.visibility === "hidden"){
                    point.style.left = "25px"
                    point.style.top = "21px"
                    if(document.getElementById('26').hasChildNodes()){
                        if(document.getElementById('26').firstElementChild.classList.contains('pion-jaune')){
                            
                        }else{
                            document.getElementById('26').firstElementChild.textContent = -1
                            document.getElementById('HomeRouge').appendChild(document.getElementById('26').firstElementChild)
                        }
                    }
                    document.getElementById('26').appendChild(point)
                    val = 0
                    value += 1
                    point.textContent = value
                }else{
                    alert("c'est le tour de "+player)
                }
            }
        }else{
            if(value+val <= 55 && value >= 0){
                if(nature == 'red'){
                    if(val == 6){
                        if(document.getElementById(player).style.visibility === "hidden"){
                            var parent = point.parentElement
                            parent.removeChild(point)
                            value += val
                            point.textContent = value
                            var pos = Math.floor(parent.id) + val
                            if(document.getElementById(pos).hasChildNodes()){
                                if(document.getElementById(pos).firstElementChild.classList.contains('pion-red')){
                                    
                                }else{
                                    document.getElementById(pos).firstElementChild.textContent = -1
                                    document.getElementById('HomeJaune').appendChild(document.getElementById(pos).firstElementChild)
                                }
                            }
                            document.getElementById(pos).appendChild(point)
                            val = 0
                        }else{
                            alert("c'est le tour de "+player)
                        }
                    }else{
                        if(document.getElementById(player).style.visibility !== "hidden"){
                            var parent = point.parentElement
                            parent.removeChild(point)
                            value += val
                            point.textContent = value
                            var pos = Math.floor(parent.id) + val
                            if(document.getElementById(pos).hasChildNodes()){
                                if(document.getElementById(pos).firstElementChild.classList.contains('pion-red')){
                                    
                                }else{
                                    document.getElementById(pos).firstElementChild.textContent = -1
                                    document.getElementById('HomeJaune').appendChild(document.getElementById(pos).firstElementChild)
                                }
                            }
                            document.getElementById(pos).appendChild(point)
                            val = 0
                        }else{
                            alert("c'est le tour de "+player)
                        }
                    }
                }else{
                    if(val == 6){
                        if(document.getElementById(player).style.visibility === "hidden"){
                            var parent = point.parentElement
                            parent.removeChild(point)
                            value += val
                            point.textContent = value
                            if(Math.floor(parent.id) +val >= 52){
                                var pos = (Math.floor(parent.id)+val) % 52
                            }else{
                                var pos = Math.floor(parent.id) + val
                            }
                            if(document.getElementById(pos).hasChildNodes()){
                                if(document.getElementById(pos).firstElementChild.classList.contains('pion-jaune')){
                                    
                                }else{
                                    document.getElementById(pos).firstElementChild.textContent = -1
                                    document.getElementById('HomeRouge').appendChild(document.getElementById(pos).firstElementChild)
                                }
                            }
                            document.getElementById(pos).appendChild(point)
                            val = 0
                        }else{
                            alert("c'est le tour de "+player)
                        }
                    }else{
                        if(document.getElementById(player).style.visibility !== "hidden"){
                            var parent = point.parentElement
                            parent.removeChild(point)
                            value += val
                            point.textContent = Math.floor(value)
                            if(Math.floor(parent.id) +val >= 52){
                                var pos = (Math.floor(parent.id)+val) % 52
                            }else{
                                var pos = Math.floor(parent.id) + val
                            }
                            if(document.getElementById(pos).hasChildNodes()){
                                if(document.getElementById(pos).firstElementChild.classList.contains('pion-jaune')){
                                    
                                }else{
                                    document.getElementById(pos).firstElementChild.textContent = -1
                                    document.getElementById('HomeRouge').appendChild(document.getElementById(pos).firstElementChild)
                                }
                            }
                            document.getElementById(pos).appendChild(point)
                            val = 0
                        }else{
                            alert("c'est le tour de "+player)
                        }
                    }
                }
            }
        }
        if(value+val >= 51 && nature != 'red'){
            if(document.getElementById(player).style.visibility === "visible"){
                var pos = 62 + (val+value)%51
                document.getElementById(pos).appendChild(point)
                val = 0
            }
        }
        if(value == 55){
            point.style.visibility = "hidden"
            if(nature == 'red'){
                nbP1 += 1
            }else{
                nbP2 += 1
            }
        }
    }
}

addEventListener('keydown', function (e){
    if(e.keyCode == 32){
        if(player % 2 == 0){
            lancement("p1","p2")
        }else{
            lancement("p2","p1")
        }
    }
})



addEventListener('mouseover',fini)


function fini(){
    if(nbP1 == 4){
        alert("Le player 1 a gagner !!")
    }
    if(nbP2 == 4){
        alert("Le player 2 a gagner !!")
    }
}

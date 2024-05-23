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
function deplacer(id,nature){
    if (val != 0){
        var point = document.getElementById(id)
        var value = Math.floor(point.textContent)
        if (val == 6 && value == -1 ){
            if(nature == 'red'){
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
            }else{
                point.style.left = "25px"
                point.style.top = "21px"
                if(document.getElementById('26').hasChildNodes()){
                    if(document.getElementById('0').firstElementChild.classList.contains('pion-jaune')){
                        
                    }else{
                        document.getElementById('26').firstElementChild.textContent = -1
                        document.getElementById('HomeRouge').appendChild(document.getElementById('26').firstElementChild)
                    }
                }
                document.getElementById('26').appendChild(point)
            }
            value += 1
            point.textContent = value
        }else{
            if(value+val <= 55 && value >= 0){
                var parent = point.parentElement
                parent.removeChild(point)
                value += val
                point.textContent = value
                if(nature == 'red'){
                    var pos = Math.floor(parent.id) + val
                    if(document.getElementById(pos).hasChildNodes()){
                        if(document.getElementById(pos).firstElementChild.classList.contains('pion-red')){
    
                        }else{
                            document.getElementById(pos).firstElementChild.textContent = -1
                            document.getElementById('HomeJaune').appendChild(document.getElementById(pos).firstElementChild)
                        }
                    }
                    document.getElementById(pos).appendChild(point)
                }else{
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
                }
                val = 0
            }
        }
        if(value+val >= 51 && nature != 'red'){
            var pos = 62 + (val+value)%51
            document.getElementById(pos).appendChild(point)
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


if(nbP1 == 4){
    alert("Le player 1 a gagner !!")
}


if(nbP2 == 4){
    alert("Le player 2 a gagner !!")
}


function haveSameClasses(div1, div2) {
    // Récupérer les listes de classes des deux divs
    const classes1 = div1.classList;
    const classes2 = div2.classList;

    // Convertir les listes de classes en tableaux pour comparaison
    const array1 = Array.from(classes1);
    const array2 = Array.from(classes2);

    // Vérifier si les deux tableaux ont la même longueur
    if (array1.length !== array2.length) {
        return false;
    }

    // Trier les tableaux pour une comparaison plus facile
    array1.sort();
    array2.sort();

    // Comparer les classes
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

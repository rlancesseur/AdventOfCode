fetch("input.txt")
.then(response => response.text())
.then(data => {

    //Part One

    const lignes = data.split("\n") 
    const gauche = []
    const droite = []
    let lignesSplit = 0
    let add = 0
    let resultat1 = 0

    for (let i = 0; i < lignes.length; i++) {
        lignesSplit = lignes[i].split("   ")
        gauche.push(lignesSplit[0])
        droite.push(lignesSplit[1] - "\r")
    }

    
    gauche.sort()
    droite.sort()

    for(let i = 0; i < gauche.length; i++) {
        if(gauche[i] > droite[i]) {
            add = gauche[i] - droite[i]
        }
        else {
            add = droite[i] - gauche[i]
        }
        resultat1 += add
    }

    console.log(resultat1)


    // Part Two

    let resultat2 = 0
    let gaucheInt = gauche.map(Number)

    for(let i = 0; i < gauche.length; i++) {
        let compteur = 0
        for(let j = 0; j < droite.length; j++) {
            if(gaucheInt[i] === droite[j]) {
                compteur++
            }
        }
        resultat2 += gaucheInt[i] * compteur
    }

    console.log(resultat2)
})


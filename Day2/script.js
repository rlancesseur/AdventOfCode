fetch("input.txt")
.then(response => response.text())
.then(data => {
    const lignes = data.split("\n")
    let resultat = 0

    for(let i = 0; i < lignes.length; i++) {
        let lignesSplit = lignes[i].split(" ").map(Number)
        let compteur = 0
        for(let j = 0; j < lignesSplit.length-1; j++) {
            if(lignesSplit[j] < lignesSplit[j+1] && ((lignesSplit[j+1]) - lignesSplit[j]) <= 3){
                compteur++
            }
            else if(lignesSplit[j] > lignesSplit[j+1] && ((lignesSplit[j]) - lignesSplit[j+1]) <= 3){
                compteur++
            }
        }
        if(compteur === lignesSplit.length - 1) {
            resultat++
        }
    }
    console.log(resultat)
})
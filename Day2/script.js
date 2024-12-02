fetch("input.txt")
.then(response => response.text())
.then(data => {
    const lignes = data.split("\n")
    let resultat = 0

    for(let i = 0; i < lignes.length; i++) {
        let lignesSplit = (lignes[i].split(" "))
        let lignesSplitInt = lignesSplit.map(Number)
        let compteur = 0
        for(let j = 0; j < lignesSplitInt.length-1; j++) {
            if(j === lignesSplitInt.length){
                lignesSplitInt[j] -= "\r"
            }
            if(lignesSplitInt[j] < lignesSplitInt[j+1] && ((lignesSplitInt[j+1]) - lignesSplitInt[j]) <= 3){
                compteur++
            }
            else if(lignesSplitInt[j] > lignesSplitInt[j+1] && ((lignesSplitInt[j]) - lignesSplitInt[j+1]) <= 3){
                compteur++
            }
        }
        if(compteur === lignesSplitInt.length) {
            resultat++
        }
    }
    console.log(resultat)
})

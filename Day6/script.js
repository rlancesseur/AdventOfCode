fetch("input.txt")
.then(response => response.text())
.then(data => {
    const matrice = data.split("\n").map(ligne => ligne.split(""))

    const OuEstPositionActuelle = (matrice) => {
        for(let i = 0; i < matrice.length; i ++) {
            for(let j = 0; j < matrice[i].length; j++) {
                if(matrice[i][j] === "^"){
                    return {ligne: i, colonne: j}
                }
            }
        }
    }

    const positionActuelle = OuEstPositionActuelle(matrice)
    let resultat = 0

    const haut = (matrice, positionActuelle) => {
        const ligne = positionActuelle.ligne
        const colonne = positionActuelle.colonne
        
        const valeurDessus = matrice[ligne - 1][colonne]
        while(valeurDessus != "#" && ligne > 0) {
            matrice[ligne - 1][colonne] = "^"
            matrice[ligne][colonne] = "."
            resultat++
            haut(matrice, [ligne - 1, colonne])
        }
        if (ligne === 0) {
            return resultat
        }
        else {
            droite(matrice, positionActuelle)
        } 
    }

    const droite = (matrice, positionActuelle) => {
        const ligne = positionActuelle.ligne
        const colonne = positionActuelle.colonne
        
        const valeurDroite = matrice[ligne][colonne + 1]
        while(valeurDroite != "#" && colonne < matrice[0].length) {
            matrice[ligne][colonne + 1] = "^"
            matrice[ligne][colonne] = "."
            resultat++
            droite(matrice, [ligne, colonne + 1])
        }
        if (colonne === matrice[0].length) {
            return resultat
        }
        else {
            bas(matrice, positionActuelle)
        }
    }

    const bas = (matrice, positionActuelle) => {
        const ligne = positionActuelle.ligne
        const colonne = positionActuelle.colonne
        
        const valeurBas = matrice[ligne + 1][colonne]
        while(valeurBas != "#" && ligne < matrice.length) {
            matrice[ligne +1][colonne] = "^"
            matrice[ligne][colonne] = "."
            resultat++
            bas(matrice, [ligne + 1, colonne])
        }
        if (ligne === matrice.length) {
            return resultat
        }
        else {
            gauche(matrice, positionActuelle)
        } 
    }

    const gauche = (matrice, positionActuelle) => {
        const ligne = positionActuelle.ligne
        const colonne = positionActuelle.colonne

        const valeurGauche = matrice[ligne][colonne - 1]
        while(valeurGauche != "#" && colonne > 0) {
            matrice[ligne][colonne - 1] = "^"
            matrice[ligne][colonne] = "."
            resultat++
            gauche(matrice, [ligne, colonne - 1])
        }
        if (colonne === 0) {
            return resultat
        }
        else {
            haut(matrice, positionActuelle)
        }
    }

    haut(matrice, positionActuelle)
    //A finir

    console.log(resultat)
})
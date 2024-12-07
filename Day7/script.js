fetch("input.txt")
.then(response => response.text())
.then(data => {
    const lignes = data.split('\n')
    const resultatsLignes = []
    const nombresSuites = []

    lignes.forEach(ligne => {
        const [resultatLigne, suiteLigne] = ligne.split(':')

        resultatsLignes.push(parseInt(resultatLigne))
        nombresSuites.push(suiteLigne.trim().split(" ").map(Number))
    })

    let resultat = 0

    for(let i = 0; i < lignes.length; i++){
        let sommeNombres = 0
        let produitNombres = 1
        for(let j = 0; j < nombresSuites[i].length; j++){
            sommeNombres += nombresSuites[i][j]
            produitNombres *= nombresSuites[i][j]
        }
        if(resultatsLignes[i] === sommeNombres || resultatsLignes[i] === produitNombres){
            resultat += resultatsLignes[i]
        }
    }

    console.log(resultat)

    //Ne vérifie que si le résultat est obtenue par la somme ou le produit de tous les nombres.
    //A refaire avec du récursif
})

const regex1 = /mul\(\d+,\d+\)/g
const regex2 = /\d+,\d+/g

fetch("input.txt")
.then(response => response.text())
.then(data => {
    const tabRegex = data.match(regex1)
    const tabRegexNbr = []
    for(let i = 0; i < tabRegex.length; i++) {
        tabRegexNbr.push(tabRegex[i].match(regex2))
    }

    let resultat = 0

    for(let i = 0; i < tabRegexNbr.length; i++) {
        const paire = tabRegexNbr[i][0]
        const [nombre1, nombre2] = paire.split(",").map(Number)
        const produit = nombre1 * nombre2
        resultat += produit
    }
    console.log(resultat)
})

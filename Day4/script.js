fetch("input.txt")
.then(response => response.text())
.then(data => {
    const lignes = data.split("\n")
    const lettres = []
    for(let i = 0; i < lignes.length; i++) {
        lettres.push(lignes[i].split(""))
    }

    let compteur = 0
    
    for(let i = 0; i < lignes.length-3; i++){
        for(let j = 0; j < lettres.length; j++){
            if(lignes[i][j] === "X" && lignes[i][j+1] === "M" && lignes[i][j+2] === "A" && lignes[i][j+3] === "S"){ //horizontale xmas
                compteur++
            }
            if(lignes[i][j] === "S" && lignes[i][j+1] === "A" && lignes[i][j+2] === "M" && lignes[i][j+3] === "X"){ //horizontal smax
                compteur++
            }
            if(lignes[i][j] === "X" && lignes[i+1][j] === "M" && lignes[i+2][j] === "A" && lignes[i+3][j] === "S"){ //vertical xmas
                compteur++
            }
            if(lignes[i][j] === "S" && lignes[i+1][j] === "A" && lignes[i+2][j] === "M" && lignes[i+3][j] === "X"){ //vertical smax
                compteur++
            }
            if(lignes[i][j] === "X" && lignes[i+1][j+1] === "M" && lignes[i+2][j+2] === "A" && lignes[i+3][j+3] === "S"){ //diag droite xmas
                compteur++
            }
            if(lignes[i][j] === "S" && lignes[i+1][j+1] === "A" && lignes[i+2][j+2] === "M" && lignes[i+3][j+3] === "X"){ //diag droite smax
                compteur++
            }
            if(lignes[i][j] === "X" && lignes[i+1][j-1] === "M" && lignes[i+2][j-2] === "A" && lignes[i+3][j-3] === "S"){ //diag gauche xmas
                compteur++
            }
            if(lignes[i][j] === "S" && lignes[i+1][j-1] === "A" && lignes[i+2][j-2] === "M" && lignes[i+3][j-3] === "X"){ //diag gauche smax
                compteur++
            }
        }
    }
    console.log(compteur)
})
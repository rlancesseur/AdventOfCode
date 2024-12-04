fetch("input.txt")
.then(response => response.text())
.then(data => {
    const lignes = data.split("\n")
    const lettres = lignes.map(ligne => ligne.split(""))

    let compteur = 0
    
    for (let i = 0; i < lignes.length - 3; i++) {
        for (let j = 0; j < lettres.length - 3; j++) {
          if (lettres[i][j] === 'X' && lettres[i][j+1] === 'M' && lettres[i][j+2] === 'A' && lettres[i][j+3] === 'S') {
            compteur++
          }
          if (j >= 3 && lettres[i][j] === 'X' && lettres[i][j-1] === 'M' && lettres[i][j-2] === 'A' && lettres[i][j-3] === 'S') {
            compteur++
          }
          if (lettres[i][j] === 'X' && lettres[i+1][j] === 'M' && lettres[i+2][j] === 'A' && lettres[i+3][j] === 'S') {
            compteur++
          }
          if (i >= 3 && lettres[i][j] === 'X' && lettres[i-1][j] === 'M' && lettres[i-2][j] === 'A' && lettres[i-3][j] === 'S') {
            compteur++
          }
          if (lettres[i][j] === 'X' && lettres[i+1][j+1] === 'M' && lettres[i+2][j+2] === 'A' && lettres[i+3][j+3] === 'S') {
            compteur++
          }
          if (i >= 3 && j >= 3 && lettres[i][j] === 'X' && lettres[i-1][j-1] === 'M' && lettres[i-2][j-2] === 'A' && lettres[i-3][j-3] === 'S') {
            compteur++
          }
          if (i >= 3 && lettres[i][j] === 'X' && lettres[i+1][j-1] === 'M' && lettres[i+2][j-2] === 'A' && lettres[i+3][j-3] === 'S') {
            compteur++
          }
          if (i >= 3 && j >= 3 && lettres[i][j] === 'X' && lettres[i-1][j+1] === 'M' && lettres[i-2][j+2] === 'A' && lettres[i-3][j+3] === 'S') {
            compteur++
          }
        }
      }
      console.log(compteur)
    })
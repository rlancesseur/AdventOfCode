const regex1 = /mul\(\d+,\d+\)/g
const regex2 = /\d+,\d+/

fetch("input.txt")
.then(response => response.text())
.then(data => {
    const tabRegex = data.match(regex1)
    for(let i = 0; i < tabRegex.length; i++){
        let ligneTabRegex = tabRegex[i].match(regex2)
        console.log(ligneTabRegex)
    }
    

})
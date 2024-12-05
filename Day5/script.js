const regex1 = /\d+\|\d+/g
const regex2 = /([0-9]+(,[0-9]+)+)/g

fetch("input.txt")
.then(response => response.text())
.then(data => {
    const paires = data.match(regex1).map(paire => paire.split("|"))
    const suites = data.match(regex2).map(suite => suite.split(","))
    let sommeMilieu = 0

    for (let i = 0; i < suites.length; i++) {
        for(let j = 0; j < suites[i].length ; j++) {
            if(suites[i][j] === paires[i][0]) {
                //if(paires[i][1] === suites[i][j+1]){}
            }
        }
    }

    //console.log(sommeMilieu)
    //A finir
})


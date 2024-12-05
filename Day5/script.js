const regex1 = /\d+\|\d+/g
const regex2 = /([0-9]+(,[0-9]+)+)/g

fetch("input.txt")
.then(response => response.text())
.then(data => {
    const paires = data.match(regex1)
    const suites = data.match(regex2)
    const suiteNbr = suites.map(suite => suite.split(","))

    console.log(suiteNbr[0][2])
})


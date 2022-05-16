let column = Array(columnLength).fill(''),
    l,
    i;

function randomizeStatement(){
    for (let i = 0; i < 6; i++){
        let l = Math.floor(Math.random() * (rowLength - 1) + 1)
        statement(`${l}${i}`)
    }
    navigator.clipboard.writeText(document.getElementById('korwinsStatement-text').innerText)
}

function statement(id){
    column[id.charAt(1)] = " " + document.getElementById(id).innerText.replace(/\n/g, " ")
    document.getElementById('korwinsStatement-text').innerText =
        column[0] + column[1] + column[2] + column[3] + column[4] + column[5];
    for (i = 0; i < rowLength; i++){
        console.log(i);
        l = document.getElementById(`${i}${id.charAt(1)}`)
        l.style.backgroundColor = '#242526'
        l.style.color = '#cccdce'
    }
    document.getElementById(id).style.backgroundColor = '#c8c8e0'
    document.getElementById(id).style.color = '#242526'
}
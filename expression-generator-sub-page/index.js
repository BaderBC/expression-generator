'use strict'

let columnLength,
    rowLength,
    column = Array(columnLength).fill(''),
    l,
    i;


function onLoad(){
    tableGenerator().catch(err => console.error(err))
}

function randomizeStatement(){
    for (let i = 0; i < 6; i++){
        let l = Math.floor(Math.random() * rowLength)
        statement(`${l}${i}`)
    }
    navigator.clipboard.writeText(document.getElementById('korwinsStatement-text').innerText).then()
}

function statement(id){
    column[id.charAt(1)] = " " + document.getElementById(id).innerText.replace(/\n/g, " ")
    document.getElementById('korwinsStatement-text').innerText =
        column[0] + column[1] + column[2] + column[3] + column[4] + column[5];
    for (i = 0; i < rowLength; i++){
        //console.log(i);
        l = document.getElementById(`${i}${id.charAt(1)}`)
        l.style.backgroundColor = '#242526'
        l.style.color = '#cccdce'
    }
    document.getElementById(id).style.backgroundColor = '#c8c8e0'
    document.getElementById(id).style.color = '#242526'
}


async function tableGenerator() {
    let url = 'expression-table.json',
        fetchTable = fetch(url),
        doc = document.getElementById('divTableBody');
        await fetchTable
            .then(res => res.json())
            .then((data) => {
                data.forEach((arr, index1) => {
                    doc.innerHTML += '<div class="divTableRow">'

                    arr.forEach((element, index2) => {
                        doc.innerHTML +=
                            `<div class="divTableCell" id="${index1}${index2}" onclick="statement('${index1}${index2}')">${element}</div>`
                    })
                    doc.innerHTML += '</div>'
                })
                return [data.length, data[0].length]
            }).then((data) => {
                columnLength = data[1];
                rowLength = data[0];
            }).catch((err) => {
                return err;
            })
}
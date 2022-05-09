let column = Array(6).fill('');

function randomize(){
    console.log(
        Math.floor(6 * Math.random() + 1)
    );
}

function manualStatement(id){
    column[id.charAt(1)] = " " + document.getElementById(id).innerText.replace(/\n/g, " ")
    document.getElementById('korwinsStatement-text').innerText =
        column[0] + column[1] + column[2] + column[3] + column[4] + column[5];
    for (let i of [
        `0${id.charAt(1)}`,
        `1${id.charAt(1)}`,
        `2${id.charAt(1)}`,
        `3${id.charAt(1)}`,
        `4${id.charAt(1)}`,
        `5${id.charAt(1)}`,
        `6${id.charAt(1)}`
    ]){
        document.getElementById(i).style.backgroundColor = '#242526'
        document.getElementById(i).style.color = '#cccdce'

    }
    document.getElementById(id).style.backgroundColor = '#c8c8e0'
    document.getElementById(id).style.color = '#000'

}
function tiklaSayi(param) {
    document.getElementById('cevap').innerHTML += param;
}

function sil() {
    document.getElementById('cevap').innerHTML = "";
}

function hesapla() {
    // let x = document.getElementById('cevap').innerHTML;
    // let ilk = ""
    // let ikinci = "" 
    // let islem = ""

    // let pointer = 0
    // for (let i = 0; i < x.length; i++) {
    //     if(x[i] == "/") {islem = x[i]; pointer++;}
    //     else if(x[i] == "*") {islem = x[i]; pointer++;}
    //     else if(x[i] == "+") {islem = x[i]; pointer++;}
    //     else if(x[i] == "-") {islem = x[i]; pointer++;}
    //     else{
    //         if(pointer == 0){
    //             ilk += x[i]
    //         }
    //         else{
    //             ikinci += x[i]
    //         }
    //     }
    let x = document.getElementById('cevap').innerHTML;
    let y = eval(x)
    document.getElementById('cevap').innerHTML = y;
}

    // if(islem == "/") {document.getElementById('cevap').innerHTML = ilk / ikinci}
    // else if(islem == "*") {document.getElementById('cevap').innerHTML = ilk * ikinci}
    // else if(islem == "+") {document.getElementById('cevap').innerHTML = Number(ilk) + Number(ikinci)}
    // else if(islem == "-") {document.getElementById('cevap').innerHTML = ilk - ikinci}

//1
function qalkulator(){
    let san1 = +prompt("Birinshi san engiziniz:")
    let san2 = +prompt("Ekinshi san engiziniz:")
    alert("Sandar qosindisi"+(san1 + san2))
    alert("Sandar azaitindisi"+(san1-san2))
    alert("Sandar qobeitindisi"+(san1*san2))
    alert("Sandar bolindisi"+(san1/san2))
}
qalkulator();


//2
let baga = +prompt("Zatinizdin bagasin zhaziniz:")
let kansha = +prompt("Qansha zat alginiz keledi:")

let zhenildik = baga * kansha

function zattar(){
    if(zhenildik >= 5000 && zhenildik <= 10000){
        alert("Sizdin zheldiginiz 10%")
        console.log((zhenildik / 30)*100);
    }else if(zhenildik >= 10000 && zhenildik <= 20000){
        alert("Sizge zhenildik 20%")
        console.log(zhenildik);
    }else if((zhenildik >= 20000)){
        alert("Sizge zhenildik 30%")
        console.log(zhenildik);
    }else if(zhenildik <= 0){
        alert("Ondai baga zhoooook")
    }else{
        alert("Okinishke orai sizge zhenildik zhok")
        console.log(zhenildik);
    }
}
zattar();

//3
let zhasiru = alert("Oin oinaik,1-100 ge dein san zhasirdim")
let zhasirusani = +prompt("Tauup koriniz:")

while(zhasiru == 77 == true){
    if(zhasirusani == zhasiru){
        alert("Quttiktaimin!San tabildi")
        break;
    }else if(zhasirusani > 100 || zhasirusani < 1){
        alert("Zhasirilgan san tek 1 men 100 dein")
        continue;
    }else if(zhasirusani >= 50 || zhasirusani >= 60){
        alert("Sal zhogarilau")
        continue
    }else if(zhasirusani <= 49 || zhasirusani <= 20 ){
        alert("Aliska ketip kaldiniz")
        continue
    }else{
        
    }
}


function oblicz(){
    var polak=document.getElementById('polak').value;
    var nowak=document.getElementById('nowak').value;
    var rysik=document.getElementById('rysik').value;
    var wynik=document.getElementById('wynik');
    var srednia=0;

    if(isNaN(polak)||polak==""||isNaN(nowak)||nowak==""||isNaN(rysik)||rysik==""){
        alert("podaj poprawne dane");
    }
    else{
        polak*=1;
        nowak*=1;
        rysik*=1;
        srednia=(polak+nowak+rysik)/3;
        wynik.innerHTML=srednia;
    }
}
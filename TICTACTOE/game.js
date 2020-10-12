var vez; //mostra de quem é a vez
var vezf = 0;
var ocupadotl = 0; //mostra se a div esta ocupada
var ocupadotc = 0; //mostra se a div esta ocupada
var ocupadotr = 0; //mostra se a div esta ocupada
var ocupadocl = 0; //mostra se a div esta ocupada
var ocupadocc = 0; //mostra se a div esta ocupada
var ocupadocr = 0; //mostra se a div esta ocupada
var ocupadobl = 0; //mostra se a div esta ocupada
var ocupadobc = 0; //mostra se a div esta ocupada
var ocupadobr = 0; //mostra se a div esta ocupada
var tl = 0;
var tc = 0;
var tr = 0;
var cl = 0;
var cc = 0;
var cr = 0;
var bl = 0;
var bc = 0;
var br = 0;


function marktl() {
    vezf = vez % 2;
    if (ocupadotl === 0){
        if (vezf === 0){
            document.getElementById("top-left").innerHTML = '<p id="X">X</p>';
            tl = 7;
        }
        else{
            document.getElementById("top-left").innerHTML = '<p id="O">O</p>';
            tl++;
        }
        ocupadotl += 1;
        vez++;
        vencedor();
    }
    else{
        alert("A casa já está ocupada");
    }

}

function marktc() {
    vezf = vez % 2;
    if (ocupadotc === 0){
        if (vezf === 0){
            document.getElementById("top-center").innerHTML = '<p id="X">X</p>';
            tc = 7;
        }
        else{
            document.getElementById("top-center").innerHTML = '<p id="O">O</p>';
            tc++;
        }
        ocupadotc += 1;
        vez++;
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

}

function marktr() {
    vezf = vez % 2;
    if (ocupadotr === 0){
        if (vezf === 0){
            document.getElementById("top-right").innerHTML = '<p id="X">X</p>';
            tr = 7;
        }
        else{
            document.getElementById("top-right").innerHTML = '<p id="O">O</p>';
            tr++;
        }
        ocupadotr += 1;
        vez++;
        
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }
}

function markcl() {
    vezf = vez % 2;
    if (ocupadocl === 0){
        if (vezf === 0){
            document.getElementById("center-left").innerHTML = '<p id="X">X</p>';
            cl = 7;
        }
        else{
            document.getElementById("center-left").innerHTML = '<p id="O">O</p>';
            cl++;
        }
        ocupadocl += 1;
        vez++;
        
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

}

function markcc() {
    vezf = vez % 2;
    if (ocupadocc === 0){
        if (vezf === 0){
            document.getElementById("center-center").innerHTML = '<p id="X">X</p>';
            cc = 7;
        }
        else{
            document.getElementById("center-center").innerHTML = '<p id="O">O</p>';
            cc++;
        }
        ocupadocc += 1;
        vez++;
        
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

}

function markcr() {
    vezf = vez % 2;
    if (ocupadocr === 0){
        if (vezf === 0){
            document.getElementById("center-right").innerHTML = '<p id="X">X</p>';
            cr = 7;
        }
        else{
            document.getElementById("center-right").innerHTML = '<p id="O">O</p>';
            cr++;
        }
        ocupadocr += 1;
        vez++;
        
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

}

function markbl() {
    vezf = vez % 2;
    if (ocupadobl === 0){
        if (vezf === 0){
            document.getElementById("bot-left").innerHTML = '<p id="X">X</p>';
            bl = 7;
        }
        else{
            document.getElementById("bot-left").innerHTML = '<p id="O">O</p>';
            bl++;
        }
        ocupadobl += 1;
        vez++;
        
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

}

function markbc() {
    vezf = vez % 2;
    if (ocupadobc === 0){
        if (vezf === 0){
            document.getElementById("bot-center").innerHTML = '<p id="X">X</p>';
            bc = 7;
        }
        else{
            document.getElementById("bot-center").innerHTML = '<p id="O">O</p>';
            bc++;
        }
        ocupadobc += 1;
        vez++;
        
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

}


function markbr() {
    
    vezf = vez % 2;
    if (ocupadobr === 0){
        if (vezf === 0){
            document.getElementById("bot-right").innerHTML = '<p id="X">X</p>';
            br = 7;
        }
        else{
            document.getElementById("bot-right").innerHTML = '<p id="O">O</p>';
            br++;
        }
        ocupadobr += 1;
        vez++;
       
        vencedor()
    }
    else{
        alert("A casa já está ocupada");
    }

    
}

function vencedor(){ 
    //HORIZONTAL
    if (parseInt(tl) + parseInt(tc) + parseInt(tr) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(tl) + parseInt(tc) + parseInt(tr) == 21){
        alert("vitória do X!!");
        reset();
    }
    else if (parseInt(cl) + parseInt(cc) + parseInt(cr) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(cl) + parseInt(cc) + parseInt(cr) == 21){
        alert("vitória do X!!");
        reset();
    }
    else if (parseInt(bl) + parseInt(bc) + parseInt(br) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(bl) + parseInt(bc) + parseInt(br) == 21){
        alert("vitória do X!!");
        reset();
    }
    //VERTICAL
    else if (parseInt(tl) + parseInt(cl) + parseInt(bl) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(tl) + parseInt(cl) + parseInt(bl) == 21){
        alert("vitória do X!!");
        reset();
    } 
    else if (parseInt(tc) + parseInt(cc) + parseInt(bc) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(tc) + parseInt(cc) + parseInt(bc) == 21){
        alert("vitória do X!!");
        reset();
    } 
    else if (parseInt(tr) + parseInt(cr) + parseInt(br) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(tr) + parseInt(cr) + parseInt(br) == 21){
        alert("vitória do X!!");
        reset();
    }
    //DIAGONAL
    else if (parseInt(tl) + parseInt(cc) + parseInt(br) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(tl) + parseInt(cc) + parseInt(br) == 21){
        alert("vitória do X!!");
        reset();
    } 
    else if (parseInt(tr) + parseInt(cc) + parseInt(bl) == 3){
        alert("vitória do O!!");
        reset();
    }
    else if (parseInt(tr) + parseInt(cc) + parseInt(bl) == 21){
        alert("vitória do X!!");
        reset();
    }
    else if(parseInt(ocupadotl) + parseInt(ocupadotc) + parseInt(ocupadotr) + parseInt(ocupadocl) + parseInt(ocupadocc) + parseInt(ocupadocr) + parseInt(ocupadobl) + parseInt(ocupadobc) === 8){
        alert("VELHA");
    }

}

function reset(){
    location.reload();
}

function quem(){
    vezf = vez % 2;
    if (vezf === 0){
        alert("Turn: X")
    }
    else{
        alert("Turn: O")
    }
}

function random(){
   vez = Math.floor(Math.random() * (5 - 3 + 1) + 3);
   quem();
}


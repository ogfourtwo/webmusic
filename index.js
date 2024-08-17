var x = document.getElementById("audioplayer");
var i=0;
function playpause(){
    i=i+1;
    if(i%2 === 0){
        x.pause();
    }
    else{
        x.play();
    }
}

function changesource(n){  
    switch(n){
        case 1:{x.src = "./album/01 Street Fighter.m4a";
            document.getElementById("playing").innerHTML = "now playing: Street Fighter";
            break;
        }
        case 2:{x.src = "./album/02 Strawberry Swing.m4a";
            document.getElementById("playing").innerHTML = "now playing: Strawberry Swing";
            break;
        }
        case 3:{x.src = "./album/03 Novacane.m4a";
            document.getElementById("playing").innerHTML = "now playing: Novacane";
            break;
        }
        case 4:{x.src = "./album/04 We All Try.m4a";
            document.getElementById("playing").innerHTML = "now playing: We All Try";
            break;
        }
        case 5:{x.src = "./album/10 Swim Good.m4a";
            document.getElementById("playing").innerHTML = "now playing: Swim Good";
            break;
        }
        case 6:{x.src = "./album/13 Soul Calibur.m4a";
            document.getElementById("playing").innerHTML = "now playing: Soul Calibur";
            break;
        }
        default:
    }      
}

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
            x.play();
            break;
        }
        case 2:{x.src = "./album/02 Strawberry Swing.m4a";
            document.getElementById("playing").innerHTML = "now playing: Strawberry Swing";
            x.play();
            break;
        }
        case 3:{x.src = "./album/03 Novacane.m4a";
            document.getElementById("playing").innerHTML = "now playing: Novacane";
            x.play();
            break;
        }
        case 4:{x.src = "./album/04 We All Try.m4a";
            document.getElementById("playing").innerHTML = "now playing: We All Try";
            x.play();
            break;
        }
        case 5:{x.src = "./album/05 Bitches Talkin'.m4a";
            document.getElementById("playing").innerHTML = "now playing: Bitches Talkin'";
            x.play();
            break;
        }
        case 6:{x.src = "./album/06 Songs For Women.m4a";
            document.getElementById("playing").innerHTML = "now playing: Songs For Women";
            x.play();
            break;
        }
        case 7:{x.src = "./album/07 Lovecrimes.m4a";
            document.getElementById("playing").innerHTML = "now playing: Lovecrimes";
            x.play();
            break;
        }
        case 8:{x.src = "./album/08 Goldeneye.m4a";
            document.getElementById("playing").innerHTML = "now playing: Goldeneye";
            x.play();
            break;
        }
        case 9:{x.src = "./album/09 There Will Be Tears.m4a";
            document.getElementById("playing").innerHTML = "now playing: There Will Be Tears";
            x.play();
            break;
        }
        case 10:{x.src = "./album/10 Swim Good.m4a";
            document.getElementById("playing").innerHTML = "now playing: Swim Good";
            x.play();
            break;
        }
        case 11:{x.src = "./album/11 Dust.m4a";
            document.getElementById("playing").innerHTML = "now playing: Dust";
            x.play();
            break;
        }
        case 12:{x.src = "./album/12 American Wedding.m4a";
            document.getElementById("playing").innerHTML = "now playing: American Wedding";
            x.play();
            break;
        }
        case 13:{x.src = "./album/13 Soul Calibur.m4a";
            document.getElementById("playing").innerHTML = "now playing: Soul Calibur";
            x.play();
            break;
        }
        case 14:{x.src = "./album/14 Nature Feels.m4a";
            document.getElementById("playing").innerHTML = "now playing: Nature Feels";
            x.play();
            break;
        }
     default: break;
    }
}

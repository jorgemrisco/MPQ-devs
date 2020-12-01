
function addClass(el, klass) {
    el.classList.add(klass);
}
 
function removeClass(el, klass) {
    el.classList.remove(klass);
}

loadVideos();
 
async function loadVideos(){ /* comunicação com a API utilizando método await para o fetch*/
    try{
        subVideosLoop();
    } catch(error) {
        console.log("error", error);
    }
             
}
 
function subVideosLoop(){ //loop principal
 
    var subVideos = document.getElementsByClassName("item");
    var playerVid = document.getElementsByClassName("details");
 
 
    //Função que define a resposta ao click agora está 100%
    var clickReply = function(e) {
 
        console.log(this);
        /*definição da função que faz o accordion(collapsable)*/
        console.log(this.childNodes[3]);
        if (this.childNodes[3].classList.value.includes('active')) { 
            removeClass(this.childNodes[3], "active");
            addClass(this.childNodes[3], "hidden");
 
        } else {
            removeClass(this.childNodes[3], "hidden");
            addClass(this.childNodes[3], "active");
        };
        for (var i = 0; i < subVideos.length; i++) { // garante q só a clicada por ultimo vai estar visivel
            if(subVideos[i] != this){
                removeClass(subVideos[i].childNodes[3], "active");
                addClass(subVideos[i].childNodes[3], "hidden");
            }
        }; 
    };
 
    for (var i = 0; i < subVideos.length; i++) { // loop que adiciona o evento de click
        subVideos[i].addEventListener('click', clickReply);
    }
            
}
/*    }
}); */
        
 
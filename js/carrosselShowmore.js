var texts = document.getElementsByClassName("showMore");


//Função que define a resposta ao click
var clickReply = function (e) {

    //console.log(this);
    var linkText = this.innerText.toUpperCase();
    if (linkText === "MOSTRAR MAIS") {
    	this.innerText = "Mostrar menos";
        this.previousElementSibling.classList.remove("hideContent");
        this.previousElementSibling.classList.add("showContent");

    }
    else {
    	this.innerText = "Mostrar mais";
        this.previousElementSibling.classList.remove("showContent");
        this.previousElementSibling.classList.add("hideContent");
    }
    /*definição da função que faz o collapsable*/
   /*  console.log(this.childNodes[2]);//childNodes[2] é o <p> que tem o texto do pessoal.
    if (this.childNodes[2].classList.value.includes("showContent")) {
        this.childNodes[2].classList.remove("showContent");
        this.childNodes[2].classList.add("hideContent");  

    } else {
        this.childNodes[2].classList.remove("hideContent");
        this.childNodes[2].classList.add("showContent");  
    }; */
/*     for (var i = 0; i < subVideos.length; i++) { // garante q só a clicada por ultimo vai estar visivel
        if (subVideos[i] != this) {
            removeClass(subVideos[i].childNodes[2], "active");
            addClass(subVideos[i].childNodes[2], "hidden");
        }
    }; */
};

for (var i = 0; i < texts.length; i++) { // loop que adiciona o evento de click
    texts[i].addEventListener('click', clickReply);
}

/* var elements = document.getElementsByClassName("show-more");

var click_event = function() {
		var linkText = this.innerHTML.toUpperCase();
    if (linkText === "SHOW MORE") {
    		this.innerHTML = "Show less";
        this.previousElementSibling.classList.remove("hideContent");
        this.previousElementSibling.classList.add("showContent");

    }
    else {
    		this.innerHTML = "Show more";
        this.previousElementSibling.classList.remove("showContent");
        this.previousElementSibling.classList.add("hideContent");
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', click_event, false);
} */
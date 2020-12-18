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

};

for (var i = 0; i < texts.length; i++) { // loop que adiciona o evento de click
    texts[i].addEventListener('click', clickReply);
}
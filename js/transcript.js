
document.getElementById("transcricao").style.display = "none"

function toggleTranscript() {

    if (document.getElementById("transcricao").style.display === "none"){
        document.getElementById("transcricao").style.display = "block";
        document.getElementById("btnTrcpt").innerText = "Minimizar a transcrição";
    } else {
        document.getElementById("transcricao").style.display = "none";
        document.getElementById("btnTrcpt").innerText = "Ler a transcrição";
    }; 
}

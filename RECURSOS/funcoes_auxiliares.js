function trocarConfiguracoes() {
    if(configuracoes){
        fecharConfiguracoes()
    } else {
        fecharRelatorio()
        console.log('Abrir configurações');
        document.getElementById('configuracoes').classList.remove('esconder')
        configuracoes = true
    }
}

function fecharConfiguracoes(){
    configuracoes = false
    console.log('Fechar configurações');
    document.getElementById('configuracoes').classList.add('esconder')
}

function trocarRelatorio() {
    if(relatorio){
        fecharRelatorio()
    } else {
        fecharConfiguracoes()
        document.getElementById('relatorios').classList.remove('esconder')
        relatorio = true
    }
}

function fecharRelatorio() {
    relatorio = false
    console.log('Fechar relatorios');
    document.getElementById('relatorios').classList.add('esconder')
}

function trocarMudo() {
    if(mudo) {
        mudo = false
        document.getElementById('btnMudo').innerHTML = '<i class="fas fa-volume-up"></i>'
    } else {
        mudo = true
        document.getElementById('btnMudo').innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
}

function definirTelaCheia() {
    let fs = fullscreen();
    fullscreen(!fs);
    background(color('#2c3e50'));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function sortearSilaba(ultimaSilaba){
    var silabaResultado = ""
    var consoantes = "bcdfgjlmnprstv"
    var vogais = "aeiou"
    var vogalPrimeiro = Math.random() >= 0.5

    do{
        if(vogalPrimeiro) {
            silabaResultado += consoantes[Math.floor(Math.random() * consoantes.length)]
            silabaResultado += vogais[Math.floor(Math.random() * vogais.length)]
        } else {
            silabaResultado += vogais[Math.floor(Math.random() * vogais.length)]
            silabaResultado += consoantes[Math.floor(Math.random() * consoantes.length)]
        }
    } while (silabaResultado == ultimaSilaba)

    return silabaResultado
}
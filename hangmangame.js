let words =[];
function loadWords(callback) {
    fetch('words.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            let lines = text.split('\n');
            let cleanWords = [];
            for (let i = 0; i < lines.length; i++) {
                let word = lines[i].trim().toUpperCase();
                if (word.length > 0) {
                    cleanWords.push(word);
                }
            }
            words = cleanWords;
            callback();
        });
}

/*guillotine html parts*/

const base = document.getElementById('base');
const platform = document.getElementById('platform');
const post = document.getElementById('post');
const bar = document.getElementById('bar');
const hole = document.getElementById('hole');
const blade = document.getElementById('blade');
const man = document.getElementById('man');

/*delay funktion */
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const guesses = document.getElementById('letters');
const revealedletters = document.getElementById('reveal');

/*LJUD*/
let bass = new Audio('sfx/bass.ogg');
let sword = new Audio('sfx/sword.ogg');
let victory = new Audio('sfx/victory.ogg');
let correct = new Audio('sfx/correct.ogg');

class Game{
    constructor(word="", stage=0){
        this.word = word;   /*ordet som valts*/
        this.stage = stage;     /*Hur många felgissningar man gjort*/
        this.letters = word.split('');  //en array med alla bokstäver
        this.revealed = []; //ord som har gissats rätt
    }
    
    //väljer ett nytt ord
    chooseword(){
        let random = Math.floor(Math.random() * words.length);
        this.word = words[random].toUpperCase();
        this.letters = this.word.split('');
    }

    //startar om spelet
    reset(){
        guesses.innerHTML = '';
        revealedletters.innerHTML = 'GUESS THE WORD!'
        this.stage = 0;
        this.chooseword();
        this.revealed = [];

        /*Sätter alla delar osynliga*/
        base.style.opacity = 0;
        platform.style.opacity = 0;
        post.style.opacity = 0;
        bar.style.opacity = 0;
        hole.style.opacity = 0;
        blade.style.opacity = 0;
        man.style.opacity = 0;
        bass.play();
        //resettar animationer
        blade.classList="";
        man.classList="";
        
    }

    nextstage(){
        //sätter de olika delarna synliga beroende på hur många fel man gissat
        if(this.stage==1){base.style.opacity = 1;}
        if(this.stage==2){platform.style.opacity = 1;}
        if(this.stage==3){post.style.opacity = 1;}
        if(this.stage==4){bar.style.opacity = 1;}
        if(this.stage==5){hole.style.opacity = 1;}
        if(this.stage==6){blade.style.opacity = 1;}
        if(this.stage==7){man.style.opacity = 1;}
        if(this.stage==8){
            guesses.innerHTML = 'YOU DIED!';
            blade.classList="decapitate";
            delay(500).then(() => man.classList="roll");
            delay(400).then(() => sword.play());
        }
        
    }
    //skapar sträng för de bokstäver som gissats rätt, andra bokstäver skrivs med "_"
    updateReveal(){
        let reveal = "";
        for(let i=0;i<this.letters.length;i++){
            if(this.revealed.includes(this.letters[i])){
                reveal+=this.letters[i];
            } else{
                reveal+='_';
            }
            reveal+=' ';
        }
        revealedletters.innerHTML = reveal;
    }

    //detta händer varje gång man gör en gissning
    guess(letter){
        if(guesses.innerHTML=='YOU DIED!'){
            //man ska inte kunna gissa mer om man har förlorat 
        } else if(guesses.innerHTML=='CONGRATULATIONS!'){
            //eller vunnit
        } else{
            if(this.letters.includes(letter)){
                if(this.revealed.includes(letter)){} else{this.revealed.push(letter);}
                correct.play();
                this.updateReveal();
                this.checkIfComplete();
            } else{
                this.stage+=1;
                guesses.innerHTML+=letter;
                this.nextstage();
            } 
            this.updateReveal();
        }
    }

    checkIfComplete(){
        if(revealedletters.innerHTML.includes('_')){

        } else{
            //om det inte finns några "_" i strängen så har alla bokstäver gissats, och man vinner
            guesses.innerHTML="CONGRATULATIONS!";
            victory.play();
        }
    }
}

const game = new Game();

loadWords(function() {
    game.chooseword(); //väntar på att alla ord är hämtade, sedan kör choosewords
});
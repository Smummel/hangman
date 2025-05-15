
const reveal = "";

const letters = ['B', 'A', 'N', 'A', 'N', 'A'];

function guess(letter){
    if(letters.includes(letter)){
        for(i=0;i<letters.length();i++){
            if(letter=letters[i]){
                revealedletters+=letter;
            }
        }
    }
}

guess('A');
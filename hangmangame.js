
const words =["apple", "banana", "cherry", "grape", "orange", "peach", "lemon", "mango", "kiwi", "plum",
  "apricot", "blueberry", "coconut", "fig", "guava", "lime", "melon", "nectarine", "papaya", "pear",
  "pineapple", "raspberry", "strawberry", "tangerine", "watermelon", "avocado", "blackberry", "cranberry", "date", "elderberry",
  "gooseberry", "jackfruit", "kumquat", "lychee", "mandarin", "olive", "passionfruit", "persimmon", "pomegranate", "quince",
  "tomato", "zucchini", "carrot", "broccoli", "cabbage", "cauliflower", "celery", "corn", "cucumber", "eggplant",
  "garlic", "kale", "lettuce", "mushroom", "onion", "pea", "pepper", "potato", "pumpkin", "radish",
  "spinach", "squash", "turnip", "yam", "artichoke", "arugula", "beet", "chard", "chicory", "collard",
  "daikon", "edamame", "endive", "fennel", "horseradish", "jicama", "leek", "okra", "parsnip", "rhubarb",
  "shallot", "watercress", "wasabi", "asparagus", "bean", "bamboo", "brussels", "cassava", "chili", "escarole",
  "ginger", "lentil", "mustard", "pea", "soybean", "sweetcorn", "taro", "yam", "zest", "basil",
  "cinnamon", "clove", "coriander", "cumin", "dill", "mint", "nutmeg", "oregano", "paprika", "parsley",
  "rosemary", "saffron", "sage", "salt", "tarragon", "thyme", "turmeric", "vanilla", "wasabi", "bay",
  "chervil", "fenugreek", "galangal", "lavender", "lemongrass", "mace", "marjoram", "savory", "star", "anise",
  "caraway", "caper", "cardamom", "aniseed", "ginseng", "hibiscus", "juniper", "licorice", "mallow", "peppermint",
  "sarsaparilla", "spearmint", "stevia", "tamari", "vervain", "wildrice", "wheat", "rye", "barley", "oats",
  "millet", "quinoa", "sorghum", "spelt", "teff", "triticale", "amaranth", "buckwheat", "durum", "farro",
  "freekeh", "kamut", "emmer", "einkorn", "maize", "semolina", "bran", "germ", "groats", "grits",
  "muesli", "pasta", "noodle", "spaghetti", "fettuccine", "macaroni", "penne", "rigatoni", "tagliatelle", "vermicelli",
  "ravioli", "lasagna", "tortellini", "gnocchi", "dumpling", "pierogi", "wonton", "soba", "udon", "ramen",
  "pho", "biryani", "curry", "dal", "naan", "roti", "samosa", "tikka", "masala", "paneer",
  "pakora", "vindaloo", "korma", "bento", "sushi", "tempura", "tofu"];


/*guillotine html parts*/

const base = document.getElementById('base');
const platform = document.getElementById('platform');
const post = document.getElementById('post');
const bar = document.getElementById('bar');
const hole = document.getElementById('hole');
const blade = document.getElementById('blade');
const man = document.getElementById('man');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const guesses = document.getElementById('letters');
let revealedletters = document.getElementById('reveal');

class Game{
    constructor(word="", stage=0){
        this.word = word;
        this.stage = stage;
        this.letters = word.split('');
        this.revealed = [];
    }

    chooseword(){
        let random = Math.floor(Math.random() * words.length);
        this.word = words[random].toUpperCase();
        this.letters = this.word.split('');
    }

    reset(){
        guesses.innerHTML = '';
        this.stage = 0;

        base.style.opacity = 0;
        platform.style.opacity = 0;
        post.style.opacity = 0;
        bar.style.opacity = 0;
        hole.style.opacity = 0;
        blade.style.opacity = 0;
        man.style.opacity = 0;

    }

    nextstage(){
        if(this.stage==1){base.style.opacity = 1;}
        if(this.stage==2){platform.style.opacity = 1;}
        if(this.stage==3){post.style.opacity = 1;}
        if(this.stage==4){bar.style.opacity = 1;}
        if(this.stage==5){hole.style.opacity = 1;}
        if(this.stage==6){blade.style.opacity = 1;}
        if(this.stage==7){man.style.opacity = 1;}
        if(this.stage==8){
            blade.classList="decapitate";
            delay(500).then(() => man.classList="roll");
            delay(2000).then(() => alert('Du dog X_X'));
            delay(3000).then(() => this.reset());
            delay(3000).then(() => blade.classList="");
            delay(3000).then(() => man.classList="");
        }
        
    }

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

    guess(letter){
        if(this.letters.includes(letter)){
            if(this.revealed.includes(letter)){} else{this.revealed.push(letter);}
            console.log(this.revealed);
            this.updateReveal()
        } else{
            this.stage+=1;
            this.nextstage();
            guesses.innerHTML+=letter;
        } 
    }
    
}



const game = new Game();

game.chooseword();

console.log(game.word);

console.log(game);
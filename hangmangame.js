
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
  "pakora", "vindaloo", "korma", "bento", "sushi", "tempura", "teriyaki", "yakitori", "miso", "tofu"];

const guesses = document.getElementById('letters');
let stage = 0;

function guess(letter){
    console.log('clicked');
    guesses.innerHTML+=letter;
    stage+=1;
    if(stage==8){
    alert('wtf');
}
}

function reset(){
    guesses.innerHTML = '';
    stage = 0;
}


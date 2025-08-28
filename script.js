const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector("#searchBtn");

const allItems = [
    // Stories
    { title: "The Selfish Giant", url: "giant.html" },
    { title: "The Boy Who Cried Wolf", url: "boy cry.html" },
    { title: "Goldilocks and the Three Bears", url: "goldeliks.html" },
    { title: "The Frog Prince", url: "frogprince.html" },
    { title: "The Bremen Town Musicians", url: "bremenmusicians.html" },
    { title: "The Elves and the Shoemaker", url: "elvestshoemaker.html" },
    { title: "The Prince and the Pauper", url: "princeandpauper.html" },
    { title: "Aladdin and the Magic Lamp", url: "aladdin.html" },
    { title: "Beauty and the Beast", url: "beautybeast.html" },
    { title: "Puss in Boots", url: "pussinboots.html" },
    { title: "King Midas and the Golden Touch", url: "kingmidas.html" },
    { title: "The Tortoise and the Hare", url: "tortoisehare.html" },
    { title: "The Twelve Dancing Princesses", url: "twelveprincesses.html" },
    { title: "The Fisherman and the Goldfish", url: "goldfish.html" },
    { title: "The Wizard of Oz", url: "wizardoz.html" },
    { title: "The Little Mermaid", url: "littlemermaid.html" },
    { title: "Robin Hood", url: "robinhood.html" },
    { title: "Black Beauty", url: "blackbeauty.html" },
    { title: "Treasure Island", url: "treasureisland.html" },
    { title: "Peter Pan", url: "peterpan.html" },
    { title: "Alice in Wonderland", url: "aliceinwonderland.html" },
    { title: "The Hare and the Tortoise", url: "hareandtortoise.html" },
    { title: "The Fox and the Grapes", url: "foxandgrapes.html" },
    { title: "The Lion and the Mouse", url: "lionandmouse.html" },
    { title: "The Thirsty Crow", url: "thirstycrow.html" },
    { title: "The Goose That Laid the Golden Egg", url: "goosegoldenegg.html" },
    { title: "The Ant and the Grasshopper", url: "antandgrasshopper.html" },
    { title: "The Town Mouse and the Country Mouse", url: "townmousecountrymouse.html" },
    { title: "The Three Little Pigs", url: "threelittlepigs.html" },
    { title: "Little Red Riding Hood", url: "littleredridinghood.html" },
    { title: "Jack and the Beanstalk", url: "jackandthebeanstalk.html" },
    { title: "Cinderella", url: "cinderella.html" },
    { title: "Snow White and the Seven Dwarfs", url: "snowwhite.html" },
    { title: "Rapunzel", url: "rapunzel.html" },
    { title: "Hansel and Gretel", url: "hanselandgretel.html" },
    { title: "The Pied Piper of Hamelin", url: "piedpiper.html" },
    { title: "The Emperor’s New Clothes", url: "emperorsnewclothes.html" },
    { title: "The Ugly Duckling", url: "uglyduckling.html" },
    { title: "Sleeping Beauty", url: "sleepingbeauty.html" },
    { title: "The Gingerbread Man", url: "gingerbreadman.html" },
    { title: "The Princess and the Pea", url: "princessandthepea.html" },
    { title: "The Tortoise and the Geese", url: "tortoiseandgeese.html" },
    { title: "The Bundle of Sticks", url: "bundleofsticks.html" },
    { title: "The Clever Crow", url: "clevercrow.html" },
    { title: "The Greedy Dog", url: "greedydog.html" },
    { title: "The Donkey and the Lapdog", url: "donkeyandlapdog.html" },
    { title: "The Wise Old Owl", url: "wiseoldowl.html" },
    { title: "The Honest Woodcutter", url: "honestwoodcutter.html" },
    { title: "The Farmer and His Sons", url: "farmerandhissons.html" },
    { title: "The Monkey and the Crocodile", url: "monkeyandcrocodile.html" },
    { title: "The Cap Seller and the Monkeys", url: "capsellerandmonkeys.html" },
    { title: "The Magic Pot", url: "magicpot.html" },
    { title: "The Wise Parrot", url: "wiseparrot.html" },
    { title: "The Clever Rabbit and the Lion", url: "cleverrabbitandlion.html" },
    { title: "The Blue Jackal", url: "bluejackal.html" },
    { title: "The Foolish Lion and the Clever Rabbit", url: "foolishlionandcleverrabbit.html" },
    { title: "The Two Goats", url: "twogoats.html" },
    { title: "The Miser and His Gold", url: "miserandhisgold.html" },
    { title: "The Talking Cave", url: "talkingcave.html" },
    { title: "The Boastful Turtle", url: "boastfulturtle.html" },
    { title: "The Brave Little Tailor", url: "bravelittletailor.html" },
    { title: "The Clever Thief", url: "cleverthief.html" },
    { title: "The Golden Touch (King Midas)", url: "goldentouch.html" },
    { title: "The Man, the Boy, and the Donkey", url: "manboyanddonkey.html" },
    { title: "The Peacock and the Crane", url: "peacockandcrane.html" },
    { title: "The Clever Cat", url: "clevercat.html" },
    { title: "Aladdin and the Magic Lamp", url: "aladdinandmagiclamp.html" },
    { title: "Ali Baba and the Forty Thieves", url: "alibabaandfortythieves.html" },

    // Novels
    { title: "1984", url: "1984.html" },
    { title: "The Alchemist", url: "alchemist.html" },
    { title: "Pride and Prejudice", url: "pride.html" },
    { title: "Dune", url: "dune.html" },
    { title: "The Hobbit", url: "hobbit.html" },
    { title: "The Great Gatsby", url: "gatsby.html" },
    { title: "To Kill a Mockingbird", url: "to kill a mockingbird.html" },
    { title: "Harry Potter and the Sorcerer’s Stone", url: "harry porter.html" },
    { title: "The Girl with the Dragon Tattoo", url: "dragon tatoo.html" },
    { title: "The Lion, the Witch, and the Wardrobe", url: "lion.html" },
    { title: "Moby-Dick", url: "mobydick.html" },
    { title: "Crime and Punishment", url: "crime.html" },
    { title: "Jane Eyre", url: "janeeyre.html" },
    { title: "War and Peace", url: "warpeace.html" },
    { title: "The Catcher in the Rye", url: "catcher.html" },
    { title: "Brave New World", url: "bravenew.html" },
    { title: "Wuthering Heights", url: "wuthering.html" },
    { title: "The Picture of Dorian Gray", url: "dorian.html" },
    { title: "Frankenstein", url: "frankenstein.html" },
    { title: "The Brothers Karamazov", url: "karamazov.html" },
    { title: "Les Misérables", url: "lesmis.html" },
    { title: "Anna Karenina", url: "anna.html" },
    { title: "The Lord of the Rings", url: "lotr.html" },
    { title: "The Kite Runner", url: "kiterunner.html" },
    { title: "The Book Thief", url: "bookthief.html" },
    { title: "One Hundred Years of Solitude", url: "solitude.html" },
    { title: "The Road", url: "road.html" },
    { title: "The Handmaid's Tale", url: "handmaid.html" },
    { title: "The Shining", url: "shining.html" },
    { title: "The Secret Garden", url: "secretgarden.html" },
    { title: "The Little Prince", url: "littleprince.html" },
    { title: "The Odyssey", url: "odyssey.html" },
    { title: "The Sun Also Rises", url: "sunrises.html" },
    { title: "The Count of Monte Cristo", url: "montecristo.html" },
    { title: "The Hitchhiker's Guide to the Galaxy", url: "hitchhiker.html" },
    { title: "The Color Purple", url: "colorpurple.html" },

    // Magazines
    { title: "Esquire", url: "Esquire.HTML" },
    { title: "GQ", url: "GQ.HTM" },
    { title: "National Geographic", url: "NationalGeographic.HTML" },
    { title: "Popular Science", url: "PopularScience.HTML" },
    { title: "The Atlantic", url: "TheAtlantic.HTML" },
    { title: "The Economist", url: "TheEconomist.HTML" },
    { title: "Time", url: "TIME.HTML" },
    { title: "Fortune", url: "Fortune.HTML" },
    { title: "Vogue", url: "Vogue.HTML" },
    { title: "WIRED", url: "WIRED.HTML" },
    { title: "Scientific American", url: "ScientificAmerican.HTML" }
];

function searchItem() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    const found = allItems.find(item => item.title.toLowerCase().includes(query));
    if (found) {
        window.location.href = found.url;
    } else {
        alert("No item found for: " + query);
    }
}

if (searchInput) {
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchItem();
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener("click", function(e) {
        e.preventDefault();
        searchItem();
    });
}

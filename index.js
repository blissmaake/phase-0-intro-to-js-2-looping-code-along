// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names, event) {
    const cards = [];

    for (let i = 0; i < names.length; i++) {

        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    console.log(cards)

    return cards;
}
writeCards (names)


function countDown (number) {
    while (number >= 0) {
        console.log (number);
        number -= 1;
    }
}
countDown(10)
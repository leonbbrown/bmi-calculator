
let quote = ['“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein', '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi', '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain', '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt'];
quote[4] = '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren';
quote[5] = '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill';
quote[6] = '“I never dreamed about success. I worked for it.” —Estée Lauder';
quote[7] = '“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella';
quote[8] = '“Im always trying to prove to my 17-year-old self that I can do creative things I thought werent possible.”- Virgil Abloh';
quote[9] = '“The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could.” — Unknown';
quote[10] = '“He who conquers himself is the mightiest warrior.” — Confucius ';
quote[11] = '“Try not to become a man of success, but rather become a man of value.” – Albert Einstein';


// Add quotes up here

let x = Math.floor(Math.random() * 11 ) + 1;
// change 11 to however many quotes

console.log('Your quote of the day is:')
console.log();
console.log(quote[x]);


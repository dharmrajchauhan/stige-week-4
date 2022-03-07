var quote = [
    "“The purpose of our lives is to be happy.” — Dalai Lama",
    "“Life is what happens when you’re busy making other plans.” — John Lennon",
    "“Get busy living or get busy dying.” — Stephen King",
    "“You only live once, but if you do it right, once is enough.” — Mae West",
    "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
    "“Not how long, but how well you have lived is the main thing.” — Seneca",
    "“If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt",
    "“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”– Henry Ford",
    "“In order to write about life first you must live it.”– Ernest Hemingway",
    "“The big lesson in life, baby, is never be scared of anyone or anything.”– Frank Sinatra"
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quote.length));
    document.getElementById("quoteDisplay").innerHTML=quote[randomNumber];
}
const QUOTEBANK = [
    {
    quote: "The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.",
    author: "Barack Obama"
    },
    {
    quote: "What would life be if we had no courage to attempt anything?",
    author: "Vincent Van Gogh"
    },
    {
    quote: "Make voyages. Attempt them. There's nothing else.",
    author: "Tenesse Williams"
    },
    {
    quote: "To live a creative life, we must lose our fear of being wrong.",
    author: "Joseph Chilton Pearce"
    },
    {
    quote: "Whatever the mind of man can conceive and believe, it can achieve",
    author: "W. Clement Stone"
    },
    {
    quote: "It is better to be making the news than taking it; to be an actor rather than a critic.",
    author: "Winston S. Churchill"
    },
    {
    quote: "A man who has a vision is not able to use the power of it until after he has performed the vision on earth for the people to see.",
    author: "Black Elk"
    },
    {
    quote: "There is no perfect place, job or life; we only have the present time. Love what you do, or do something else",
    author: "Rodolfo Peon"
    },
    {
    quote: "No plan and no action will lead to no results.",
    author: "Germany Kent"
    },
    {
    quote: "Stop looking at what you don’t have and start using what you do have. Stop living in a fantasy world and create the life you want to live by taking action.",
    author: "Sope Agbelusi"
    },
    ]
    
    window.onload = init;
    function init(){
    generateQuote()
    }
    
    function generateQuote(){
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];
    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
    
    //add the quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat
    //add the author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + quoteInApiFormat
    
    document.getElementById("tweet-quote").href = twitterLink;   
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
    }
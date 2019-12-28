

(function(){

    const quotes=[
        {
            quote:
              "There is only one corner of the universe you can be certain of improving, and that's your own self.",
            author: " Aldous Huxley"
          },
          {
            quote:
              "A good traveler has no fixed plans and is not intent on arriving.",
            author: "Lao Tzu"
          },
          {
            quote:
              "We know what we are, but not what we may be",
            author: "William Shakespeare"
          },
  
          {
            quote:
              "What we achieve inwardly will change outer reality.",
            author: "Plutarch"
          },
  
          {
            quote:
              "God save me from my friends. I can protect myself from my enemies.",
            author: "Claude Louis Hector de Villars "
          },
          {
            quote: "The most effective way to do it, is to do it.",
            author: "Amelia Earhart"
          },
          {
            quote:
              "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
            author: "Charles Lindbergh"
          },
          {
            quote:
              "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
            author: " Tyne Daly"
          },
          {
            quote:
              "The best way out is always through.",
            author: "Robert Frost"
          },
  
          {
            quote:
              "A flaw in the human character is that everybody wants to build and nobody wants to do maintenance",
            author: "Kurt Vonnegut"
          },
  
          {
            quote:
              "You can't wait for inspiration. You have to go after it with a club",
            author: "Jack London"
          }

    ];

    const btn=document.querySelector("#gen-btn");

    btn.addEventListener("click",ranQuote);

    function ranQuote(){

        const random=Math.floor(Math.random()*quotes.length);

        document.querySelector('#quote').textContent=quotes[random].quote;
        document.querySelector(".author").textContent=quotes[random].author;
        
    }

})();
fetch('https://animechan.vercel.app/api/quotes')
        .then(response => response.json())
        .then(quotes => quotes.forEach(quote => {
            renderQuotes(quote)
        }))

let renderQuotes = (quote) => {
    let likeBtn = document.createElement('button')
    let likes = document.createElement('div')
    let list = document.getElementById('quote-list')
    let li = document.createElement('li')
    let characterQuote = document.createElement('p')
    let character = document.createElement('p')
    let likeCount = 0;

    
    li.classList.add("list-group-item")
    characterQuote.innerText = quote.quote;
    character.innerText = `- ${quote.character}`;
    likes.innerText  = '0';
    likeBtn.innerText = `♥️ ${likeCount}`;

    likeBtn.addEventListener('click', () => {
        let newLikes = parseInt(likeCount += 1)
        likeBtn.innerText = `♥️ ${newLikes}`;
    })


    list.append(li)
    li.append(characterQuote)
    li.append(character)
    li.append(likeBtn)
}

let form = document.getElementById('search-anime')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let list = document.getElementById('quote-list')
    list.innerHTML = ''
    fetch(`https://animechan.vercel.app/api/quotes/anime?title=${e.target['anime-title'].value}`)
    .then(res => res.json())    
    .then(quotes => quotes.forEach(quote => {
        renderQuotes(quote)
    }))
    .catch(error => {
        alert('There was a typo in your search! Try again!')
        throw(error)
    })
    
    let quoteColors = document.getElementsByClassName('.list-group-item')
    
    quoteColors.addEventListener('mouseover', function(e){
        e.target.quoteColors.class = "bg-warning"
        
    })
    
})

// fetch('https://animechan.vercel.app/api/available/anime')
//       .then(response => response.json())
//       .then(anime => console.log(anime))

// fetch('https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=4658')
// .then(res => res.json())
// .then(anime => console.log(anime))
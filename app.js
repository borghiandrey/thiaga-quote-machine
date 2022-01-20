const quotes = [
  {
    'quote': 'Fuin vá',
    'author': 'THIAGA',
    url: 'https://twitter.com/intent/tweet?text=Fuin+v%C3%A1'
  },
  {
    'quote': 'aham, ah. HA!!! aibô',
    'author': 'pelela',
    url: 'https://twitter.com/intent/tweet?text=aham%2C+ah.+HA%21%21%21+aib%C3%B4'
  },
  {
    'quote': 'ê pá dá',
    'author': 'Thiaguela',
    url: 'https://twitter.com/intent/tweet?text=%C3%AA+p%C3%A1+d%C3%A1'
  },
  {
    'quote': 'EÇI',
    'author': 'Scaldaferro',
    url: 'https://twitter.com/intent/tweet?text=E%C3%87I'
  },
  {
    'quote': 'Bate na é é tan',
    'author': 'Thiego',
    url: 'https://twitter.com/intent/tweet?text=Bate+na+%C3%A9+%C3%A9+tan'    
  },
  {
    'quote': 'Aham, é, ah',
    'author': 'Thiaguera PCP',
    url: 'https://twitter.com/intent/tweet?text=Aham%2C+%C3%A9%2C+ah'
  },
]

let doc = $(document)

doc.ready(() => {
  let quote = $('#text')
  let author = $('#author')
  
  const btn = $('.btn-quote')
  const tweetBtn = $('.btn-tweet')

  let num0 = Math.floor(Math.random() * quotes.length)

  quote.text(`${quotes[num0].quote}`)
  author.text(`- by ${quotes[num0].author}`)
  tweetBtn.attr('href', quotes[num0].url)
  
  btn.click(() => {
    let num = Math.floor(Math.random() * quotes.length)
  
    quote.text(`${quotes[num].quote}`)
    author.text(`-by ${quotes[num].author}`)
    tweetBtn.attr('href', quotes[num].url)
  })
})
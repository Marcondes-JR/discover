function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag #profile do html e o elemento img
  //armazenar na variável img ↓
  const img = document.querySelector("#profile img")

  // substituir a imagem verificando se contem a classe "light" na lista de classes do HTML
  if (html.classList.contains('light')) {
    // se tiver light mode, add a imagem light e a descrição alt
    img.setAttribute('src', "./assets/avatar-light.jpg")
    img.setAttribute('alt', "avatar de óculos de paint")
  } else {
    //se tiver sem light mode, manter a imagem normal e a descrição alt
    img.setAttribute('src', "./assets/avatar-dark.jpg")
    img.setAttribute('alt', "avatar normalzim")
  }

  // function toggleMode() - função nativa que faz isso ↓

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')
  // }

}
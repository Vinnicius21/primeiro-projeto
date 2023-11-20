function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")
  // substituir a img
  if(html.classList.contains('light'))
  // se tiver lightmode, adicionar a img

  img.setAttribute("src", "https://github.com/Vinnicius21.png")
  // se tiver sem lightmode, manter a img normal
  img.setAttribute('src', URL())

}

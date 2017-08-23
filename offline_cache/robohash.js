class RoboHash {
  constructor(num) {
    this.urls = []
    for (let i = 1; i <= num; i += 1) this.urls.push(`https://robohash.org/${i}.png?size=100x100`)
  }

  generateImages(element) {
    this.urls.forEach((url) => {
      const image = document.createElement('img')
      image.setAttribute('src', url)

      element.appendChild(image)
    })
  }
}

export default new RoboHash(100)

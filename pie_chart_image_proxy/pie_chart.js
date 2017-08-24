const defaultColors = [
  '#DA6272', '#E6855E', '#F3C759', '#F9DB57',
  '#FFEE55', '#E4EC5B', '#C0D860', '#5EC84E',
  '#3DB680', '#40BFB0', '#42AAC7', '#44A5CB',
  '#45A1CF', '#6A8CC7', '#8B90BE', '#9D73BB',
  '#B75C9D', '#C35B9D', '#CE579B', '#D45D87',
]

const defaultOptionSVG = {
  size: 300,
}

export default class PieChart {
  constructor(...values) {
    this.values = values
    this.colors = defaultColors
  }

  renderAsSVG({ size } = defaultOptionSVG) {
    let validSize = parseInt(size)
    if (isNaN(validSize)) validSize = defaultOptionSVG.size

    const valueSum = this.values.reduce((total, val) => total + val, 0)
    const strokeLength = validSize * Math.PI

    const renderCircles = () => {
      let pos = 0
      let index = 0

      return this.values.map((val) => {
        const style = [
          `fill:transparent;`,
          `stroke:${this.colors[index % this.colors.length]};`,
          `stroke-width:${validSize / 2.0};`,
          `stroke-dasharray:0 ${strokeLength / 2.0  * pos / valueSum} ${strokeLength / 2.0 * val / valueSum} ${strokeLength};`,
        ].join('')

        pos += val
        index += 1

        return `<circle r="${validSize / 4.0}" cx="${validSize / 2.0}" cy="${validSize / 2.0}" style="${style}" />`
      }).join('')
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${validSize}" height="${validSize}" transform="rotate(-90,${validSize / 2.0},${validSize / 2.0})">${renderCircles()}</svg>`
  }
}

export default class QiitaArticle {
  constructor (title, text, link) {
    this.title = title
    this.text = text
    this.link = link
  }

  // TODO: ラベル用に自動で文字をtruncateするような仕組み
  // TODO: 記事の情報のSummary
  titleLabel () {
    if (this.title.length > 24) {
      return this.title.substring(0, 22) + '...'
    } else {
      return this.title
    }
  }

  summary () {
    const contents = this.text || ''

    if (contents.length > 0) {
      return contents.substring(0, 90) + '...'
    }

    return `${this.title} by ${this.author}`
  }
}

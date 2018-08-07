const extractExcerpt = html => {
  if (html) {
    return html.split("<!--more-->")[0]
  }
}

module.exports = extractExcerpt

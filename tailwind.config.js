module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        "gold": "#FDBA74"
      }
    },
    fontFamily: {
      imperialCursive: ['Imperial Script', 'cursive'],
      abrilFatface: ['Abril Fatface', 'serif']
    }
  },
  plugins: []
}
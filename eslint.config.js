import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    vue: true
  },
  {
    rules: {
      'style/comma-dangle': 'off'
    }
  }
)

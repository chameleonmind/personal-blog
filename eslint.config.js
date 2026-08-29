import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    vue: true,
    // Posts are MDC, not plain markdown: `#slot-name` is a named slot and the
    // fenced snippets are illustrative rather than a compilable program, so the
    // markdown/JS rules produce false positives (and would rewrite `#attribution`
    // into a heading, silently dropping the slot).
    ignores: ['content/**']
  },
  {
    rules: {
      'style/comma-dangle': 'off'
    }
  }
)

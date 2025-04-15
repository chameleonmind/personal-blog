import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // eslint-disable-next-line node/prefer-global/process
  if (process.server)
    return

  nuxtApp.hook('app:mounted', () => {
    const supported
        = typeof window !== 'undefined'
        && 'HTMLScriptElement' in window
        && HTMLScriptElement.supports?.('speculationrules')

    if (supported) {
      const specRules = {
        prefetch: [
          {
            source: 'document',
            where: {
              and: [
                { href_matches: '/*' },
              ]
            },
            eagerness: 'moderate'
          }
        ],
        prerender: [
          {
            source: 'document',
            where: {
              and: [
                { href_matches: '/*' },
              ]
            },
            eagerness: 'moderate'
          }
        ]
      }

      const scriptEl = document.createElement('script')
      scriptEl.type = 'speculationrules'
      scriptEl.textContent = JSON.stringify(specRules, null, 2)

      document.body.appendChild(scriptEl)
    }
  })
})

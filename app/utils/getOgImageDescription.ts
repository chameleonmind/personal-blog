export function getOgImageDescription(title: string | undefined, description: string | undefined, section: string | undefined) {
  return {
    headline: 'Chameleon Mind',
    title: title || 'Chameleon Mind Blog',
    description: description || 'Chameleon Mind Blog',
    section: section || '',
    theme: '#dacbfd'
  }
}

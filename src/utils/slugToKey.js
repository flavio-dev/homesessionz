export const slugToKey = (slug) => {
  return slug.replace(/-/g, '')
}

export default slugToKey

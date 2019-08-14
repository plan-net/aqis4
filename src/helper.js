/**
 * Get base path base on mode: dev or prod
 *
 * @returns {string}
 */
function getBasePath () {
  if (window.location.href.includes('http')) {
    // index.html
    return window.APIBASE_APP.replace('http:', 'ws:')
  }

  console.error(`incorrect network protocol ${window.location.href}`)

  return `ws://${window.location.host}/core4/api`
}

export {
  getBasePath
}

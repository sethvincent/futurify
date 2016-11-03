module.exports = function () {
  const pal = 'friend'
  const hi = `hi cool ${pal}`
  const arrow = (msg) => `${2 * 2} ${msg}`
  return arrow(hi)
}

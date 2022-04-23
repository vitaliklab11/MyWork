

let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $cells = document.getElementsByClassName('cell'),
  cells = Array.from($cells),
  zVals = []

window.onscroll = function() {

  let top = document.documentElement.scrollTop,
  delta = lastPos - top

  lastPos = top

  cells.forEach(function(n, i) {
    zVals.push ((i * zSpacing) + zSpacing)
    zVals[i] += delta * -5.5
    let cell = cells[i],
        transform =`translateZ(${zVals[i]}px)`,
        opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0 
        cell.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  })
} 

window.scrollTo(0 , 1)
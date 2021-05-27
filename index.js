/* Creación componente colores */
AFRAME.registerComponent('colores', {
  schema: {
    interval: { type: 'number', default: 5000 },
    defaultColor: { type: 'color', default: '#fff' }
  },

  init: function () {
    var el = this.el
    var interval = this.data.interval
    /* Colores del cubo */
    var colors = ["#FFD600", "#01579B", "#FF6D00", "#1B5E20", "#DD2C00"]

    var i = 0
    /* Asignación componente colores al cubo */
    el.setAttribute('color', colors[0])
    /* Ciclo para reiniciar colores cuando llegue al rojo "#DD2C00" */
    this.colorInterval = setInterval(function () {
      i = (i + 1) % colors.length
      el.setAttribute('color', colors[i])
    }, interval)
  },
})

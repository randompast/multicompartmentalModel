a = {}
  a.dt = 2.5

  // a.gl = 0.3
  // a.Vl = 10.613

  a.Vrest = 10
  a.rm = 50
  a.rL = 3

  a.Ie = 20
  a.Cm = 2
  a.size = 10
  a.count = 10
  a.steps = 600

  //Soma radius [4,100]um usually 10-25 (~larger than the nucleus)
  a.rSoma = 4
  //dendrites typically 1um thick
  a.rDendrite = 0.5
  a.lDendrite = 1
  //membrane thickness ~10nm

  a.isel = a.count
  a.iBool = true
  a.jsel = a.count
  a.jBool = true
  a.jshift = 300

  // a.radius = 0.4
  a.ilength = 300
  // a.spacing = 3
  // a.grid = false
  // a.nmh_inf_tau = false
  // a.vinmh = true
  // a.sin = false
  // a.square = false
  // a.alphaF = false
  // a.alpha = 1
  // a.tau = 5

module.exports = a

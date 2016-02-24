a = {}
  a.dt = 2.5

  a.Vrest = 10
  a.rm = 50
  a.rL = 3

  a.Ie = 60
  a.Cm = 2
  a.count = 25
  a.steps = 1000

  //Soma radius [4,100]um usually 10-25 (~larger than the nucleus)
  a.rSoma = 4
  //dendrites typically 1um thick
  a.rDendrite = 0.5
  a.lDendrite = 1

  a.isel = a.count
  a.iBool = true
  a.jsel = a.count
  a.jBool = true
  a.jshift = 300

  a.ilength = 300


module.exports = a

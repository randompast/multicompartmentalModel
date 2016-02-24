# Multicompartmental Model
Exploration of the multicompartmental model inspired by Theoretical Neuroscience Ch 6 (Abbot)
[See demo](http://randompast.github.io/multicompartmentalModel)

## Explaining the Variables
  * dt, simulation time step, positive to the right
  * Vrest, resting Potential
  * rm, membrane resistance
  * rL, lengthwise resistance
  * Ie, injected electrode current
  * Cm, membrane capacitance
  * count, number of nodes, multiple of 3 from [6,20]
  * steps, number of iterations, totaltime = dt*steps
  * rSoma, radius of soma (neruon cell body)
  * rDendrite, radius of dendrite (cylinder)
  * isel, index i selection
  * iBool, whether or not to inject at index i
  * jsel, index j selection
  * jBool, whether or not to inject at index j
  * jshift, shift the current of j relative to i
  * ilength, resize scaling of the current's effect through time

### Resolution
  * The larger grid is 100*dt (x) by 50mV (y)
  * The finer resolution is 10*dt by 5mV

### Lines
  * The voltage of each node is graphed in its corresponding color
  * Red line, 1px, f(i) + f(j),
  * Green line, 3px, f(i+j)
  * Thick line, 7px, behind the green line is represents the cell body's voltage
  * Black line is the difference: f(i) + f(j) - f(i+j)
    * This line is 0 everywhere and demonstrates that the system is effectively linear.  Nonlinear settings were not found.
    * This is an interactive justification for the integrate and fire model.

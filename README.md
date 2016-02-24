# Multicompartmental Model
Exploration of the [multicompartmental model](https://en.wikipedia.org/wiki/Compartmental_modelling_of_dendrites) inspired by Theoretical Neuroscience Ch 6 (Abbot)

[See demo](http://randompast.github.io/multicompartmentalModel)

Each node is modeled as an electrical circuit which is an approximation for the ionic phenomenon at these scales.  The [Hodgkin Huxley model](https://en.wikipedia.org/wiki/Hodgkin–Huxley_model) is justification that the electric circuit model is able to explain the complex reality that happens with these protein channels.  The multi compartmental model (ch6.4 Abbot) is diagramed with the cell body (soma, circle) to the left and is connected (lines) by dendrites (squares) to the right.

The following equation (6.29) shows how the voltage is updated (solved for dV) for a node with two neighbors.  Branches and ends would have 3 and 1 nodes respectively.

 c_m * dV_u/dt = [-i^u_m](https://github.com/randompast/multicompartmentalModel/blob/gh-pages/dV.js#L7) + I^u_e / [A_u](https://github.com/randompast/multicompartmentalModel/blob/gh-pages/A.js#L3) + [g_{u,u+1}](https://github.com/randompast/multicompartmentalModel/blob/gh-pages/guu.js) [(V_{u+1} - V_u)](https://github.com/randompast/multicompartmentalModel/blob/gh-pages/guuI.js) + g_{u,u-1}(V_{u+1} - V_u)

## Explaining the Diagram
  * Circle (filled), the cell body, soma
  * Squares, a node 
   * Corresponds to the color of the voltage graph
   * Numbered for convenience and debugging
  * Lines, connectivity of each node
  * Circles (empty), shows the selection (isel, jsel)

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
    * This is an interactive justification for the integrate and fire model
     * This allows calculation of the soma's potential by the sum of incoming spikes

## Implementation Notes
  * The init function could be cleaned up considerably.
  * Some settings explode the voltage, this could use further checks/exploration.
  * Units need more precision.

## License
  * C0, Public Domain.
  * I'd like to know if this was helpful.  Post an issue or [tweet me](https://twitter.com/randompast).

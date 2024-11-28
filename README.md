# Circle Overlap Estimator

This repository contains a project to estimate and calculate the overlap area of two circles using two approaches: **Monte Carlo simulation** and **exact mathematical computation**. Additionally, it provides a visual representation of the Monte Carlo method implemented in HTML, CSS, and JavaScript.

---

## Features

1. **Monte Carlo Method (C++):**
   - A simulation-based approach to estimate the overlap area.
   - Random points are generated within a bounding rectangle, and the proportion of points inside both circles is used to approximate the overlap area.
   - File: `CircleOverlapEstimator(MonteCarloMethod).cpp`

2. **Exact Mathematical Computation (C++):**
   - A precise calculation of the overlap area based on geometric formulas.
   - Includes handling cases where circles do not overlap or one is fully contained within the other.
   - File: `CircleOverlapEstimator.cpp`

3. **Visual Monte Carlo Simulation (HTML + JS):**
   - Interactive visual representation of the Monte Carlo method in a browser.
   - Adjustable parameters for the number of points and simulation speed.
   - Real-time progress and overlap estimation.
   - File: `index.html`

---

## Project Structure
```
├── CircleOverlapEstimator(MonteCarloMethod).cpp  # Monte Carlo method implementation in C++
├── CircleOverlapEstimator.cpp                   # Exact computation in C++
├── index.html                                   # Interactive visualization of Monte Carlo simulation
```

---

## How to Use

### Monte Carlo and Exact Computation (C++)

1. **Compile and Run:**
   ```bash
   g++ CircleOverlapEstimator(MonteCarloMethod).cpp -o MonteCarlo
   ./MonteCarlo

   g++ CircleOverlapEstimator.cpp -o ExactComputation
   ./ExactComputation
   ```

2. **Expected Outputs:**
   - Monte Carlo method will provide an estimated overlap area.
   - Exact computation will provide a precise overlap area using geometric formulas.

### Interactive Visualization (HTML + JS)

1. Open `index.html` in a modern web browser.
2. Adjust the **number of points** and **simulation speed** using the provided controls.
3. Click "Start Simulation" to begin the Monte Carlo simulation.
4. Observe the progress and the estimated overlap area in real-time.

---

## Mathematical Overview

### Monte Carlo Estimation

1. Generate random points within a bounding rectangle.
2. Check if each point lies inside both circles.
3. Estimate overlap area using:
   ```
   Overlap Area = (Points Inside Both Circles / Total Points) * Bounding Rectangle Area
   ```

---

### Exact Computation

For two circles with radii `r1` and `r2`, and distance `d` between their centers:

1. **Case 1: Circles are disjoint (`d >= r1 + r2`)**
   ```
   Overlap Area = 0
   ```

2. **Case 2: One circle is inside the other (`d <= |r1 - r2|`)**
   ```
   Overlap Area = Area of the smaller circle = π * min(r1^2, r2^2)
   ```

3. **Case 3: Partial overlap (`|r1 - r2| < d < r1 + r2`)**

   The overlap area is computed as:
   ```
   Overlap Area = A1 + A2

   A1 = r1^2 * cos^-1((d^2 + r1^2 - r2^2) / (2 * d * r1)) -
        0.5 * sqrt((-d + r1 + r2) * (d + r1 - r2) * (d - r1 + r2) * (d + r1 + r2))

   A2 = r2^2 * cos^-1((d^2 + r2^2 - r1^2) / (2 * d * r2))
   ```

---

## Technologies Used

1. **C++** for Monte Carlo and exact calculations.
2. **HTML, CSS, and JavaScript** for interactive visualization.

---

## License

This project is open-source and distributed under the MIT License. Feel free to use and modify.

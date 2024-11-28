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
   ![Monte Carlo Formula](https://latex.codecogs.com/png.latex?Overlap%20Area%20%3D%20%5Cleft%28%5Cfrac%7BPoints%20Inside%20Both%20Circles%7D%7BTotal%20Points%7D%5Cright%29%20%5Ctimes%20Bounding%20Rectangle%20Area)

### Exact Computation

For two circles with radii \( r_1 \) and \( r_2 \), and distance \( d \) between their centers:

1. If \( d \geq r_1 + r_2 \): Circles are disjoint, overlap area = 0.
2. If \( d \leq |r_1 - r_2| \): One circle is entirely inside the other, overlap area = area of the smaller circle.
3. Otherwise:
   ![Exact Formula](https://latex.codecogs.com/png.latex?Overlap%20Area%20%3D%20A_1%20%2B%20A_2)

   where:
   ![Formula A1](https://latex.codecogs.com/png.latex?A_1%20%3D%20r_1%5E2%20%5Ccos%5E%7B-1%7D%5Cleft%28%5Cfrac%7Bd%5E2%20%2B%20r_1%5E2%20-%20r_2%5E2%7D%7B2dr_1%7D%5Cright%29%20-%20%5Cfrac%7B%5Csqrt%7B%28-d%20%2B%20r_1%20%2B%20r_2%29%28d%20%2B%20r_1%20-%20r_2%29%28d%20-%20r_1%20%2B%20r_2%29%28d%20%2B%20r_1%20%2B%20r_2%29%7D%7D%7B2%7D)

   ![Formula A2](https://latex.codecogs.com/png.latex?A_2%20%3D%20r_2%5E2%20%5Ccos%5E%7B-1%7D%5Cleft%28%5Cfrac%7Bd%5E2%20%2B%20r_2%5E2%20-%20r_1%5E2%7D%7B2dr_2%7D%5Cright%29)

---

## Demo

### Monte Carlo Visualization
![Monte Carlo Visualization Screenshot](https://via.placeholder.com/600x400?text=Monte+Carlo+Visualization)

---

## Technologies Used

1. **C++** for Monte Carlo and exact calculations.
2. **HTML, CSS, and JavaScript** for interactive visualization.

---

## License

This project is open-source and distributed under the MIT License. Feel free to use and modify.

---

## Author

Developed with ❤️ by [Your Name]
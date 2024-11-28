#include <iostream>
#include <cmath>
#include <cstdlib>
#include <ctime>

using namespace std;

// Function to compute the Monte Carlo approximation of the overlap area
double monteCarloOverlap(double r1, double r2, double d, int canvasWidth, int canvasHeight, int numPoints) {
    int insideOverlap = 0; // Counter for points inside the overlap area

    // Generate random points
    for (int i = 0; i < numPoints; ++i) {
        // Generate random x and y coordinates inside the canvas
        double x = ((double)rand() / RAND_MAX) * canvasWidth;
        double y = ((double)rand() / RAND_MAX) * canvasHeight;

        // Circle 1 center
        double c1x = canvasWidth / 3.0;
        double c1y = canvasHeight / 2.0;

        // Circle 2 center
        double c2x = c1x + d;
        double c2y = c1y;

        // Check if the point is inside both circles
        bool inCircle1 = pow(x - c1x, 2) + pow(y - c1y, 2) <= r1 * r1;
        bool inCircle2 = pow(x - c2x, 2) + pow(y - c2y, 2) <= r2 * r2;

        if (inCircle1 && inCircle2) {
            insideOverlap++;
        }
    }

    // Compute the area of the bounding rectangle
    double areaRect = canvasWidth * canvasHeight;

    // Estimate the overlap area
    return (insideOverlap / (double)numPoints) * areaRect;
}

int main() {
    // Define the radii of the circles and the distance between their centers
    double r1 = 80.0; // Radius of the first circle
    double r2 = 60.0; // Radius of the second circle
    double d = 120.0; // Distance between the centers of the two circles
    int canvasWidth = 400;  // Width of the canvas
    int canvasHeight = 300; // Height of the canvas
    int numPoints = 100000; // Number of random points to generate

    // Seed the random number generator
    srand(time(0));

    // Compute the overlap area using the Monte Carlo method
    double overlapArea = monteCarloOverlap(r1, r2, d, canvasWidth, canvasHeight, numPoints);

    // Output the result
    cout << "Estimated overlap area between the two circles: " << overlapArea << " units²" << endl;

    return 0;
}

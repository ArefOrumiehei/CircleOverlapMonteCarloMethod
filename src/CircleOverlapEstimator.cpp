#include <iostream>
#include <cmath>
#include <iomanip>

using namespace std;

// Function to calculate the exact overlap area of two circles
double exactOverlapArea(double r1, double r2, double d) {
    // If the circles do not overlap
    if (d >= r1 + r2) {
        return 0.0;
    }

    // If one circle is completely inside the other
    if (d <= fabs(r1 - r2)) {
        double smallerRadius = min(r1, r2);
        return M_PI * smallerRadius * smallerRadius;
    }

    // Calculate the overlap area using the formula
    double part1 = r1 * r1 * acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1));
    double part2 = r2 * r2 * acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2));
    double part3 = 0.5 * sqrt((-d + r1 + r2) * (d + r1 - r2) * (d - r1 + r2) * (d + r1 + r2));

    return part1 + part2 - part3;
}

int main() {
    // Define the radii of the circles and the distance between their centers
    double r1 = 80.0; // Radius of the first circle
    double r2 = 60.0; // Radius of the second circle
    double d = 120.0; // Distance between the centers of the two circles

    // Calculate the exact overlap area
    double overlapArea = exactOverlapArea(r1, r2, d);

    // Output the result
    cout << fixed << setprecision(6);
    cout << "The exact overlap area between the two circles is: " << overlapArea << " units²" << endl;

    return 0;
}

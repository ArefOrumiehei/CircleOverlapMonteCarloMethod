const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Circle properties
const r1 = 80;
const r2 = 60;
const d = 120; // Distance between centers in pixels

// Circle centers
const circle1 = { x: 120, y: 150 };
const circle2 = { x: circle1.x + d, y: 150 };

let numPoints; // Total number of points to generate
let pointsPlaced = 0; // Counter for placed points
let pointsInsideBoth = 0; // Counter for points inside both circles
let isRunning = false; // Flag to control the simulation

// Draw a circle
function drawCircle(center, radius, color) {
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.5;
    ctx.fill();
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Generate random point inside the canvas
function generateRandomPoint() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    return { x, y };
}

// Update progress
function updateProgress() {
    document.getElementById('progress').innerText =
        `Points Placed: ${pointsPlaced} | Points Inside Both Circles: ${pointsInsideBoth}`;
}

// Draw random points and check overlap
function drawPointsStepByStep() {
    if (!isRunning || pointsPlaced >= numPoints) {
        isRunning = false;
        document.getElementById('stopButton').disabled = true;

        // Calculate final overlap area
        const areaRect = canvas.width * canvas.height;
        const overlapArea = (pointsInsideBoth / numPoints) * areaRect;

        // Display the result
        document.getElementById('result').innerText =
            `Estimated Overlap Area: ${overlapArea.toFixed(2)} units(px²)`;
        return;
    }

    // Generate a random point
    const point = generateRandomPoint();

    // Check if the point is inside both circles
    const inCircle1 = Math.pow(point.x - circle1.x, 2) + Math.pow(point.y - circle1.y, 2) <= Math.pow(r1, 2);
    const inCircle2 = Math.pow(point.x - circle2.x, 2) + Math.pow(point.y - circle2.y, 2) <= Math.pow(r2, 2);

    // Draw the point
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
    if (inCircle1 && inCircle2) {
        ctx.fillStyle = "red"; // Points inside both circles
        pointsInsideBoth++;
    } else if (inCircle1) {
        ctx.fillStyle = "blue"; // Points inside only the first circle
    } else if (inCircle2) {
        ctx.fillStyle = "green"; // Points inside only the second circle
    } else {
        ctx.fillStyle = "gray"; // Points outside both circles
    }
    ctx.fill();

    pointsPlaced++;
    updateProgress();

    // Get updated speed
    const speed = parseInt(document.getElementById('speed').value, 10);

    // Draw the next points
    setTimeout(drawPointsStepByStep, speed);
}

function main() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circles
    drawCircle(circle1, r1, "blue");
    drawCircle(circle2, r2, "green");

    // Reset variables
    numPoints = parseInt(document.getElementById('numPoints').value, 10);
    pointsPlaced = 0;
    pointsInsideBoth = 0;
    isRunning = true;

    document.getElementById('stopButton').disabled = false;

    updateProgress();
    drawPointsStepByStep();
}

// Draw the circles
drawCircle(circle1, r1, "blue");
drawCircle(circle2, r2, "green");

// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', main);
document.getElementById('stopButton').addEventListener('click', () => {
    isRunning = false;
    document.getElementById('stopButton').disabled = true;
});

// Update speed display
document.getElementById('speed').addEventListener('input', function () {
    document.getElementById('speedValue').innerText = this.value;
});
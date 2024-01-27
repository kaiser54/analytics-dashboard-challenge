
// options.js
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            min: 0,   // Set the minimum value for the y-axis
            max: 50000,  // Set the maximum value for the y-axis
            beginAtZero: true,
            ticks: {
                stepSize: 10000,
                font: {
                    family: 'Plus Jakarta Sans', // Replace 'YourCustomFont' with the actual font name
                    size: 12, // Set the font size
                    weight: 600,
                }, // Set the step size between ticks
            },
        },
        x: {
            beginAtZero: true,
            ticks: {
                font: {
                    family: 'Plus Jakarta Sans', // Replace 'YourCustomFont' with the actual font name
                    size: 12, // Set the font size
                    weight: 600,
                },
            },
        },
    },
}



// data.js
export const data = {
    labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    datasets: [
        {
            label: 'Data One',
            hoverBackgroundColor: createGradient(),
            backgroundColor: 'rgba(52, 202, 165, 0.10)',
            barThickness: 30,
            borderRadius: Number.MAX_VALUE,
            fontFamily: 'Plus Jakarta Sans',
            data: [5500, 13000, 25000, 8500, 45000, 8500, 25000, 26000, 34000, 4000, 30000, 22000, 50000]
        }
    ]
}


// Function to generate gradient
function createGradient() {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, '#34CAA5'); // Start color
    gradient.addColorStop(1, 'rgba(52, 202, 165, 0.00)'); // End color with alpha

    return gradient;
}

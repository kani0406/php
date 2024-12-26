const enrollmentCtx = document.getElementById('enrollmentChart').getContext('2d');
const genderCtx = document.getElementById('genderChart').getContext('2d');
const subjectCtx = document.getElementById('subjectChart').getContext('2d');
const ratioCtx = document.getElementById('ratioChart').getContext('2d');

async function fetchData() {
    try {
        const response = await fetch('get_data.php');
        const data = await response.json();
        createCharts(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function createCharts(data) {
    new Chart(enrollmentCtx, {
        type: 'line',
        data: {
            labels: data.enrollment.years,
            datasets: [{
                label: 'Number of Students',
                data: data.enrollment.counts,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(genderCtx, {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [data.gender.male, data.gender.female],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });

    new Chart(subjectCtx, {
        type: 'bar',
        data: {
            labels: data.subjects.names,
            datasets: [{
                label: 'Average Score',
                data: data.subjects.scores,
                backgroundColor: 'rgba(153, 102, 255, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    new Chart(ratioCtx, {
        type: 'doughnut',
        data: {
            labels: ['Students', 'Teachers'],
            datasets: [{
                data: [data.ratio.students, data.ratio.teachers],
                backgroundColor: ['rgb(255, 205, 86)', 'rgb(75, 192, 192)']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchData);
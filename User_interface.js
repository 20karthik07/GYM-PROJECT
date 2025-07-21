const pieCtx = document.getElementById('workoutPie').getContext('2d');
new Chart(pieCtx, {
  type: 'doughnut',
  data: {
    labels: ['Running', 'Cycling', 'Yoga'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#42a5f5', '#66bb6a', '#ffca28']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

const lineCtx = document.getElementById('workoutLine').getContext('2d');
new Chart(lineCtx, {
    type:'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label:'Workout Duration (Min)',
            data: [40,55,50,70,60,75],
            backgroundColor: 'rgba(66,165,245,.2)',
            borderColor: '#42a5f5',
            borderWidth: 2,
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        Responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const barCtx = document.getElementById('calorieBar').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'calories Burned',
            data: [300,450,500,400,350,600,700],
            backgroundColor: '#66bb6a'
        }]
    },
    options: {
        Responsive: true,
        Plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
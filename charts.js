// UrbanStake Charts Module
// This file contains chart initialization and management functions

// Initialize all charts on the page
function initializeCharts() {
  // Check if Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js is not loaded. Charts will not be rendered.');
    return;
  }
  
  // Initialize CO2 reduction chart if element exists
  const co2ChartEl = document.getElementById('co2Chart');
  if (co2ChartEl) {
    initializeCO2Chart();
  }
  
  // Initialize category impact chart if element exists
  const categoryChartEl = document.getElementById('categoryChart');
  if (categoryChartEl) {
    initializeCategoryChart();
  }
}

// Initialize CO2 reduction chart
function initializeCO2Chart() {
  const ctx = document.getElementById('co2Chart').getContext('2d');
  
  // Sample data for CO2 reduction over time
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'CO₂ Reduction (tons)',
        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800, 3200, 3000, 3500, 3800, 4200],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Cumulative Impact',
        data: [1200, 3100, 4600, 7100, 9300, 12300, 15100, 18300, 21300, 24800, 28600, 32800],
        borderColor: '#4F46E5',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4
      }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tons of CO₂'
        },
        ticks: {
          callback: function(value) {
            return value.toLocaleString() + 't';
          }
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'nearest'
    }
  };
  
  window.co2Chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}

// Initialize category impact chart
function initializeCategoryChart() {
  const ctx = document.getElementById('categoryChart').getContext('2d');
  
  // Data for impact by project category
  const data = {
    labels: ['Solar Energy', 'Urban Gardens', 'EV Infrastructure', 'Waste Management', 'Water Conservation', 'Affordable Housing'],
    datasets: [{
      data: [35, 20, 15, 12, 10, 8],
      backgroundColor: [
        '#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}% of total impact`;
          }
        }
      }
    }
  };
  
  window.categoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });
}

// Update chart based on time period
function updateChartPeriod(period) {
  // This function would update chart data based on selected time period
  // For demo purposes, we'll just show a notification
  const periodNames = {
    'all': 'All Time',
    'year': 'Past Year',
    'quarter': 'Past Quarter',
    'month': 'Past Month'
  };
  
  window.urbanStake.showNotification(`Charts updated for ${periodNames[period]} period`, 'info');
}

// Update chart type
function updateChartType(chartId, type) {
  if (chartId === 'co2' && window.co2Chart) {
    window.co2Chart.config.type = type;
    window.co2Chart.update();
  } else if (chartId === 'category' && window.categoryChart) {
    window.categoryChart.config.type = type;
    window.categoryChart.update();
  }
}

// Create portfolio distribution chart
function createPortfolioChart(investments, elementId = 'portfolioChart') {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  // Clear existing content
  container.innerHTML = '';
  
  if (!investments || investments.length === 0) {
    container.innerHTML = '<div class="no-chart-data">No investment data to display</div>';
    return;
  }
  
  // Group investments by project
  const investmentByProject = {};
  investments.forEach(investment => {
    const project = window.urbanStake.getProjectById(investment.projectId);
    if (project) {
      if (!investmentByProject[project.title]) {
        investmentByProject[project.title] = {
          amount: 0,
          color: getRandomColor(),
          project: project
        };
      }
      investmentByProject[project.title].amount += investment.amount;
    }
  });
  
  const projects = Object.keys(investmentByProject);
  const totalAmount = Object.values(investmentByProject).reduce((sum, item) => sum + item.amount, 0);
  
  // Create chart container
  const chartContainer = document.createElement('div');
  chartContainer.className = 'portfolio-chart-container';
  chartContainer.style.display = 'flex';
  chartContainer.style.flexWrap = 'wrap';
  chartContainer.style.gap = '2rem';
  chartContainer.style.alignItems = 'center';
  chartContainer.style.justifyContent = 'center';
  
  // Create pie chart visualization
  const chartVisual = document.createElement('div');
  chartVisual.className = 'chart-visual';
  chartVisual.style.width = '200px';
  chartVisual.style.height = '200px';
  chartVisual.style.borderRadius = '50%';
  
  // Create conic gradient for pie chart
  let gradientString = 'conic-gradient(';
  let currentAngle = 0;
  
  projects.forEach((project, index) => {
    const percentage = (investmentByProject[project].amount / totalAmount) * 100;
    const angle = (percentage / 100) * 360;
    
    gradientString += `${investmentByProject[project].color} ${currentAngle}deg ${currentAngle + angle}deg`;
    
    if (index < projects.length - 1) {
      gradientString += ', ';
    }
    
    currentAngle += angle;
  });
  
  gradientString += ')';
  chartVisual.style.background = gradientString;
  
  // Create legend
  const chartLegend = document.createElement('div');
  chartLegend.className = 'chart-legend';
  chartLegend.style.flex = '1';
  chartLegend.style.minWidth = '200px';
  
  projects.forEach(project => {
    const percentage = ((investmentByProject[project].amount / totalAmount) * 100).toFixed(1);
    
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.style.display = 'flex';
    legendItem.style.alignItems = 'center';
    legendItem.style.marginBottom = '0.75rem';
    
    const legendColor = document.createElement('div');
    legendColor.className = 'legend-color';
    legendColor.style.width = '16px';
    legendColor.style.height = '16px';
    legendColor.style.borderRadius = '4px';
    legendColor.style.marginRight = '0.75rem';
    legendColor.style.backgroundColor = investmentByProject[project].color;
    
    const legendText = document.createElement('div');
    legendText.className = 'legend-text';
    legendText.style.flex = '1';
    legendText.style.display = 'flex';
    legendText.style.flexDirection = 'column';
    
    const legendLabel = document.createElement('span');
    legendLabel.className = 'legend-label';
    legendLabel.style.fontSize = '0.875rem';
    legendLabel.style.fontWeight = '500';
    legendLabel.textContent = project;
    
    const legendValue = document.createElement('span');
    legendValue.className = 'legend-value';
    legendValue.style.fontSize = '0.75rem';
    legendValue.style.color = '#6B7280';
    legendValue.textContent = `${percentage}% (${window.urbanStake.formatCurrency(investmentByProject[project].amount)})`;
    
    legendText.appendChild(legendLabel);
    legendText.appendChild(legendValue);
    
    legendItem.appendChild(legendColor);
    legendItem.appendChild(legendText);
    chartLegend.appendChild(legendItem);
  });
  
  chartContainer.appendChild(chartVisual);
  chartContainer.appendChild(chartLegend);
  container.appendChild(chartContainer);
}

// Helper function to get random color
function getRandomColor() {
  const colors = [
    '#4F46E5', '#10B981', '#F59E0B', '#EF4444',
    '#8B5CF6', '#06B6D4', '#84CC16', '#F97316',
    '#EC4899', '#6366F1', '#14B8A6', '#F43F5E'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Export chart functions
window.urbanStakeCharts = {
  initializeCharts,
  initializeCO2Chart,
  initializeCategoryChart,
  updateChartPeriod,
  updateChartType,
  createPortfolioChart
};

// Auto-initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for all elements to be fully loaded
  setTimeout(initializeCharts, 100);
});

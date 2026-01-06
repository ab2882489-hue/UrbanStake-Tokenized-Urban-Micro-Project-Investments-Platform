// UrbanStake Application Logic
// This file contains shared functionality across the platform

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Common initialization code can go here
  console.log('UrbanStake platform initialized');
  
  // Check for wallet connection status
  checkWalletConnection();
  
  // Update user info in navigation
  updateUserInfo();
});

// Check wallet connection status
function checkWalletConnection() {
  const connectBtn = document.getElementById('connectWallet');
  if (connectBtn && localStorage.getItem('urbanstake_wallet_connected')) {
    connectBtn.textContent = 'Wallet Connected';
    connectBtn.classList.add('connected');
  }
}

// Update user information in navigation
function updateUserInfo() {
  const userData = JSON.parse(localStorage.getItem('urbanstake_user') || '{}');
  
  // Update user name in navigation
  const userNameElements = document.querySelectorAll('.user-name');
  userNameElements.forEach(el => {
    if (userData.username) {
      el.textContent = userData.username;
    }
  });
  
  // Update user avatar
  const userAvatarElements = document.querySelectorAll('.user-avatar');
  userAvatarElements.forEach(el => {
    if (userData.username) {
      el.textContent = userData.username.charAt(0).toUpperCase();
    }
  });
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Calculate funding percentage
function calculateFundingPercent(tokensAvailable, totalTokens) {
  const fundedTokens = totalTokens - tokensAvailable;
  return Math.round((fundedTokens / totalTokens) * 100);
}

// Generate random color for charts
function getRandomColor() {
  const colors = [
    '#4F46E5', '#10B981', '#F59E0B', '#EF4444',
    '#8B5CF6', '#06B6D4', '#84CC16', '#F97316',
    '#EC4899', '#6366F1', '#14B8A6', '#F43F5E'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Show notification
function showNotification(message, type = 'info') {
  // Check if notification already exists
  const existingNotification = document.querySelector('.notification.show');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close"><i class="fas fa-times"></i></button>
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 5000);
  
  // Close button event
  notification.querySelector('.notification-close').addEventListener('click', function() {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  });
}

// Handle wallet connection
function connectWallet() {
  const connectBtn = document.getElementById('connectWallet');
  if (connectBtn) {
    // Simulate wallet connection
    setTimeout(() => {
      connectBtn.textContent = 'Wallet Connected';
      connectBtn.classList.add('connected');
      localStorage.setItem('urbanstake_wallet_connected', 'true');
      showNotification('Wallet connected successfully!', 'success');
    }, 500);
  }
}

// Get project by ID
function getProjectById(id) {
  return window.urbanStakeData.projects.find(project => project.id === id);
}

// Get user investments from localStorage
function getUserInvestments() {
  return JSON.parse(localStorage.getItem('urbanstake_investments') || '[]');
}

// Add investment
function addInvestment(projectId, tokensBought, amount) {
  const project = getProjectById(projectId);
  if (!project) return false;
  
  const investments = getUserInvestments();
  const newInvestment = {
    projectId,
    projectTitle: project.title,
    tokensBought,
    amount,
    date: new Date().toISOString(),
    tokenPrice: project.tokenPrice
  };
  
  investments.push(newInvestment);
  localStorage.setItem('urbanstake_investments', JSON.stringify(investments));
  
  // Update user balance
  updateUserBalance(-amount);
  
  return true;
}

// Update user balance
function updateUserBalance(amount) {
  const userData = JSON.parse(localStorage.getItem('urbanstake_user') || '{}');
  userData.balance = (userData.balance || 0) + amount;
  localStorage.setItem('urbanstake_user', JSON.stringify(userData));
  return userData.balance;
}

// Calculate user's total portfolio value
function calculatePortfolioValue() {
  const investments = getUserInvestments();
  let totalValue = 0;
  
  investments.forEach(investment => {
    const project = getProjectById(investment.projectId);
    if (project) {
      // Simple calculation: investment amount + 10% ROI
      totalValue += investment.amount * 1.1;
    }
  });
  
  return totalValue;
}

// Calculate user's impact
function calculateUserImpact() {
  const investments = getUserInvestments();
  let totalCO2 = 0;
  let totalEnergy = 0;
  let totalJobs = 0;
  let totalHouseholds = 0;
  
  investments.forEach(investment => {
    const project = getProjectById(investment.projectId);
    if (project) {
      const tokenPercentage = investment.tokensBought / project.totalTokens;
      totalCO2 += project.impact.co2Reduction * tokenPercentage;
      totalEnergy += (project.impact.energySaved || 0) * tokenPercentage;
      totalJobs += project.impact.jobsCreated * tokenPercentage;
      totalHouseholds += (project.impact.householdsBenefited || 0) * tokenPercentage;
    }
  });
  
  return {
    co2: totalCO2,
    energy: totalEnergy,
    jobs: totalJobs,
    households: totalHouseholds
  };
}

// Export functions to global scope
window.urbanStake = {
  showNotification,
  connectWallet,
  getProjectById,
  getUserInvestments,
  addInvestment,
  updateUserBalance,
  calculatePortfolioValue,
  calculateUserImpact,
  formatCurrency,
  formatDate
};

// UrbanStake Data Layer
// This file contains mock data for the UrbanStake platform

window.urbanStakeData = {
  // User data (stored in localStorage in real implementation)
  users: [
    {
      id: "user1",
      username: "urban_investor",
      walletId: "0x742d35Cc6634C0532925a3b8...",
      balance: 5000,
      investments: [
        { projectId: "1", tokensBought: 25, date: "2023-10-15" },
        { projectId: "3", tokensBought: 10, date: "2023-11-05" }
      ]
    }
  ],
  
  // Projects data
  projects: [
    {
      id: "1",
      title: "Brooklyn Community Solar Rooftops",
      category: "Solar Energy",
      location: "Brooklyn, New York",
      description: "This project installs solar panels on 50 residential rooftops in underserved Brooklyn communities, reducing electricity costs for residents and cutting carbon emissions. The project includes battery storage for energy resilience and community ownership through a cooperative model.",
      totalCost: 1250000,
      tokenPrice: 25,
      totalTokens: 50000,
      tokensAvailable: 18500,
      fundedPercent: 63,
      totalValue: 1250000,
      expectedROI: 8.5,
      duration: 24,
      createdAt: "2023-09-10",
      highlights: [
        "50 residential rooftops with solar installation",
        "Community-owned cooperative model",
        "Battery storage for energy resilience",
        "20-year power purchase agreement",
        "Local job creation and training"
      ],
      impact: {
        co2Reduction: 420,
        jobsCreated: 15,
        energySaved: 1250,
        householdsBenefited: 50
      }
    },
    {
      id: "2",
      title: "Chicago Urban Gardens Network",
      category: "Urban Gardens",
      location: "Chicago, Illinois",
      description: "Transforming vacant lots in Chicago's South Side into productive urban gardens that provide fresh produce, community gathering spaces, and job training in urban agriculture. The project includes greenhouse facilities for year-round production.",
      totalCost: 850000,
      tokenPrice: 18,
      totalTokens: 47222,
      tokensAvailable: 12000,
      fundedPercent: 75,
      totalValue: 850000,
      expectedROI: 6.2,
      duration: 18,
      createdAt: "2023-08-22",
      highlights: [
        "12 vacant lots transformed",
        "Year-round greenhouse production",
        "Job training in urban agriculture",
        "Farmers market for local sales",
        "Educational programs for schools"
      ],
      impact: {
        co2Reduction: 180,
        jobsCreated: 28,
        householdsBenefited: 240
      }
    },
    {
      id: "3",
      title: "LA Public EV Charging Network",
      category: "EV Infrastructure",
      location: "Los Angeles, California",
      description: "Installing 100 public EV charging stations in strategic locations across Los Angeles to support the city's transition to electric vehicles. The project focuses on underserved neighborhoods with limited EV infrastructure.",
      totalCost: 2100000,
      tokenPrice: 42,
      totalTokens: 50000,
      tokensAvailable: 8500,
      fundedPercent: 83,
      totalValue: 2100000,
      expectedROI: 9.1,
      duration: 30,
      createdAt: "2023-10-05",
      highlights: [
        "100 Level 3 fast charging stations",
        "Solar-powered charging canopies",
        "Focus on underserved neighborhoods",
        "Integration with city's EV plan",
        "Mobile app for station management"
      ],
      impact: {
        co2Reduction: 650,
        jobsCreated: 22,
        energySaved: 850
      }
    },
    {
      id: "4",
      title: "Seattle Rainwater Harvesting System",
      category: "Water Conservation",
      location: "Seattle, Washington",
      description: "Community-scale rainwater harvesting systems for 30 multi-family buildings in Seattle, reducing municipal water use and stormwater runoff while providing water for irrigation and non-potable uses.",
      totalCost: 680000,
      tokenPrice: 22,
      totalTokens: 30909,
      tokensAvailable: 9200,
      fundedPercent: 70,
      totalValue: 680000,
      expectedROI: 5.8,
      duration: 15,
      createdAt: "2023-11-12",
      highlights: [
        "30 multi-family buildings",
        "100,000 gallon total storage capacity",
        "Smart monitoring system",
        "Reduces stormwater runoff by 40%",
        "Educational component for residents"
      ],
      impact: {
        co2Reduction: 120,
        jobsCreated: 12,
        householdsBenefited: 300
      }
    },
    {
      id: "5",
      title: "Miami Beach Coastal Resilience",
      category: "Coastal Protection",
      location: "Miami Beach, Florida",
      description: "Living shoreline restoration with native mangroves and oyster beds to protect against coastal erosion and storm surge while creating marine habitat. The project includes community monitoring and educational programs.",
      totalCost: 950000,
      tokenPrice: 30,
      totalTokens: 31666,
      tokensAvailable: 7500,
      fundedPercent: 76,
      totalValue: 950000,
      expectedROI: 7.2,
      duration: 36,
      createdAt: "2023-07-30",
      highlights: [
        "2 miles of living shoreline",
        "15,000 mangrove plantings",
        "Oyster bed restoration",
        "Coastal erosion reduction",
        "Marine habitat creation"
      ],
      impact: {
        co2Reduction: 320,
        jobsCreated: 18,
        householdsBenefited: 1200
      }
    },
    {
      id: "6",
      title: "Detroit Community Composting Hubs",
      category: "Waste Management",
      location: "Detroit, Michigan",
      description: "Network of neighborhood composting hubs that process food waste from households and local businesses, creating nutrient-rich compost for community gardens and reducing landfill waste.",
      totalCost: 420000,
      tokenPrice: 15,
      totalTokens: 28000,
      tokensAvailable: 4200,
      fundedPercent: 85,
      totalValue: 420000,
      expectedROI: 4.5,
      duration: 12,
      createdAt: "2023-09-18",
      highlights: [
        "10 neighborhood composting hubs",
        "Processes 100 tons of waste annually",
        "Creates compost for community gardens",
        "Reduces methane emissions from landfills",
        "Educational workshops for residents"
      ],
      impact: {
        co2Reduction: 85,
        jobsCreated: 10,
        householdsBenefited: 800
      }
    },
    {
      id: "7",
      title: "Portland Micro-Housing Initiative",
      category: "Affordable Housing",
      location: "Portland, Oregon",
      description: "Developing 25 micro-housing units with sustainable design features for low-income residents. The project includes shared community spaces, rooftop gardens, and renewable energy systems.",
      totalCost: 1800000,
      tokenPrice: 50,
      totalTokens: 36000,
      tokensAvailable: 10800,
      fundedPercent: 70,
      totalValue: 1800000,
      expectedROI: 6.8,
      duration: 28,
      createdAt: "2023-10-30",
      highlights: [
        "25 affordable micro-units",
        "Solar panels and green roofs",
        "Shared community spaces",
        "Proximity to public transit",
        "Community land trust model"
      ],
      impact: {
        co2Reduction: 280,
        jobsCreated: 35,
        householdsBenefited: 25
      }
    },
    {
      id: "8",
      title: "Austin Smart Bike Share Expansion",
      category: "Sustainable Transport",
      location: "Austin, Texas",
      description: "Expanding the city's bike share program with 500 electric-assist bikes and 75 new stations in underserved neighborhoods, promoting clean transportation and reducing traffic congestion.",
      totalCost: 750000,
      tokenPrice: 20,
      totalTokens: 37500,
      tokensAvailable: 11250,
      fundedPercent: 70,
      totalValue: 750000,
      expectedROI: 5.5,
      duration: 20,
      createdAt: "2023-11-05",
      highlights: [
        "500 electric-assist bikes",
        "75 new stations in underserved areas",
        "Integration with public transit",
        "App-based access and payment",
        "Maintenance and operations jobs"
      ],
      impact: {
        co2Reduction: 210,
        jobsCreated: 14,
        householdsBenefited: 15000
      }
    }
  ],
  
  // Transactions log (would be stored in a database in real implementation)
  transactions: [
    {
      id: "tx1",
      userId: "user1",
      projectId: "1",
      tokensBought: 25,
      amount: 625,
      date: "2023-10-15T14:30:00Z"
    },
    {
      id: "tx2",
      userId: "user1",
      projectId: "3",
      tokensBought: 10,
      amount: 420,
      date: "2023-11-05T09:15:00Z"
    }
  ],
  
  // Impact analytics data
  impactAnalytics: {
    totalCO2Reduced: 24700,
    totalEnergyGenerated: 18400,
    totalJobsCreated: 420,
    totalHouseholdsBenefited: 3150,
    monthlyTrend: [
      { month: "Jan", co2: 1200, energy: 850, jobs: 25, households: 180 },
      { month: "Feb", co2: 1900, energy: 1200, jobs: 32, households: 210 },
      { month: "Mar", co2: 1500, energy: 1100, jobs: 28, households: 190 },
      { month: "Apr", co2: 2500, energy: 1800, jobs: 42, households: 280 },
      { month: "May", co2: 2200, energy: 1600, jobs: 38, households: 260 },
      { month: "Jun", co2: 3000, energy: 2200, jobs: 52, households: 350 },
      { month: "Jul", co2: 2800, energy: 2100, jobs: 48, households: 320 },
      { month: "Aug", co2: 3200, energy: 2400, jobs: 56, households: 380 },
      { month: "Sep", co2: 3000, energy: 2300, jobs: 52, households: 360 },
      { month: "Oct", co2: 3500, energy: 2600, jobs: 62, households: 420 },
      { month: "Nov", co2: 3800, energy: 2900, jobs: 68, households: 460 },
      { month: "Dec", co2: 4200, energy: 3200, jobs: 75, households: 500 }
    ],
    byCategory: [
      { category: "Solar Energy", projects: 45, co2: 8500, investment: 5200000 },
      { category: "Urban Gardens", projects: 32, co2: 3200, investment: 2800000 },
      { category: "EV Infrastructure", projects: 28, co2: 6200, investment: 4100000 },
      { category: "Waste Management", projects: 25, co2: 1800, investment: 1500000 },
      { category: "Water Conservation", projects: 20, co2: 1500, investment: 1200000 },
      { category: "Affordable Housing", projects: 18, co2: 2800, investment: 3200000 }
    ]
  }
};

// Initialize localStorage with sample data if not already present
function initializeLocalStorage() {
  if (!localStorage.getItem('urbanstake_initialized')) {
    // Set flag
    localStorage.setItem('urbanstake_initialized', 'true');
    
    // Initialize user data
    localStorage.setItem('urbanstake_user', JSON.stringify({
      id: 'user1',
      username: 'urban_investor',
      balance: 5000
    }));
    
    // Initialize investments
    localStorage.setItem('urbanstake_investments', JSON.stringify([
      {
        projectId: '1',
        projectTitle: 'Brooklyn Community Solar Rooftops',
        tokensBought: 25,
        amount: 625,
        date: '2023-10-15T14:30:00Z',
        tokenPrice: 25
      },
      {
        projectId: '3',
        projectTitle: 'LA Public EV Charging Network',
        tokensBought: 10,
        amount: 420,
        date: '2023-11-05T09:15:00Z',
        tokenPrice: 42
      }
    ]));
  }
}

// Call initialization when data.js loads
document.addEventListener('DOMContentLoaded', initializeLocalStorage);

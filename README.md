# Library Management System Dashboard

A dynamic React application that serves as a dashboard for a library management system. The application features dynamic content rendering based on JSON configuration, responsive design, and URL-driven navigation.

## 🚀 Live Demo

**Live Site:** [https://harijw.github.io/library-dashboard/](https://harijw.github.io/library-dashboard/)

## 📋 Features

### Core Functionality

- **Dynamic Content Rendering**: Components are dynamically loaded based on JSON configuration
- **URL-Driven Navigation**: React Router manages navigation with URL updates
- **Responsive Layout**: Design that works across all devices
- **Component Reusability**: Modular, reusable React components
- **Error Handling**: Robust error handling with loading states

### Layout Structure

- **Header**: Fixed top navigation with mobile menu toggle
- **Sidebar**: Left navigation menu with route-based active states
- **Main Content**: Dynamic content area that updates based on URL
- **Footer**: Fixed footer with copyright information

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks
- **React Router v6**: Client-side routing and navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **ECharts**: Professional charting library via echarts-for-react
- **JSON**: Configuration-driven architecture

## 📁 Project Structure

```
library-dashboard/
├── public/
│   ├── data/
│   │   ├── navigation.json
│   │   ├── summary-card.json
│   │   ├── borrow-chart.json
│   │   ├── books-table.json
│   │   ├── members-table.json
│   │   └── active-members.json
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Chart.js
│   │   ├── DashboardLayout.js
│   │   ├── DynamicComponentLoader.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Loader.js
│   │   ├── Navigation.js
│   │   └── Table.js
│   ├── pages/
│   │   └── DashboardPage.js
│   ├── services/
│   │   └── dataService.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HariJW/library-dashboard.git
   cd library-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173/library-dashboard/](http://localhost:5173/library-dashboard/)

### Dependencies

```json
{
  "echarts": "^5.6.0",
  "echarts-for-react": "^3.0.2",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.8.0"
}
```

## 👨‍💻 Author

**Your Name**

- GitHub: [@HariJW](https://github.com/HariJW)
- Email : harshwaychal936@gmail.com

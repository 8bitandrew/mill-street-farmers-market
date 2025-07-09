# Mill Street Farmers Market

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive website for the Mill Street Farmers Market, built with React, TypeScript, and Vite. This project showcases the market's vendors, mission, and market information in a clean, user-friendly interface.

## 🌟 Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Interactive Components**:
  - Image carousel on the homepage
  - Countdown timer to market events
  - Smooth page transitions
  - Scroll-to-top button
- **Vendor Information**: Detailed vendor guidelines and application process
- **Market Details**: Up-to-date market information and hours

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/8bitandrew/mill-street-farmers-market.git
   cd mill-street-farmers-market/farmersmarket.client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🐳 Docker Support

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t farmers-market-app .

# Run the container
docker run -d -p 8080:80 --name farmers-market farmers-market-app
```

Visit [http://localhost:8080](http://localhost:8080) to see the application running in a container.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animation**: Framer Motion
- **Icons**: Heroicons
- **Containerization**: Docker
- **Web Server**: Nginx (production)

## 📂 Project Structure

```
farmersmarket.client/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Homepage
│   │   ├── About.tsx    # About page
│   │   └── Vendors.tsx  # Vendors information page
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📝 Vendor Information

For vendors interested in joining the market, please visit the [Vendors](/vendors) page for application details, guidelines, and approved product information.

## 📅 Market Information

- **Season**: August 1st - September 26th, 2025
- **Location**: Mill Street, Downtown
- **Hours**: Every Saturday, 8:00 AM - 1:00 PM

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the Mill Street community
- Special thanks to all our vendors and visitors

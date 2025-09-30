# WeatherNow - Real-time Weather App

A modern, responsive weather application built with React that provides real-time weather information for cities worldwide.

## Features

- 🌍 **Global Weather Search** - Search weather for any city worldwide
- 📍 **Current Location** - Get weather using your device's location
- 📊 **Detailed Forecast** - 5-day weather forecast with comprehensive data
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful gradient designs and smooth animations
- ⚡ **Fast & Reliable** - Powered by OpenWeatherMap API
- 🎬 **Dynamic Background** - Animated weather-themed background with floating elements
- ✨ **Smooth Animations** - Page transitions, search results, and interactive elements
- 🌈 **Animated Headings** - Dynamic gradient color-shifting text effects
- 🎭 **Glass Morphism** - Modern glass-like UI effects throughout the app

## Screenshots

The app features:
- Clean, modern interface with animated gradient backgrounds
- Real-time weather data with weather icons
- Detailed weather information (humidity, wind speed, pressure, etc.)
- 5-day forecast with temperature ranges
- Error handling for invalid searches
- Responsive design for all devices
- Dynamic background animations with floating weather elements
- Smooth page transitions and search result animations
- Animated headings with gradient color shifts
- Glass morphism effects for modern UI aesthetics
- Enhanced hover effects and interactive elements

## Tech Stack

- **React** - Frontend framework
- **React Router** - Navigation between pages
- **OpenWeatherMap API** - Weather data source
- **CSS3** - Advanced styling with gradients, animations, and glass morphism
- **JavaScript ES6+** - Modern JavaScript features
- **CSS Animations** - Custom keyframe animations and transitions
- **Glass Morphism** - Modern UI design technique

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. **Clone or download the project**
   ```bash
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

4. **Configure the API key**
   - Open `src/pages/Home.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app should now be running!

## Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Footer.js & Footer.css
│   │   ├── SearchSection.js & SearchSection.css
│   │   ├── WeatherCard.js & WeatherCard.css
│   │   └── ForecastCard.js & ForecastCard.css
│   ├── pages/
│   │   ├── Home.js & Home.css
│   │   └── About.js & About.css
│   ├── App.js & App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Usage

1. **Search by City**
   - Enter a city name in the search box
   - Click "Search" or press Enter
   - View current weather and 5-day forecast

2. **Use Current Location**
   - Click "Use Current Location" button
   - Allow location access when prompted
   - Get weather for your current location

3. **Navigate**
   - Use the header navigation to switch between Home and About pages
   - Footer contains links to social profiles and API information

## Animation Features

The app includes several sophisticated animation systems:

### 🎬 Background Animations
- **Dynamic Gradients**: Continuously shifting gradient backgrounds that change every 30 seconds
- **Floating Elements**: Animated clouds and weather icons that float across the screen
- **Smooth Transitions**: Seamless background color transitions

### ✨ Page Transitions
- **Fade In/Slide Up**: Smooth entrance animations for all pages
- **Staggered Content**: Child elements animate in sequence for polished feel
- **Route Transitions**: Seamless navigation between pages

### 🔍 Search Result Animations
- **Zoom In Effect**: Weather cards appear with scale and rotation animations
- **Staggered Forecast**: 5-day forecast cards animate in sequence
- **Error Animations**: Smooth error message appearances

### 🌈 Heading Animations
- **Gradient Shifts**: Dynamic color-changing text with multiple gradient stops
- **Pulse Effects**: Subtle scaling animations for main titles
- **Glow Effects**: Text shadow animations for section headings

### 🎭 Interactive Elements
- **Hover Effects**: Enhanced button and card hover animations
- **Glass Morphism**: Modern glass-like transparency effects
- **Focus States**: Accessible focus indicators with smooth transitions

## API Configuration

The app uses the OpenWeatherMap API with the following endpoints:
- Current weather: `https://api.openweathermap.org/data/2.5/weather`
- 5-day forecast: `https://api.openweathermap.org/data/2.5/forecast`

### API Key Setup
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the placeholder in `src/pages/Home.js`

## Customization

### Styling
- Modify CSS files in the `src/components/` and `src/pages/` directories
- Update color schemes in the CSS files
- Adjust animations and transitions

### Features
- Add more weather data points
- Implement weather alerts
- Add temperature unit conversion
- Include weather maps

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project
2. Upload the `build` folder to your hosting service
3. Configure environment variables if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues:
1. Check that your API key is correctly configured
2. Ensure you have an active internet connection
3. Verify the city name is spelled correctly
4. Check the browser console for error messages

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- React team for the amazing framework
- All contributors and users of this project

---

**WeatherNow** - Stay informed about the weather, anywhere in the world! 🌤️

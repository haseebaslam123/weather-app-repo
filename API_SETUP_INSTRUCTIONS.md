# 🔧 API Setup Instructions

## Current Status
Your weather app is currently running in **DEMO MODE** with sample data. This means the search functionality will work, but it will show fake weather data instead of real data.

## Why Demo Mode?
The current API key in the code might be invalid or expired. To get real weather data, you need to get your own free API key.

## Steps to Get Real Weather Data

### 1. Get a Free API Key
1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Click "Sign Up" to create a free account
3. Verify your email address
4. Go to your dashboard and copy your API key

### 2. Update the Code
1. Open `src/pages/Home.js`
2. Find this line:
   ```javascript
   const API_KEY = '53c4d2bb95e997f5c63f4180acb6e518';
   ```
3. Replace it with your new API key:
   ```javascript
   const API_KEY = 'YOUR_NEW_API_KEY_HERE';
   ```

### 3. Disable Demo Mode
1. In the same file, find this line:
   ```javascript
   const DEMO_MODE = true;
   ```
2. Change it to:
   ```javascript
   const DEMO_MODE = false;
   ```

### 4. Test the App
1. Save the file
2. The app will automatically reload
3. Try searching for a city
4. You should now see real weather data!

## Troubleshooting

### If you still see demo data:
- Make sure you saved the file
- Check that DEMO_MODE is set to false
- Verify your API key is correct

### If you get API errors:
- Check that your API key is valid
- Make sure you've activated your OpenWeatherMap account
- Try the "Test API Connection" button in the app

### If the search still doesn't work:
- Open browser developer tools (F12)
- Check the Console tab for error messages
- Look for any network errors in the Network tab

## Demo Mode Features
Even in demo mode, you can:
- ✅ Test the search functionality
- ✅ See the weather card animations
- ✅ View the 5-day forecast layout
- ✅ Experience all the UI animations
- ✅ Test the responsive design

## Need Help?
If you're still having issues:
1. Check the browser console for error messages
2. Make sure your internet connection is working
3. Verify your OpenWeatherMap account is active
4. Try a different city name

The app is fully functional - you just need a valid API key to get real weather data! 🌤️




# Facial Emotion Analysis for Public Services

A landing page for a facial emotion analysis service designed to improve public services. Built with HTML, CSS, and JavaScript.

## Features

- Clean, modern design with hover effects
- Mobile responsive
- Easy to customize
- Animated link cards and feature sections
- Font Awesome icons
- Links to social media, website, and app downloads

## How to Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```
   npm i -g vercel
   ```

2. Login to Vercel:
   ```
   vercel login
   ```

3. Deploy the project:
   ```
   vercel
   ```

### Option 2: Deploy with GitHub

1. Create a new GitHub repository
2. Push this code to your repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. Go to [Vercel](https://vercel.com)
4. Create a new project
5. Import your GitHub repository
6. Deploy

## Customization

### Adding or Changing Links

Edit the `links` array in the `script.js` file:

```javascript
const links = [
    { name: 'Facebook Page', url: 'https://facebook.com/yourpage', icon: 'fab fa-facebook' },
    { name: 'Zalo Official', url: 'https://zalo.me/yourpage', icon: 'fab fa-zalo' },
    // Add more links here
];
```

### Changing Colors

Edit the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #3B82F6;
    --secondary-color: #10B981;
    --gradient-start: #4F46E5;
    --gradient-end: #10B981;
    /* Add more custom colors here */
}
```

### Changing Profile Image

Replace the placeholder image URL in `index.html`:

```html
<img src="your-image-url.jpg" alt="Profile" class="profile-image">
```

## About Facial Emotion Analysis

This landing page is designed for a service that uses AI to analyze facial expressions and emotions in public service settings. The technology helps:

- Measure citizen satisfaction with public services
- Identify areas for improvement in service delivery
- Provide data-driven insights for better decision making
- Enhance the overall citizen experience

## License

MIT

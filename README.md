# Katalyst LABS - Business Website

A modern, responsive website for a software development business specializing in solutions for small businesses.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll-based animations and interactions
- **Contact Form**: Functional contact form with validation
- **Fast Loading**: Optimized CSS and JavaScript for performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
katalyst/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript interactions
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- Primary gradient: `#667eea` to `#764ba2`
- Background: Light gradients and white sections
- Text: Dark grays for readability

### Sections
1. **Hero Section**: Eye-catching intro with animated graphics
2. **Services**: Four key service offerings with icons
3. **About**: Company information with animated statistics
4. **Contact**: Contact information and functional form
5. **Footer**: Links and social media

### Animations
- Floating elements in hero section
- Scroll-based reveals for content
- Hover effects on cards and buttons
- Morphing shapes and orbital animations
- Counter animations for statistics

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: <480px

## 🚀 Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - works with static hosting

## 🌐 Deployment

This website is configured for automated deployment to Absolute Hosting via GitHub Actions.

### Automated Deployment Setup

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your website to Absolute Hosting whenever you push changes to the `main` branch.

#### Initial Setup Steps:

1. **Get FTP Credentials from Absolute Hosting:**
   - Log in to your Solid Control Panel at Absolute Hosting
   - Navigate to "Hosting Space Menu" → "FTP Accounts"
   - Create or note your FTP account username and password
   - Find your FTP server address (usually `ftp.yourdomain.co.za` or similar)

2. **Configure GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret** and add:
     - `FTP_SERVER`: Your FTP server address (e.g., `ftp.yourdomain.co.za`)
     - `FTP_USERNAME`: Your FTP account username
     - `FTP_PASSWORD`: Your FTP account password

3. **Adjust Server Directory (if needed):**
   - Open `.github/workflows/deploy.yml`
   - The default `server-dir` is set to `/public_html/`
   - If your hosting uses a different directory (like `/www/`, `/htdocs/`, etc.), update line 17

4. **Deploy:**
   - Push any change to the `main` branch, or
   - Go to **Actions** tab in GitHub and manually trigger the workflow

#### Manual Deployment

If you prefer to deploy manually via FTP:
- Use an FTP client (FileZilla, WinSCP, etc.)
- Upload all files: `index.html`, `styles.css`, `script.js`
- Upload to your web root directory (usually `/public_html/` or `/www/`)

### Other Hosting Options

This website can also be deployed to:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3**: Static website hosting

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Animated success/error notifications
- Professional styling
- Responsive layout
- **PHP backend integration** - Uses your hosting's email service

### Form Setup

The contact form uses a PHP script (`contact.php`) that runs on your hosting server to send emails. This is more reliable than third-party services and uses your existing hosting.

**Configuration:**

1. The PHP file is located at `public/contact.php` and will be deployed with your site
2. Update the recipient email in `contact.php` (line 40):
   ```php
   $to = 'info@katalystlabs.co.za'; // Change this to your email
   ```
3. Make sure your hosting supports PHP (most shared hosting does, including Absolute Hosting)
4. The form will automatically submit to `/contact.php` when deployed

**How it works:**
- Form submits to `contact.php` via POST request
- PHP validates the form data
- PHP sends email using the server's `mail()` function
- Returns JSON response to the frontend
- Frontend shows success/error notification

**Note:** If emails aren't being delivered, check with your hosting provider about:
- PHP `mail()` function configuration
- SMTP settings (may need to configure)
- Spam filter settings

## 🎯 Customization

### Content Updates
- Edit `index.html` for text content
- Update company information, services, and contact details
- Modify the hero section messaging

### Styling Changes
- Adjust colors in `styles.css` (search for color values)
- Modify the gradient schemes
- Update typography and spacing

### Functionality
- Add more interactive features in `script.js`
- Integrate with analytics (Google Analytics, etc.)
- Connect contact form to backend services

## 📈 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags (can be added)
- Alt text for images (implement for actual images)
- Fast loading times
- Mobile-friendly design

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (limited support)

## 📄 License

This project is open source and available under the MIT License.

---

**Katalyst LABS** - Building the future, one line of code at a time. 🚀

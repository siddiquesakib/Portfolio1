# Portfolio Website - Setup Instructions

## 📝 Important: Update Your Personal Information

Before running the project, please update the following file with your personal information:

**File: `src/data/portfolioData.js`**

Update the following sections:

1. **Personal Info** - Name, designation, email, phone, location, etc.
2. **Social Links** - GitHub, LinkedIn, Twitter, Facebook URLs
3. **About Me** - Introduction, programming journey, work style, hobbies
4. **Skills** - Update skill levels and add/remove skills
5. **Education** - Your educational background
6. **Experience** - Your professional experience (or leave empty if none)
7. **Projects** - Add your actual projects with details

## 📸 Add Your Images

Place the following images in the `public` folder:

1. **profile.jpg** - Your professional photo
2. **resume.pdf** - Your resume file (optional, can be added later)
3. **projects/** folder - Add project screenshots/images

## 🚀 Running the Project

1. Install dependencies (already done):

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Colors

The portfolio uses a purple-pink gradient theme. To change colors:

- Update Tailwind classes in components (e.g., `from-purple-400 to-pink-600`)
- Modify `tailwind.config.js` for theme customization

### Content

- All content is in `src/data/portfolioData.js`
- Easy to update without touching component code

### Animations

- Built with Framer Motion
- Adjust animation timings in component files

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready to deploy to Netlify, Vercel, or any static hosting service.

## 🌟 Features Included

✅ Responsive Navigation Bar
✅ Hero Section with Photo & Social Links
✅ Resume Download Button
✅ About Me Section
✅ Skills with Visual Bars
✅ Education Timeline
✅ Experience Section
✅ Projects with Modal Details
✅ Contact Form & Information
✅ Elegant Footer
✅ Smooth Animations with Framer Motion
✅ Fully Responsive Design
✅ Modern, Eye-Catching UI

## 📱 Responsive Design

The portfolio is fully responsive and tested on:

- Desktop (1920px and above)
- Laptop (1366px - 1920px)
- Tablet (768px - 1365px)
- Mobile (320px - 767px)

Enjoy your new portfolio! 🎉

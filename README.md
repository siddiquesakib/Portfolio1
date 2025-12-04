# 👨‍💻 Professional Developer Portfolio

A modern, responsive, and interactive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. This project showcases skills, experience, and projects in a visually appealing single-page application.

![Portfolio Preview](public/projects/preview.jpg)
_(Note: Add a screenshot of your portfolio here and name it `preview.jpg` in `public/projects/`)_

## 🚀 Live Demo

[**View Live Demo**](https://your-portfolio-url.vercel.app)
_(Replace with your actual deployment URL)_

## ✨ Features

- **🎨 Modern UI/UX**: Clean, dark-themed design with glassmorphism effects and smooth gradients.
- **📱 Fully Responsive**: Optimized for all devices - desktops, laptops, tablets, and mobile phones.
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds.
- **🎬 Smooth Animations**: Engaging entrance and scroll animations using Framer Motion.
- **🧩 Component-Based**: Modular architecture for easy maintenance and scalability.
- **📝 Dynamic Content**: All data (personal info, projects, skills) is separated in a data file for easy updates.
- **🖼️ Project Showcase**: Detailed project cards with modal views for in-depth descriptions.
- **📧 Contact Form**: Integrated contact section with social media links.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router](https://reactrouter.com/)

## 📂 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── ...
├── data/            # Data files for easy content management
│   └── portfolioData.js
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/siddiquesakib/Portfolio1.git
   cd Portfolio1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📝 Customization

1. **Update Personal Info**:

   - Open `src/data/portfolioData.js`.
   - Update the `personalInfo`, `skills`, `education`, `experience`, and `projects` objects with your details.

2. **Add Images**:

   - Place your profile picture in the `public/` folder (e.g., `profile.jpg`).
   - Add project screenshots to `public/projects/`.
   - Update the image paths in `portfolioData.js`.

3. **Change Colors**:
   - The theme uses Tailwind CSS classes. You can modify the color scheme in the component files (look for `from-purple-400 to-pink-600` gradients) or configure `tailwind.config.js`.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and sign up/login.
3. Click "Add New Project" and import your repository.
4. Vercel will detect Vite and set the build settings automatically.
5. Click "Deploy".

### Netlify

1. Drag and drop the `dist` folder (created after running `npm run build`) to Netlify Drop.
2. Or connect your GitHub repository for continuous deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

**Mohammad Siddique Sakib**

- GitHub: [@siddiquesakib](https://github.com/siddiquesakib)
- LinkedIn: [Mohammad Siddique Sakib](https://www.linkedin.com/in/mohammad-siddique-sakib/)

---

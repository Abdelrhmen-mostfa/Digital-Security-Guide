<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  
  # مؤسسة نون - الأمن الرقمي ومخاطر السوشيال ميديا
  
  ### دليلك الشامل لحماية حساباتك من الاختراق والابتزاز الإلكتروني
  
  [![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?logo=typescript)](https://www.typescriptlang.org)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-purple?logo=vite)](https://vitejs.dev)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
</div>

---

## 📋 Project Overview

**Noon Foundation - Digital Security & Social Media Awareness** is an interactive educational web application designed to raise awareness about digital security threats and social media risks. The platform provides comprehensive guidance on protecting personal accounts from hacking and electronic blackmail, featuring interactive tools, real-world examples, and practical security recommendations.

Built with modern React and TypeScript, this single-page application delivers an engaging, Arabic-first user experience with smooth animations and responsive design tailored for users across all devices.

---

## ✨ Core Features

### 🔐 **Interactive Security Tools**
- **Password Strength Checker** - Real-time password analysis with visual feedback (Arabic interface)
- **Interactive Quiz System** - Test your knowledge with immediate feedback
- **Platform-Specific Guides** - Detailed protection strategies for 6 major social media platforms

### 📚 **Educational Content Sections**
- **Digital Security Importance** - Statistics and facts about millions of breaches annually
- **Common Hacking Methods** - In-depth coverage of:
  - Phishing attacks (التصيد الاحتيالي)
  - Social engineering (الهندسة الاجتماعية)
  - Fake links and malicious apps
  - Brute force password attacks
- **Platform Protection Guides** - Specific security measures for:
  - Facebook, Instagram, WhatsApp
  - TikTok, Telegram, Snapchat

### 🎨 **User Experience Features**
- **Smooth Animations** - Motion-powered fade-in effects and hover interactions
- **Modal Popups** - Detailed information panels for each topic
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **RTL Support** - Native Arabic language support with Cairo font
- **Interactive Navigation** - Smooth scrolling and sticky header

### 🧭 **Multi-Page Structure**
- **Home Page** (`index.html`) - Main educational content
- **About Page** (`about-noon.html`) - Foundation information

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI Component Library |
| TypeScript | 5.8.2 | Type Safety & Development |
| Vite | 6.2.0 | Build Tool & Dev Server |

### **Styling & Design**
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 4.1.14 | Utility-First Styling |
| Motion | 12.23.24 | Animations & Transitions |
| Lucide React | 0.546.0 | Icon Library |
| Cairo Font | - | Arabic Typography |

### **Backend & Utilities**
| Technology | Version | Purpose |
|------------|---------|---------|
| Express | 4.21.2 | Backend Framework (optional) |
| dotenv | 17.2.3 | Environment Variables |
| @google/genai | ^1.29.0 | Google AI Integration |

### **Development Tools**
| Technology | Version | Purpose |
|------------|---------|---------|
| @vitejs/plugin-react | 5.0.4 | React Plugin for Vite |
| @tailwindcss/vite | 4.1.14 | Tailwind Vite Plugin |
| tsx | 4.21.0 | TypeScript Execution |
| @types/node | 22.14.0 | Node.js Type Definitions |
| @types/express | 4.17.21 | Express Type Definitions |

---

## 📁 Project Structure

```
/workspace/
├── 📄 index.html                 # Main HTML entry point (Arabic RTL)
├── 📄 about-noon.html            # About page (in /public)
├── 📦 package.json               # Dependencies & scripts
├── 📘 tsconfig.json              # TypeScript configuration
├── ⚡ vite.config.ts             # Vite build configuration
├── 📖 README.md                  # Project documentation
├── 🔒 .env.local                 # Environment variables (API keys)
│
├── 📂 public/                    # Static assets
│   ├── logo.png                  # Foundation logo
│   ├── founder.jpg               # Founder image
│   └── WhatsApp Image...jpeg     # Additional images
│
└── 📂 src/                       # Source code
    ├── 🎨 App.tsx                # Main application component (946 lines)
    ├── 🚀 main.tsx               # React entry point
    └── 💅 index.css              # Global styles & Tailwind setup
```

### Key Directories Explained

| Directory/File | Description |
|----------------|-------------|
| `src/App.tsx` | Core application logic with all components, state management, and UI sections |
| `src/main.tsx` | React DOM rendering entry point with StrictMode |
| `src/index.css` | Tailwind CSS imports and custom theme configuration |
| `public/` | Static assets served directly (images, additional HTML pages) |
| `vite.config.ts` | Build configuration with React plugin, Tailwind, and environment setup |

---

## 🔑 Key Components & Modules

### **Main Application (`App.tsx`)**

The application is structured as a single-page React component with multiple sections:

#### **State Management**
```typescript
- password, strength, feedback     // Password checker state
- quizState                        // Interactive quiz state
- activeFaq                        // FAQ accordion state
- activeModal                      // Modal popup controller
```

#### **Core Functions**
- **`checkPassword()`** - Analyzes password strength based on length, character types, and special characters
- **`getStrengthColor()`** - Returns appropriate color class for password strength indicator
- **`closeModal()`** - Handles modal dismissal

#### **Major Sections (10 Total)**
1. **Header** - Sticky navigation with logo and bilingual links
2. **Hero Section** - Animated introduction with call-to-action
3. **Importance Section** - 3 cards explaining digital security importance
4. **Platforms Section** - Grid of 6 major social media platforms
5. **Hacking Methods Section** - 5 common attack vectors explained
6. **Phishing & Social Engineering** - Side-by-side comparison
7. **Protection Tips Section** - Comprehensive security checklist
8. **Password Checker Tool** - Interactive password strength tester
9. **FAQ Section** - Expandable frequently asked questions
10. **Contact/Footer Section** - Emergency contacts and resources

#### **Animation Component**
```typescript
<FadeIn /> // Custom motion component for scroll-triggered animations
```

#### **Modal System**
Dynamic modal popups for:
- Platform-specific hacking/protection details
- Statistical information
- Detailed explanations of attack methods

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000, host 0.0.0.0) |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove build artifacts (`rm -rf dist`) |
| `npm run lint` | TypeScript type checking (`tsc --noEmit`) |

---

## 🌐 Deployment

### **Build for Production**
```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

### **Hosting Options**
- **Vercel** - Automatic deployments from Git
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Static hosting via GitHub
- **Any static host** - Upload `dist/` contents

---

## 📝 Current State & Roadmap

### ✅ **Completed Features**
- [x] Full responsive design with RTL (Arabic) support
- [x] Interactive password strength checker
- [x] 6 social media platform guides (Facebook, Instagram, WhatsApp, TikTok, Telegram, Snapchat)
- [x] 5 hacking method explanations with defense strategies
- [x] Modal popup system for detailed content
- [x] Smooth scroll animations using Motion library
- [x] FAQ accordion section
- [x] Multi-page structure (Home + About)
- [x] Professional UI with Tailwind CSS
- [x] TypeScript type safety throughout

### 🚧 **Next Steps / Future Enhancements**

#### **Short-Term**
- [ ] Add more interactive quizzes and assessments
- [ ] Implement user progress tracking
- [ ] Add video tutorials for complex topics
- [ ] Expand platform coverage (Twitter/X, LinkedIn, YouTube)
- [ ] Add downloadable security checklists (PDF)

#### **Medium-Term**
- [ ] User authentication and personalized dashboards
- [ ] Breach notification system integration
- [ ] Password generator tool
- [ ] Two-factor authentication setup guides with screenshots
- [ ] Community forum or discussion section

#### **Long-Term**
- [ ] Multi-language support (English, French, etc.)
- [ ] Mobile app version (React Native)
- [ ] AI-powered security advisor chatbot
- [ ] Regular security news updates section
- [ ] Partnership integration with security tool providers

#### **Technical Improvements**
- [ ] Unit and integration tests (Jest, React Testing Library)
- [ ] Accessibility audit (WCAG compliance)
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] SEO optimization for better discoverability
- [ ] Analytics integration for user behavior insights

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact & Support

**مؤسسة نون (Noon Foundation)**

For emergencies or support:
- Check the contact section in the application
- Visit the About page for foundation details

---

## 📄 License

This project is part of Noon Foundation's educational initiative. Please refer to the foundation's guidelines for usage rights.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons by [Lucide](https://lucide.dev)
- Animations powered by [Motion](https://motion.dev)
- Font: [Cairo](https://fonts.google.com/specimen/Cairo) for Arabic typography

---

<div align="center">
  <strong>مؤسسة نون - حماية حساباتك تبدأ بالوعي</strong>
  <br />
  <em>Noon Foundation - Protecting Your Accounts Starts with Awareness</em>
</div>

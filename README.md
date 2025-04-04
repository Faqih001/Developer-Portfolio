
# Developer Portfolio

## 📌 Project Overview

This is a professional **Developer Portfolio** website built to showcase skills, projects, education, and experience. The site features a clean, modern design with responsive layouts and interactive elements to create an engaging user experience.

## 🚀 Live Demo

[Click here to view the project](https://lovable.dev/projects/dcc7552c-3e0a-4090-a142-b0a95a208337) *(Visit the Lovable project URL)*

## 🛠️ Technologies Used

- **Vite** - Fast build tool for modern web applications
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed JavaScript for better development experience
- **Shadcn/UI** - Beautiful and customizable UI components
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Navigation and routing for React applications
- **Tanstack React Query** - Data fetching and state management
- **Supabase** - Backend infrastructure and serverless functions
- **Resend** - Email service integration for contact form

## 📂 Project Structure

```
📁 project-root/
 ┣ 📂 src/
 ┃ ┣ 📂 components/       # Reusable UI components
 ┃ ┃ ┣ 📂 ui/             # Shadcn UI components
 ┃ ┃ ┣ 📜 AboutSection.tsx # About me section
 ┃ ┃ ┣ 📜 ContactSection.tsx # Contact form section
 ┃ ┃ ┣ 📜 EducationSection.tsx # Education timeline
 ┃ ┃ ┣ 📜 HeroSection.tsx # Main hero banner
 ┃ ┃ ┣ 📜 NavBar.tsx      # Navigation bar
 ┃ ┃ ┣ 📜 ProjectsSection.tsx # Portfolio projects
 ┃ ┃ ┣ 📜 SkillsSection.tsx # Skills showcase
 ┃ ┃ ┗ 📜 Footer.tsx      # Page footer
 ┃ ┣ 📂 pages/            # Page components
 ┃ ┃ ┣ 📜 Index.tsx       # Home page
 ┃ ┃ ┗ 📜 NotFound.tsx    # 404 page
 ┃ ┣ 📂 hooks/            # Custom React hooks
 ┃ ┣ 📂 lib/              # Utility libraries
 ┃ ┣ 📂 integrations/     # Third-party integrations
 ┃ ┃ ┗ 📂 supabase/       # Supabase client and types
 ┃ ┣ 📜 main.tsx          # Entry point
 ┃ ┗ 📜 App.tsx           # Root component
 ┣ 📂 supabase/           # Supabase configuration
 ┃ ┗ 📂 functions/        # Edge Functions
 ┃   ┗ 📂 send-contact-email/ # Contact form email sender
 ┣ 📜 index.html          # Main HTML file
 ┣ 📜 package.json        # Dependencies & scripts
 ┣ 📜 tailwind.config.ts  # Tailwind configuration
 ┗ 📜 README.md           # Project documentation
```

## 📋 Features

✅ **Responsive Design** - Fully responsive layout that works on all devices  
✅ **Modern UI/UX** - Clean, professional design with animations and transitions  
✅ **Dark/Light Mode** - Color scheme adapts to user preferences  
✅ **Interactive Sections**:  
   - Hero section with call-to-action
   - About section with professional summary
   - Skills showcase with visual indicators
   - Project portfolio with filterable gallery
   - Education timeline
   - Contact form with email integration  
✅ **Email Integration** - Contact form submissions sent directly to email  
✅ **Performance Optimized** - Fast loading and rendering  
✅ **SEO Friendly** - Proper meta tags and semantic HTML  

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Environment Setup

Create a `.env` file in the root directory with the following variables:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

### 4️⃣ Start Development Server

```sh
npm run dev
```

This will start the development server and open the app in your browser.

### 5️⃣ Build for Production

```sh
npm run build
```

## 🌎 Deployment

You can deploy this project using Lovable or other platforms like:

### Using Lovable
Simply open [Lovable](https://lovable.dev/projects/dcc7552c-3e0a-4090-a142-b0a95a208337) and click on Share -> Publish.

### Other Platforms
- **Vercel**
- **Netlify**
- **GitHub Pages**

## 🔄 Supabase Edge Functions

This project uses Supabase Edge Functions for server-side operations:

### Contact Form Email Sender
- Processes contact form submissions
- Validates input data
- Sends formatted emails using Resend
- Implements CORS and error handling

## 🎨 UI Components

The portfolio uses the shadcn/ui component library with customized Tailwind themes:

- **Color Scheme**: Custom primary, secondary, and accent colors
- **Typography**: Professional font hierarchy
- **Components**: Buttons, forms, cards, and more with consistent styling
- **Animations**: Subtle animations and transitions for better UX

## 🔗 Meta Tags & SEO

The project includes Open Graph and Twitter meta tags for better social sharing:

```html
<meta property="og:title" content="Developer Portfolio" />
<meta property="og:description" content="Lovable Generated Project" />
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@fakii_ahmad" />
```

## 📱 Contact

For inquiries, reach out via:

- Email: [fakiiahmad001@gmail.com](mailto:fakiiahmad001@gmail.com)
- Twitter: [@fakii_ahmad](https://twitter.com/fakii_ahmad)

## 📝 Custom Domain

To connect a custom domain to this Lovable project:

1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the instructions to configure DNS settings

For more information, visit: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added a new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---
✨ *Built with ❤️ by [Your Name]* *(Replace with your name)*

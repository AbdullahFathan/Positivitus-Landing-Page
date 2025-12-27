# Positivus Landing Page

A modern, responsive landing page for a digital marketing agency, built with React and Tailwind CSS. The design focuses on bold typography, a vibrant color palette (Green & Dark Theme), and interactive elements.

🚀 **Live Demo:** [https://positivitus-landing-page.vercel.app/](https://positivitus-landing-page.vercel.app/)

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
- **Modern UI/UX**: Clean aesthetic with a dark theme footer, custom shaped avatars, and smooth transitions.
- **Interactive Carousel**: powered by **Swiper.js**, featuring:
  - Custom star-shaped pagination indicators.
  - Centered slide layout.
  - Custom navigation arrows.
- **Dynamic Components**:
  - Reusable `CardTeams` with custom CSS masks.
  - Responsive `ContactUsForm` with radio buttons and styled inputs.
  - Accordion-style sections (if applicable/planned).
- **SEO Friendly**: Semantic HTML structure.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome)
- **Carousel**: [Swiper.js](https://swiperjs.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository** (if applicable) or download the source code.
2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized static files in the `dist` directory.

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── fragment/        # Component fragments
│   ├── components/  # Reusable UI components (CardTeams, Caraousel, etc.)
│   └── section/     # Page sections (Hero, Services, Teams, Testimonial, Contact, Footer)
├── App.jsx          # Main application component
├── index.css        # Global styles and Tailwind imports
└── main.jsx         # Entry point
```

## 🎨 Design Reference

This project is based on the **Positivus** landing page design, featuring a distinct green (`#B9FF66`) and black color scheme.

**Design Credits:**
Huge thanks to **Olga Averchenko** for the free design template on the Figma Community!
👉 [View original design](https://www.figma.com/community/file/1230604708032389430)

---

# Futuristic Portfolio - Irshad Ahamed

A high-performance, futuristic portfolio website built with Next.js, React Three Fiber, and Framer Motion.

## Features

- **Futuristic Design**: Glassmorphism, neon glows, and dynamic gradients.
- **3D Interactive Background**: Floating geometric shapes with mouse parallax effect.
- **Smooth Animations**: Powered by Framer Motion.
- **Theme Support**: Dark/Light mode toggle.
- **Responsive**: Fully responsive layout for all devices.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: CSS Modules + Global CSS Variables
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber (@react-three/drei)
- **Icons**: Lucide React

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) heavily to view the site.

## Customization

- **Colors**: Edit `src/app/globals.css` CSS variables (`--primary`, `--secondary`, etc.).
- **Content**: Update text in `src/components/Hero.tsx` and `src/app/page.tsx`.
- **3D Scene**: Modify shapes in `src/components/ThreeBackground.tsx`.

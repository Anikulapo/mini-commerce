# 🛍️ Mini-Commerce

A modern, responsive eCommerce clothing store built with **Next.js App Router**, **TypeScript**, **Zustand**, **React Query**, and **Tailwind CSS**. Features include category filtering, product detail pages, persistent shopping cart, and more.

---

## 🚀 Features

- ✅ Fully responsive UI with Tailwind CSS
- ✅ Product listing with dynamic categories & filters (Men, Women, Gym, etc.)
- ✅ Product detail pages with dynamic routing (`[slug]`)
- ✅ Cart system with:
  - Add/remove/update quantity
  - Persisted cart (localStorage via Zustand persist)
  - Size selection
- ✅ Checkout modal with summary and order confirmation
- ✅ Loading and error states using React Query
- ✅ Toast notifications with React Hot Toast

---

## 🛠 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query](https://tanstack.com/query)
- [React Hot Toast](https://react-hot-toast.com/)
- [Lucide Icons](https://lucide.dev/)
- [Next Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)

---

## 🧱 Folder Structure
Src/
│
├── app/ # App router structure
│ └── product/[slug] # Dynamic route for product detail
│
├── components/ # Reusable components (e.g. ClothCard, Footer)
├── content/ # Home page sections (OnSale, TopRated, etc.)
├── data/ # JSON product data (used by React Query)
├── hooks/ # React Query hooks (useProducts)
├── store/ # Zustand stores (productStore, cartStore, category)
├── types/ # TypeScript interfaces
├── public/ # Static assets and product images
└── styles/ # Tailwind CSS (globals.css)

Always show details

Copy code
from pathlib import Path

readme_content = """
# 🛍️ Mini-Commerce

**Mini-Commerce** is a modern, responsive eCommerce web application built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Zustand**. It provides a clean shopping experience with dynamic product pages, category filtering, a persistent cart system, and seamless state management.

---

## 🌟 Features

- ⚡ **Fast and responsive** UI with Tailwind CSS
- 🧠 **State management** using Zustand with localStorage persistence
- 📦 **Dynamic routing** for product detail pages via Next.js App Router
- 🛒 **Shopping cart** with:
  - Quantity control
  - Size selection
  - Local storage persistence
- 🔍 **Category & gender filtering** (Men, Women, Gym, etc.)
- ⭐ **Top Rated & On Sale** product sections
- 🌐 **SEO ready** (title, meta)
- ☁️ **Data fetching** via React Query from local JSON
- 🔔 **User feedback** with React Hot Toast
- 📷 **Image optimization** with Next.js `<Image />`

---

## 🧰 Tech Stack

| Technology      | Description                         |
|------------------|-------------------------------------|
| [Next.js 14](https://nextjs.org/) | Fullstack React Framework |
| [TypeScript](https://www.typescriptlang.org/) | Static type checking |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Zustand](https://github.com/pmndrs/zustand) | Lightweight state management |
| [React Query](https://tanstack.com/query/latest) | Data fetching and caching |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [Lucide Icons](https://lucide.dev/) | Elegant icon set |

---

## 📁 Folder Structure

src/
│
├── app/
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Homepage
│ └── product/[slug]/page.tsx # Product Detail Page
│
├── components/ # Reusable UI components
├── content/ # Homepage content sections
├── hooks/ # Custom hooks (React Query)
├── store/ # Zustand stores
├── types/ # TypeScript types
├── data/ # products.json file
├── public/ # Static assets (images)
└── styles/ # Global styles

Always show details

Copy code

---

## 🛠️ Getting Started

### 📦 Install Dependencies

```bash
# Clone the repository
git clone https://github.com/yourusername/mini-commerce.git
cd mini-commerce

# Install packages
yarn install
# or
npm install
🚀 Start Development Server
bash
Always show details

Copy code
yarn dev
# or
npm run dev
Then visit: http://localhost:3000


🐞 Initial product list is empty in dynamic routes unless visited Home first
Cause: Product state is populated on home load.
Fix Suggestion: Hydrate product store globally or SSR.


MIT License — Feel free to use, fork, and modify.

👤 Author
Tobi Alasoadura
Frontend Developer
LinkedIn • GitHub

# ✈️ Gopal Tours & Travels

### *A Premium Full Stack Travel Booking Platform*

> A modern, responsive travel website with an integrated Admin CMS for managing tours, hotels, flights, enquiries, branding, and customer interactions — built with Next.js, Supabase, TypeScript, and Tailwind CSS.

---

## 🌍 Overview

**Gopal Tours & Travels** is a production-ready travel booking platform designed for travel agencies to showcase tour packages, hotels, flights, and exclusive offers while managing customer enquiries through a dedicated admin dashboard.

The platform combines a luxury travel-themed UI with a powerful backend, allowing administrators to manage branding, upload logos, monitor enquiries in real time, and maintain website content without modifying code.

---

## ✨ Key Features

### Public Website

* 🏔️ Premium responsive landing page
* 🎒 Dynamic Tours showcase
* 🏨 Hotel booking enquiry system
* ✈️ Flight enquiry system
* 🎁 Exclusive offers section
* 📱 Fully mobile responsive
* 💬 Direct WhatsApp trip planning
* ⚡ Fast server-side rendering with Next.js

### Admin Dashboard

* 🔐 Secure admin authentication
* 📊 Live enquiry management
* 🧳 Tour enquiry dashboard
* 🏨 Hotel enquiry dashboard
* ✈️ Flight enquiry dashboard
* 🖼️ Upload high-resolution company logo
* 🏢 Website branding & contact management
* 📈 Real-time statistics overview

---

## 🛠️ Tech Stack

| Category            | Technology                       |
| ------------------- | -------------------------------- |
| **Frontend**        | Next.js 15, React 19, TypeScript |
| **Styling**         | Tailwind CSS                     |
| **Backend**         | Supabase                         |
| **Database**        | PostgreSQL                       |
| **Authentication**  | Supabase Auth                    |
| **Storage**         | Supabase Storage                 |
| **Deployment**      | Vercel                           |
| **Version Control** | Git & GitHub                     |

---

## 🧩 Architecture

```text
User
 │
 ▼
Next.js Frontend (React + TypeScript)
 │
 ├── Tours
 ├── Hotels
 ├── Flights
 ├── Offers
 └── Enquiry Forms
 │
 ▼
Supabase Backend
 │
 ├── PostgreSQL Database
 ├── Authentication
 ├── Storage (Logo Upload)
 └── Real-time CRUD
 │
 ▼
Admin Dashboard
```

---

## 📂 Project Structure

```text
gopal-tours-travels/
│
├── app/
│   ├── (public)/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── home/
│   ├── enquiry/
│   ├── flights/
│   ├── hotels/
│   ├── tours/
│   └── layout/
│
├── lib/
│   └── supabase.ts
│
├── public/
│
└── data/
```

---

## 🗄️ Database Modules

The application uses PostgreSQL tables in Supabase.

| Table              | Purpose                          |
| ------------------ | -------------------------------- |
| `tour_enquiries`   | Customer tour enquiries          |
| `hotel_enquiries`  | Hotel booking enquiries          |
| `flight_enquiries` | Flight enquiries                 |
| `site_settings`    | Branding, logo & company details |
| `tours`            | Dynamic tour packages            |
| `hotels`           | Hotel listings                   |
| `offers`           | Promotional offers               |

---

## 📋 Enquiry System

### 🏨 Hotel Enquiry

* Customer Details
* Destination
* Check-in / Check-out
* Adults & Children
* Budget
* Extra Requests

### 🎒 Tour Enquiry

* Traveller Details
* Package Selection
* Travel Date
* Number of Travellers
* Requirements

### ✈️ Flight Enquiry

* Origin & Destination
* Departure Date
* Travel Class
* Travellers
* Special Requests

All enquiries are instantly stored in **Supabase** and displayed inside the admin dashboard.

---

## 🎨 Admin CMS

Administrators can manage the website without touching code.

**Available controls:**

* Upload Company Logo (PNG/JPG)
* Update Company Name
* Edit Tagline
* Contact Information
* Google Maps Link
* Social Media Links
* View Customer Enquiries
* Website Statistics

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gopal-tours-travels.git
cd gopal-tours-travels
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🌐 Deployment

The project is deployed using **Vercel** with automatic CI/CD from GitHub.

Every push to the **main** branch automatically triggers a production deployment.

---

## 📸 Highlights

* Luxury travel-inspired UI
* Responsive across all devices
* Dynamic branding system
* Real-time enquiry management
* Supabase Storage integration
* Production-ready architecture

---

## 🔮 Future Enhancements

* Dynamic custom tour builder
* Online payment integration
* Hotel availability management
* Customer booking history
* Email notifications
* Multi-language support
* SEO optimization
* Analytics dashboard

---

## 👨‍💻 Developer

**Shikhar Chaturvedi**

Full Stack Developer | Next.js • React • TypeScript • Supabase

---

## 📄 License

This project is developed for **Gopal Tours & Travels** as a commercial client website. Unauthorized redistribution or commercial reuse is prohibited.

---

### ⭐ If you like this project, consider giving it a star on GitHub!

# Zeo.ai - AI Medical Assistant

This is a modern medical assistant application powered by D-ID's AI video agent technology. It provides live video consultations with an AI doctor that can analyze symptoms, provide medication information, and offer medical guidance.

## 🚀 Tech Stack

*   **Framework**: [React](https://react.dev/) (TypeScript) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex gesture-based animations and scroll interactions.
*   **AI Video Agent**: [D-ID](https://www.d-id.com/) for interactive AI avatar video calls.
*   **Icons**: Custom SVGs and Lucide React.

## ✨ Key Features

### 1. Live Video Consultations
*   **AI Doctor**: Interactive video calls with an AI medical assistant
*   **Natural Conversations**: Talk to the AI like a real doctor
*   **Visual Analysis**: Show symptoms via camera for diagnosis

### 2. Medical Intelligence
*   **500+ Conditions**: Comprehensive medical knowledge base
*   **Medicine Information**: Dosage, precautions, and side effects
*   **Symptom-Based Diagnosis**: AI analyzes your symptoms
*   **Memory Enabled**: Remembers your medical history

### 3. Secure & Private
*   **HIPAA Compliant**: Military-grade data protection
*   **24/7 Available**: Round-the-clock medical assistance
*   **Instant Response**: Get answers in seconds

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- D-ID account (get credentials from [studio.d-id.com](https://studio.d-id.com/))

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Adaline-T2-main
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    
    Copy the `.env.example` file to `.env`:
    ```bash
    cp .env.example .env
    ```
    
    Then edit `.env` and add your D-ID credentials:
    ```env
    VITE_DID_CLIENT_KEY=your_client_key_here
    VITE_DID_AGENT_ID=your_agent_id_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

5.  **Build for Production**
    ```bash
    npm run build
    ```

## 🔐 D-ID Configuration

### Getting D-ID Credentials

1. Sign up at [studio.d-id.com](https://studio.d-id.com/)
2. Create a new agent
3. Copy your **Client Key** and **Agent ID**
4. Add them to your `.env` file

### Whitelisting Domains

For the D-ID agent to work in production, you must whitelist your deployment domain:

1. Go to your D-ID dashboard
2. Navigate to your agent settings
3. Add your domains to the **Allowed Domains** list:
   - `https://yourdomain.com`
   - `https://*.vercel.app` (for Vercel deployments)

### Deployment on Vercel

When deploying to Vercel, make sure to add the environment variables:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add:
   - `VITE_DID_CLIENT_KEY`
   - `VITE_DID_AGENT_ID`

## 📸 UI Features

*   **Animated Hero Section**: Interactive 3x2 grid boxes with hover effects
*   **Dotted Background**: Biscuit-colored (#f5f1e6) dotted pattern
*   **Responsive Design**: Fully responsive across all devices
*   **Smooth Animations**: Framer Motion powered transitions

## 🏗️ Project Structure

```
src/
├── components/       # Reusable UI components
├── sections/         # Page sections (Hero, Stats, etc.)
├── pages/           # Full page components
├── utils/           # Utility functions (D-ID loader, etc.)
└── App.tsx          # Main app component
```

## 📝 License

This project is for demonstration purposes.

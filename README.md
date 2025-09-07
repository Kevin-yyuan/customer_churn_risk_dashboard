# Customer Churn Risk Dashboard

## Project Goal

This project is a clean, user-friendly, single-page web dashboard that displays at-risk clients from a simulated data source. It aims to make a model's insights accessible to a non-technical sales manager, demonstrating skills in frontend development, data presentation, and UI/UX design.

### A Modern Approach to Interactivity

This project uses a modern, declarative approach to building user interfaces thanks to **React** and **Next.js**.

While one could build this dashboard using traditional JavaScript—manually fetching data, creating HTML elements in a loop, and attaching event listeners—this project leverages React's architecture for a more efficient and scalable solution.

**How it Works:**

- **Declarative UI:** Instead of telling the browser *how* to draw the page step-by-step, we simply *declare* what the UI should look like based on the current data. For example, we tell React: "For each client in this array, render a table row."
- **Component-Based:** The UI is broken down into reusable components (`StatCard`, `ClientTable`, `ChurnRiskChart`). This keeps the code organized and easy to maintain.
- **State Management:** When you sort or filter the data, you aren't manually deleting and re-creating the HTML. Instead, you update a "state" variable that holds the data. React automatically detects this change and efficiently re-renders only the parts of the page that need to be updated.

This component-based, state-driven model is what makes the dashboard scalable. To connect to a real database or API, we would simply swap the local `data.json` import with a data-fetching hook (like `useEffect` or a library like SWR). The UI components would not need to change, as they are already designed to render whatever data they are given.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (using React)
- **UI Library:** [Material-UI (MUI)](https://mui.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (integrated with MUI)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation & Running

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Kevin-yyuan/customer_churn_risk_dashboard.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd customer_churn_risk_dashboard
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

import ReactDOM from "react-dom/client";
import React from "react";
import App from './App';
import "./firebase/config";
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Saeloun blog" />);

// During an update, there is no need to pass the container again
root.render(<App name="Saeloun testimonials" />);

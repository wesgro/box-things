import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./global.css";
const container = document.getElementById("app")!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

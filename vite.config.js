import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
    root: "src",
    content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    build: {
        outDir: "../dist",
    },
    server: { host: "127.0.0.1" },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});

import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
    content: ["*"],
    server: { host: "127.0.0.1" },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});

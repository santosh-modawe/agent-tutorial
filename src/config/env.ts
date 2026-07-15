import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT || 3000,
    model: process.env.OLLAMA_MODEL!,
    host: process.env.OLLAMA_HOST!
};
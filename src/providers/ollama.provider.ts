import env = require("../config/env");
import type chat = require("../types/chat");
import ollama from "ollama";
import ToolRegistry from "../tools/toolRegistry";
import AiProvider from "./AiProvider";
export class OllamaProvider implements AiProvider {
     constructor() {
    }
    async chat(prompt: string, messages:chat.Message []): Promise<chat.ChatResponse> {
        messages.unshift({
            role: "system",
            content: prompt
        });
        const response = await ollama.chat({
            model: env.env.model,
            messages,
            tools: ToolRegistry.getSchemas(),
        });

       return {
        content: response.message.content,
      };
    }
}
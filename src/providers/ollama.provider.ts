import env = require("../config/env");
import type chat = require("../types/chat");
import ollama from "ollama";
import type AiProvider = require("./AiProvider");
import ToolRegistry from "../tools/toolRegistry";
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
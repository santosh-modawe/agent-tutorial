import env = require("../config/env");
import type chat = require("../types/chat");
import ollama, { Tool } from "ollama";
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
            tools: ToolRegistry.getSchemas() as Tool[],
            
        });

     
       return {
        content: response.message.content,
        toolCalls: (response.message.tool_calls ?? []).map(tc => ({
        name: tc.function.name,
        arguments: tc.function.arguments
        }))
      };
    }
}
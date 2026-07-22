import env = require("../config/env");
import type chat = require("../types/chat");
import ollama, { Tool } from "ollama";
import ToolRegistry from "../tools/toolRegistry";
import AiProvider from "./AiProvider";
export class OllamaProvider implements AiProvider {
     constructor() {
    }
    async chat(prompt: string, messages:chat.Message []): Promise<chat.ChatResponse> {
      
        let allmessages = [
            {role: "system", content: prompt},
            ...messages
        ].map((m: any) => ({
            ...m,
            tool_calls: m.tool_calls?.map((tc: any) => ({
                id: tc.id,
                function: { name: tc.name, arguments: tc.arguments }
            }))
        }));
        const response = await ollama.chat({
            model: env.env.model,
            messages: allmessages,
            tools: ToolRegistry.getSchemas() as Tool[],
            
        });

     
       return {
        content: response.message.content,
        toolCalls: (response.message.tool_calls ?? []).map(tc => ({
        id: (tc as any).id,
        name: tc.function.name,
        arguments: tc.function.arguments
        }))
      };
    }
}
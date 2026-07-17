import {ApiService} from "../services/api.service";
import { OllamaProvider } from "../providers/ollama.provider";
import searchPrompt from "../prompts/searchPrompt";
import systemPrompt from "../prompts/systemPrompt";
import  AiProvider  from "../providers/AiProvider";
import ToolRegistry  from "../tools/toolRegistry";
import type chat = require("../types/chat");
export default async function vehicleAgent(messages: chat.Message[]) {
    let apiService = new ApiService(getProvider());
    let response = await apiService.chat([systemPrompt, searchPrompt].join("\n\n"), messages);
    console.log("Received response:", response);
    let resparse= JSON.parse(response.content);
    console.log("Parsed response:", resparse);
   let vres= await ToolRegistry.getTool(resparse.name).execute(resparse.arguments);
   console.log(vres);
   messages.push({ "role":"tool",name:resparse.name, content:JSON.stringify(vres)});
    let llmfinal= await apiService.chat([systemPrompt, searchPrompt].join("\n\n"), messages);
     return llmfinal;
}

function getProvider(): AiProvider {
    let providerName = process.env.AI_PROVIDER || "ollama";
    switch (providerName) {
        case "ollama":
            return new OllamaProvider();
        default:
            throw new Error(`Unknown AI provider: ${providerName}`);
    }
}

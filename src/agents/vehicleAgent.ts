import {ApiService} from "../services/api.service";
import { OllamaProvider } from "../providers/ollama.provider";
import searchPrompt from "../prompts/searchPrompt";
import systemPrompt from "../prompts/systemPrompt";
import  AiProvider  from "../providers/AiProvider";
import type chat = require("../types/chat");
import toolRegistry from "../tools/toolRegistry";
import emailPrompt from "../prompts/emailPrompt";

export default async function vehicleAgent(messages: chat.Message[]) {
  // console.log(JSON.stringify(toolRegistry.getSchemas()));
    let apiService = new ApiService(getProvider());
//     let response = await apiService.chat([systemPrompt, searchPrompt].join("\n\n"), messages);
//     console.log("Received response:", response);
//     let resparse= JSON.parse(response.content);
//     let vres= await ToolRegistry?.getTool(resparse.name)?.execute(resparse.arguments);
//    messages.push({ "role":"tool",name:resparse.name, content:JSON.stringify(vres)});
//     let llmfinal= await apiService.chat([systemPrompt, searchPrompt].join("\n\n"), messages);
//      resparse= JSON.parse(llmfinal.content);
//      console.log("Received final response:", resparse);
//      return llmfinal;


     while (true) {

    const response = await apiService.chat([systemPrompt, searchPrompt,emailPrompt].join("\n\n"), messages);

    if (!response.toolCalls?.length) {
       
        return response.content;
        break;
    }

    for (const toolCall of response.toolCalls) {

        const tool = toolRegistry.getTool(toolCall.name);
 
        const result = await tool?.execute(toolCall.arguments);
        console.log(`Executed tool ${toolCall.name} with result:`, result);

        messages.push({
            role: "tool",
            name: toolCall.name,
            content: JSON.stringify(result)
        });
      
    }
}








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

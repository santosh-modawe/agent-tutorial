
import type AiProvider = require("../providers/AiProvider");
import A = require("../providers/AiProvider");
export class ApiService  {
  
   constructor(private provider:AiProvider) {}
   
  chat(prompt: string, messages: any[]): Promise<any> {
    return this.provider.chat(prompt, messages);
  }
  

}


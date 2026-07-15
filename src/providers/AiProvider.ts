import type chat = require("../types/chat");

export default interface AiProvider {
    chat(prompt: string, messages: chat.Message[]): Promise<chat.ChatResponse>;
}
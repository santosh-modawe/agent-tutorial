export type Role = "system" | "user" | "assistant" | "tool";

export interface Message {
    role: Role;
    content: string;
    toolCallId?: string;
    name?: string;
    tool_name?: string;
    tool_calls?: ToolCall[];
}

export interface ChatResponse {
    content: string;
    toolCalls?: ToolCall[];
}

export interface ToolCall {
  id?: string;
  name: string;
  arguments: Record<string, unknown>;
  
}


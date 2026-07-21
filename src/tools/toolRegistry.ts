import {SearchVehicleTool} from './searchVechicle.tool'
import { CompareVehicleTool } from './compareVehicle.tool'; 
import { Tool } from "./tool";
import { EmailTool } from './email.tool';
 class ToolRegistry {

    constructor() {
    
        this.register(new SearchVehicleTool());
        this.register(new CompareVehicleTool())
        this.register(new EmailTool());

    }
    private tools = new Map<string, Tool>();

    register(tool: Tool) {
        this.tools.set(tool.name, tool);
    }
    
    getTool(name: string): Tool | undefined {
        return this.tools.get(name);
    }

    getSchemas(): any[] {
    return Array.from(this.tools.values()).map(tool =>
        tool.toSchema()
    );
}

}
export default new ToolRegistry();
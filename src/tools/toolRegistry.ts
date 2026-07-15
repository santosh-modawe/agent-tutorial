import searchVechicleTool = require("./searchVechicle.tool");
import { Tool } from "./tool";
 class ToolRegistry {

    constructor() {
    
        this.register(new searchVechicleTool.SearchVehicleTool());

    }
    private tools = new Map<string, Tool>();

    register(tool: Tool) {
        this.tools.set(tool.name, tool);
    }
    
    getTool(name: string): Tool | undefined {
        return this.tools.get(name);
    }

    getSchemas() {
    return Array.from(this.tools.values()).map(tool =>
        tool.toSchema()
    );
}

}
export default new ToolRegistry();
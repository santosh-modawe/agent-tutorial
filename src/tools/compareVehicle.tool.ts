import { Tool } from "./tool"

export class CompareVehicleTool implements Tool {
 name="compareVehicle";
 description="compare vehicle details";
 parameters={
    type:'object',
    properties:{
        vehicledata:{
            type:'array',
            items:{
                type:'object'
            }
        }
    }
};
  async execute(args: Record<string, unknown>) {

    const vehicles = args.vehicledata;

     if (!Array.isArray(vehicles) || vehicles.length === 0) {
    return {};
  }

  const keys = Object.keys(vehicles[0]);

  const comparison:any = {};

  for (const key of keys) {
    comparison[key] = vehicles.map(vehicle => ({
      id: vehicle.id,
      name: `${vehicle.brand} ${vehicle.model}`,
      value: vehicle[key]
    }));
  }

  return comparison;
      args.vehicledata

 }

toSchema() {
   

    return {

        type:"function",

        function:{

            name:this.name,

            description:this.description,

            parameters:this.parameters

        }

    }

}


}

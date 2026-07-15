
import { Tool } from "./tool";
export class SearchVehicleTool implements Tool {
    name = "searchVehicle";
   description = "Search vehicles using filters.";
  parameters = {
    type: "object",
    properties: {
      bodyType: {
        type: "string",
      },
      maxPrice: {
        type: "number",
      },
    },
  };

  async execute(args: Record<string, unknown>) {
    
    const vehicles = [
  {
    id: 1,
    brand: "Tata",
    model: "Nexon",
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    price: 1200000,
    year: 2023,
    kilometers: 15000,
    owner: 1,
    city: "Pune",
    color: "White"
  },
  {
    id: 2,
    brand: "Mahindra",
    model: "XUV 3XO",
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    price: 1450000,
    year: 2024,
    kilometers: 8000,
    owner: 1,
    city: "Mumbai",
    color: "Black"
  },
  {
    id: 3,
    brand: "Hyundai",
    model: "Creta",
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 1490000,
    year: 2023,
    kilometers: 12000,
    owner: 1,
    city: "Pune",
    color: "Grey"
  },
  {
    id: 4,
    brand: "Maruti Suzuki",
    model: "Brezza",
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    price: 1090000,
    year: 2022,
    kilometers: 22000,
    owner: 2,
    city: "Nashik",
    color: "Red"
  },
  {
    id: 5,
    brand: "Kia",
    model: "Sonet",
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    price: 1380000,
    year: 2023,
    kilometers: 10000,
    owner: 1,
    city: "Pune",
    color: "Blue"
  },
  {
    id: 6,
    brand: "Honda",
    model: "City",
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 1350000,
    year: 2022,
    kilometers: 25000,
    owner: 1,
    city: "Mumbai",
    color: "Silver"
  },
  {
    id: 7,
    brand: "Hyundai",
    model: "Verna",
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    price: 1420000,
    year: 2024,
    kilometers: 5000,
    owner: 1,
    city: "Pune",
    color: "White"
  },
  {
    id: 8,
    brand: "Toyota",
    model: "Innova Crysta",
    bodyType: "MUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    price: 2400000,
    year: 2023,
    kilometers: 18000,
    owner: 1,
    city: "Nagpur",
    color: "Brown"
  },
  {
    id: 9,
    brand: "Mahindra",
    model: "Scorpio N",
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    price: 1980000,
    year: 2024,
    kilometers: 7000,
    owner: 1,
    city: "Pune",
    color: "Black"
  },
  {
    id: 10,
    brand: "Maruti Suzuki",
    model: "Swift",
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    price: 780000,
    year: 2022,
    kilometers: 30000,
    owner: 2,
    city: "Pune",
    color: "Blue"
  }
];


   return vehicles.filter(vehicle => {
      if (args.bodyType && vehicle.bodyType.toLowerCase() !== (args.bodyType as string).toLowerCase()
          
      ) {
        return false;
      }
      return true;
    }).filter(vehicle => {
      if (args.maxPrice && vehicle.price > (args.maxPrice as number)) {
        return false;
      }
      return true;
    }).filter(vehicle => {
        if(args.fuelType && vehicle.fuelType.toLowerCase() !== (args.fuelType as string).toLowerCase()){
            return false;
        }
        return true;
    }).filter(vehicle => {
        if(args.transmission && vehicle.transmission.toLowerCase() !== (args.transmission as string).toLowerCase()){
            return false;
        }
        return true;
      }).filter(vehicle => {
        if(args.city && vehicle.city.toLowerCase() !== (args.city as string).toLowerCase()){
            return false;
        }
        return true;
      }).filter(vehicle => {
        if(args.owner && vehicle.owner !== (args.owner as number)){
            return false;
        }
        return true;
      });

     

     
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
   



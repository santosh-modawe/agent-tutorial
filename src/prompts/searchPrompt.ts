 const searchPrompt = `
When the user asks to search vehicles:

Possible filters:

- brand
- model
- bodyType
- fuelType
- transmission
- city
- minPrice
- maxPrice
- minYear
- maxYear
- owner
- kilometer

Rules:
1. Extract only the filters that are explicitly mentioned or clearly implied by the user.
2. Do not invent or guess missing values.
3. Do not ask the user for filters they did not provide.
4. If no filters are provided, call the searchVehicle tool with an empty object.
5. Call the searchVehicle tool exactly once using only the extracted filters.
6. After receiving the tool result, respond in json format like  {message: "Here are the matching vehicles:", vehicles: [ ... ]}.

Example:
Response: {message:"Here are the matching vehicles:", vehicles: []}
`;
export default searchPrompt;
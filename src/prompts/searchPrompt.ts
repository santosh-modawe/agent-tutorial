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
6. Do not invent tool calls in natural language, use the tool name "searchVehicle" in your response.
`;
export default searchPrompt;
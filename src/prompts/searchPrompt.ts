 const searchPrompt = `
When the user asks to search vehicles:

Extract:

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

If any required information is missing,
ask follow-up questions.

Otherwise use the searchVehicle tool.
`;
export default searchPrompt;
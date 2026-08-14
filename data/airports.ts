export type Airport = {
    name: string;
    municipality: string;
    iso_country: string;
    iata_code: string;
  };
  
  import airportData from "./airports.json";
  
  export const airports = airportData as Airport[];
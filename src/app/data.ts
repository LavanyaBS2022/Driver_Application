export interface OrderData {
  customers: {
    name: string;
    address: string;
    lat: number; // Latitude
    lon: number; // Longitude
    orderItems: { name: string; quantity: number }[];
  }[];
}

export const staticData: { [key: string]: OrderData } = {
  "111111": {
    customers: [
      {
        name: "ANAND KUMAR G",
        address: "123 Main Street, City A",
        lat: 12.971598, 
        lon: 77.594566, 
        orderItems: [
          { name: "TM-1000", quantity: 2 },
          { name: "SHUBAM-1000", quantity: 1 }
        ]
      },
      {
        name: "V ANIL KUMAR",
        address: "456 Oak Avenue, City A",
        lat: 12.960049, 
        lon: 77.581080, 
        orderItems: [
          { name: "TM-1000", quantity: 3 },
          { name: "SHUBAM-1000", quantity: 1 }
        ]
      }
    ]
  },
  "222222": {
    customers: [
      {
        name: "SARASWATHAMMA",
        address: "789 Elm Road, City B",
        lat: 13.022381, 
        lon: 77.569041, 
        orderItems: [
          { name: "TM-1000", quantity: 2 },
          { name: "SHUBAM-1000", quantity: 1 }
        ]
      },
      {
        name: "MANJUNATH GR",
        address: "1010 Pine Street, City B",
        lat: 13.016595, 
        lon: 77.564766, 
        orderItems: [
          { name: "TM-1000", quantity: 3 },
          { name: "SHUBAM-1000", quantity: 1 }
        ]
      }
    ]
  }
};

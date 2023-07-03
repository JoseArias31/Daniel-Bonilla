import { client1, client2, client3, client4, client5, client6  } from './clientQuotes.js';


export function generateResponse(client) {
    // Generates ramdon prices, times and ubications to fix the divice
    const totalPrice = `$${Math.floor(Math.random() * 100) + 50}`;
    const timeToFix = `${Math.floor(Math.random() * 5) + 1} days`;
    const pickUpLocation = ['Local Store at Downtown', 'Home', 'Office'][Math.floor(Math.random() * 3)];


     // This is an answer object with the value of the clients generated in the first module. 
  const response = {
    firstName: client.firstName,
    issue: client.description,
    phoneNumber: client.phoneNumber,
    email: client.email,
    totalPrice: totalPrice,
    timeToFix: timeToFix,
    pickUp: pickUpLocation
  };

  // Return answer object
  return response;
}

// This variable calls a function to generate the answer stored
export const response1 = generateResponse(client1);
export const response2 = generateResponse(client2);
export const response3 = generateResponse(client3);
export const response4 = generateResponse(client4);
export const response5 = generateResponse(client5);
export const response6 = generateResponse(client6);







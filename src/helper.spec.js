import { double, rectangleArea, hello,isMature, iteratesOne } from "./helper.js"
import { generateResponse } from './responseToQuote.js'; 

// Personal WebSite Tests

describe('generateResponse', () => {
  let client;

  beforeEach(() => {
    
    client = {
      firstName: 'John',
      description: 'The device freezes after a few minutes of use.',
      phoneNumber: '+1 555-123-4567',
      email: 'john.smith@example.com',
    };
  });

  it('should have the correct firstName', () => {
    const response = generateResponse(client);
    expect(response.firstName).toEqual('John');
  });

  it('should have the correct issue', () => {
    const response = generateResponse(client);
    expect(response.issue).toEqual('The device freezes after a few minutes of use.');
  });

  it('should have the correct phoneNumber', () => {
    const response = generateResponse(client);
    expect(response.phoneNumber).toEqual('+1 555-123-4567');
  });

  it('should have the correct email', () => {
    const response = generateResponse(client);
    expect(response.email).toEqual('john.smith@example.com');
  });

  it('should have a totalPrice with a numeric value', () => {
    const response = generateResponse(client);
    expect(response.totalPrice).toBeDefined();
    expect(typeof response.totalPrice).toBe('string');
  });

  it('should have a timeToFix with a numeric value', () => {
    const response = generateResponse(client);
    expect(response.timeToFix).toBeDefined();
    expect(typeof response.timeToFix).toBe('string');
  });

  it('should have a pickUp with a valid location', () => {
    const response = generateResponse(client);
    expect(response.pickUp).toBeDefined();
    expect(['Local Store', 'Home', 'Office']).toContain(response.pickUp);
  });
});

// Course Tests


describe("Ability to double provided number", () => {
    test("should double the provided number", () => {
        expect(double(10)).toEqual(20)
    })

    test("Should double negative number", () => {
        expect(double(-25)).toEqual(-50)
    })
})

describe("Rectangle area calculations", () => {
    it("Should calculate the area of rectangle with given height and width", () => {
        expect(rectangleArea(20, 15)).toEqual(300)
    })

    it("Should calculate the area of rectangle with given height and width of a house", () => {
        expect(rectangleArea(100, 10)).toEqual(1000)
    })
})

describe("Ability to call my name", () => {
   let name = "Daniel Bonilla"
    test("Should call my name", () => {
    expect(hello(name).toString("Hello, Daniel Bonilla"))
   })
})

describe("Able to party", () => {
   test("Should be able to access to the party", () => {
    expect(isMature(29)).toEqual(true)
   })
 })

 describe("Ability to iterate to given array", () => {
    it("should add 1 to given array", () => {
        expect(iteratesOne([6,7,8])).toEqual([7,8,9])
    })
    it("should output [null] if the array has an empty element", () => {
        expect(iteratesOne([""])).toEqual([null]);
      });
  })
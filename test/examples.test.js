import { describe, it, expect, test } from "vitest";
import { longestString, isPrime, shippingCost } from "../src/examples";

describe("examples.longestString", () => {
  test("returns a longest string", () => {
    const longest = longestString("pikachu", "snorlax");
    expect(longest).toBe("pikachu");
  })

  it("returns the first string when both are of equal length", () => {
    expect(longestString("ball", "tape")).toBe("ball");
  })

  it("handles empty strings", () => {
    expect(longestString("", "cart")).toBe("cart");
    expect(longestString("ball", "")).toBe("ball");
    expect(longestString("", "")).toBe("");
  })

  it("ignore the whitespaces", () => {
    expect(longestString("   abc   ", "world")).toBe("world");
  })
})

describe("examples.isPrime", () => {
  it("returns truth/truthy for small prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
  })

  it("returns false/falsy for small prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(4)).toBeFalsy();
  })

  it("matches result in an array using toEqual", () => {
    const arr = [2, 3, 4, 5];
    const results = arr.map(isPrime);
    expect(results).toEqual([true, true, false, true]);
  })

  it("detects prime within a filtered test", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const primes = nums.filter(isPrime);
    expect(primes).toContain(7);
    expect(primes).not.toContain(6);
  })

  it("throws an error when passed a non-number", () => {
    const badCall = ()=> isPrime('abc')
    expect(badCall).toThrow()
  })



})

describe("examples.isPrime", ()=>{
    it('treats 0 and 1 as non-prime and 2 as prime', () => {
      expect(isPrime(0)).toBeFalsy()
      expect(isPrime(1)).toBeFalsy()
      expect(isPrime(2)).toBeTruthy()
    })

    it('returns false for all even numbers > 2', () => {
      expect(isPrime(4)).toBe(false)
      expect(isPrime(6)).toBe(false)
      expect(isPrime(50)).toBe(false)
      expect(isPrime(100)).toBe(false)
    })

    it('identifies common primes', () => {
      expect(isPrime(3)).toBeTruthy()
      expect(isPrime(5)).toBeTruthy()
    })

    it('returns false for perfect squarees reliably', () => {
      expect(isPrime(36)).toBeFalsy()
      expect(isPrime(49)).toBeFalsy()
      expect(isPrime(64)).toBeFalsy()
    })

    it('returns false for non-integers', () => {
      expect(isPrime(4.5)).toBeFalsy()
    })

    it('throws an error for non-number inputs', () => {
      const badCall = () => isPrime('abc')
      expect(badCall).toThrow()
    })
})

describe("examples.shippingCost", ()=>{

  // it('returns a number', () => {
  //   expect(shippingCost(2)).toBeTypeOf('number')
  // })

  it.each([
    {weight: 0.5, expected: 3.99},
    {weight: 4, expected: 5.99},
    {weight: 8, expected: 8.99},
    {weight: 78, expected: 14.99}
  ])('charges $expected for weight $weight', ({weight, expected})=>{
    expect(shippingCost(weight)).toBe(expected)
  })

  it.each([
    {weight: 1, expected: 3.99},
    {weight: 5, expected: 5.99},
    {weight: 20, expected: 8.99},
  ])('charges $expected for weight $weight at boundries', ({weight, expected})=>{
    expect(shippingCost(weight)).toBe(expected)
  })

  it('applies FREESHIPPING coupon exactly', ()=>{
    expect(shippingCost(1, "FREESHIPPING")).toBe(0)
    expect(shippingCost(30, "FREESHIPPING")).toBe(0)
  })

  it('ignores non-matching coupons', () => {
    expect(shippingCost(1, 'freeshipping')).toBe(3.99)
    expect(shippingCost(1, 'Nothing')).toBe(3.99)
    expect(shippingCost(1)).toBe(3.99)
  })

  it('throws an error for invalid weights', ()=> {
    expect(()=>shippingCost('abc')).toThrow() 
    expect(()=>shippingCost(0)).toThrow() 
    expect(()=>shippingCost(-5)).toThrow() 
    expect(()=>shippingCost('2')).toThrow() 
  })

  it('throws when coupon is not a string', ()=>{
    expect(()=> shippingCost(1, 123)).toThrow()
    expect(()=> shippingCost(1, null)).toThrow()
  })

})





import { createCard } from "../src/createCard";
import { describe, it, expect } from "vitest";
describe("createCard", ()=>{
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

    it('returns an array', ()=>{
        const cards = createCard({suits, values})
        expect(Array.isArray(cards)).toBe(true)
    })
    
    it('create deck of 52 cards', ()=>{
        const cards = createCard({suits, values})
        expect(cards).toHaveLength(52)
    })

    it('throw an error if suits or values are not standard lengths', ()=>{
        expect(()=>createCard('Hearts')).toThrow()
        expect(()=>createCard('13')).toThrow()
    })

    it('throw an error if suits or values are not an arrays', ()=>{
        expect(()=>createCard(''))
    })


})


const { updatedFighters } = require('./index.js');
const fightersCheck = require('./updatedFighters.json')
const fs = require('fs')
const data = fs.readFileSync('./updatedFighters.json')

describe('The updated Fighters json file', () => {
    it(`should contain json`, () => {
        expect(fightersCheck).toEqual(updatedFighters)
    })
    it(`should return a JSON object`, () => {
        expect(typeof data).toBe('object');
    })
})

describe(`The Fighters Array`, () => {
    it(`should have Bhumi at index 2`, () =>{
        expect(updatedFighters[2].first_name).toEqual('Bhumi')
    })
    it(`should be 4 elements in length`, () => {
        expect(updatedFighters.length).toEqual(4)
    })
    it('does not contain Dido', () => {
            const expected = [{
                "first_name":"Dido",
                "last_name":"Breckinridge",
                "id":5,
                "powerLevel":3
                }];

          expect(data).toEqual(expect.not.arrayContaining(expected)
          );
        });
      });


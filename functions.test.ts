const {shuffleArray} = require('./utils')

const namesArr = ['ayan','maggie','tien','stuart','mom']
describe('shuffleArray should', () => {
    test('should run', () => {
        expect(2).toBe(2)
    })
    test('not equal the same values', () => {
        expect(shuffleArray).not.toEqual(namesArr)
    })

    test('both arrays are same length', () =>{
        expect(shuffleArray(namesArr).length).toBe(namesArr.length)
    })
})
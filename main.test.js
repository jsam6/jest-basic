const functions = require('./main')

test('Addition Then Error test' , () => {
    const num1 = 2
    const num2 = 2

    expect( functions.addition(num1, num2)).toBe(4) 

    
    expect( functions.error ).toThrow(Error);


    expect(functions.objectTest() ).toEqual({ status: 'success', data: 'hello world'});
})

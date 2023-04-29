
import { getRandomNumberFact } from './getRandomNumberFact';
import { getData } from './getRandomNumberFactService';


jest.mock('./usePrueba');
test("should return a valid response", async () => {
    jest.fn().mockReturnValueOnce({text: 'millonarios'});

    const numberFact = await getRandomNumberFact();
    console.log(numberFact);
    expect(numberFact.text).toBe('test-pass');
})
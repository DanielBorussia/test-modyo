
import { getRandomNumberFact } from './getRandomNumberFact';
import { getData } from './usePrueba';


jest.mock('./usePrueba');
test("should return a valid response", async () => {
    jest.fn().mockReturnValueOnce({text: 'millonarios'});

    const data = await getRandomNumberFact();
    console.log(data.text);
    expect(data.text).toBe('test-pass');
})
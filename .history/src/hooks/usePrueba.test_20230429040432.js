
import { getRandomNumberFact } from './getRandomNumberFact';
import { getRandomNumberFactService } from './getRandomNumberFactService';


jest.mock('./getRandomNumberFactService');
test("should return a valid response", async () => {
    getRandomNumberFactService.mockReturnValueOnce({
       text: 'BVB',
    });

    const numberFact = await getRandomNumberFact();
    console.log(numberFact);
    expect(numberFact.text).toBe('test-pass');
})
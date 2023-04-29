
import { getRandomNumberFact } from './getRandomNumberFact';
import { getRandomNumberFactService } from './getRandomNumberFactService';


jest.mock('./getRandomNumberFactService');
test("should return a valid response", async () => {
    getRandomNumberFactService.mockReturnValueOnce({
       text: 'test-pass',
    });

    const numberFact = await getRandomNumberFact();
    expect(numberFact.text).toBe('test-pass');
})
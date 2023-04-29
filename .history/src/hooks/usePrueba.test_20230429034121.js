
import { getData } from './usePrueba';


jest.mock('node-fetch');
test("should return a valid response", async () => {
    jest.fn().mockReturnValueOnce({text: ''});

    const data = await getData();
    console.log(data.text);
    expect(data.text).toBe('test-pass');
})
const fetch = require("node-fetch");
import { getData } from './usePrueba';


jest.mock('node-fetch');
test("should return a valid response", async () => {
    fetch.mockReturnValueOnce({
        json: () => 
            Promise.resolve({
                text: 'text-pass',
            })
    });

    const data = await getData();
    console.log(data.text);
    expect(data.text).toBe('test-pass');
})
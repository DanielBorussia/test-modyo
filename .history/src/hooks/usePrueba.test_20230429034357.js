
import { getData } from './usePrueba';


jest.mock('./usePrueba');
test("should return a valid response", async () => {
    jest.fn().mockReturnValueOnce({text: 'millonarios'});

    const data = await getData();
    console.log(data.text);
    expect(data.text).toBe('test-pass');
})
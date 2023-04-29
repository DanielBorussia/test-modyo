import { getData } from './usePrueba';


jest.mock('node-fetch');
test("should return a valid response", async () => {
    jest.fn().mockReturnValueOnce({
        json: () => Promise.resolve({
            url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg",
            title: 'Bird'
        })
    });

    const data = await getData();
    console.log(data.text);
    expect(data.text).toBe('test-pass');
})
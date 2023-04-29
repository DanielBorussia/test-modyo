import { getData } from './usePrueba';

jest.mock('node-fecth');
test("should return a valid response", async () => {
    getData.mockReturnValueOnce({
        json: () => Promise.resolve({
            url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg",
            title: 'Bird'
        })
    });

    const data = await getData();
    expect(data.text).toBe('test-pass');
})

export const getRandomNumberFactService = async () => {
    try{
        const response = await fetch('http://numbersapi.com/random/year?json');
        const data = await response.json();
        //const mainData = data.map((card) => card.fields.image);

        return data;
    }catch (e){
        return e;
    }
}

export const getData = async () => {
    try{
        const response = await fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10');
        const data = await response.json();
        const mainData = data.map((card) => card.fields.image);

        return mainData;
    }catch (e){
        return e;
    }
}
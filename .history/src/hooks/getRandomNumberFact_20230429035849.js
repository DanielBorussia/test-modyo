import { getRandomNumberFactService } from "./getRandomNumberFactService";

export const getRandomNumberFact = async () => {
    console.log(getRandomNumberFactService);
    const randomNumberFact = await getRandomNumberFactService();
    return randomNumberFact;
}
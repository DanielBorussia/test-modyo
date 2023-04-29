import { getRandomNumberFactService } from "./getRandomNumberFactService";

export const getRandomNumberFact = async () => {
    const randomNumberFact = await getRandomNumberFactService();
    return randomNumberFact;
}
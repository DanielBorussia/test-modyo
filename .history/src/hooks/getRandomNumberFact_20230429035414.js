import { getData } from "./getRandomNumberFactService";

export const getRandomNumberFact = async () => {
    const randomNumberFact = await getData();
    return randomNumberFact;
}
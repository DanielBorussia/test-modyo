import { getData } from "./usePrueba";

export const getRandomNumberFact = async () => {
    const randomNumberFact = await getData();
    return randomNumberFact;
}
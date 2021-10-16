import { useContext } from "react";
import { MealsContext } from "../context/MealsProvider";

const useMeals = () => {
    return useContext(MealsContext);
}

export default useMeals;
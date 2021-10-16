import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext();

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState({});
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=> res.json())
        .then(data=>setMeals(data));
    },[]);
    return(
        <MealsContext.Provider value={meals}>
            {children}
        </MealsContext.Provider>
    );
}

export default MealsProvider;
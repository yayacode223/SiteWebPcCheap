import { createContext, useContext, useEffect, useState } from "react";
import DashBoardServices from "../services/DashBoardServices";
const DashBoardContext = createContext();

export const DashBoardProvider = ({children}) => {
    const [stat, setStat] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStat();
    }, [])

    const fetchStat =  async () => {
        try{
            setLoading(true);
            const data = await DashBoardServices.getStat();
            setStat(data)
        } catch(error){
            console.error('erreur lors du chargement des statistique: '+error);
        }

        setLoading(false)
    }

    return (
        <DashBoardContext.Provider value={{stat, loading}} > 
            {children}
        </DashBoardContext.Provider>
    )
}

export const useDashBoard = () => useContext(DashBoardContext);
import { NavLink } from "react-router-dom";

type props = {
    name: string;
    description: string;
    path: string;
}

export default function AlgorithmCard({name, description, path}: props){
    
    return(
        <NavLink to={path}>
            <div className="bg-primary flex flex-col w-3xs rounded-2xl border-2 border-primary hover:border-primary-highlight">
                <div className="flex flex-row text-xl h-10 items-center justify-center py-3 px-6">
                    <h1><strong>{name}</strong></h1>
                </div>
                <div className="bg-surface flex flex-row h-25 text-justify py-3 px-6 rounded-b-2xl">
                    <p>{description}</p>            
                </div>
            </div>
        </NavLink>
    )
}
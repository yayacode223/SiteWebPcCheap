import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
export default function Items({item,onDelete,onUpdate}){

    const [isEdit, setIsEdit]=useState(false);


    const [newvalue,setNewvalue]=useState(item.title);

    function handleChange(even){
        even.preventDefault();
        const value=even.target.value;
        setNewvalue(value);
    }

    function handleClickUpdate(e){
        e.preventDefault();
        onUpdate(item.id,newvalue);
        setIsEdit(false);
    }
    

    return(
        <>
            {
                isEdit?
                <li className="mb-4">
                    <form className="relative" onSubmit={handleClickUpdate}>
                        <input className="block w-full rounded-md px-4 py-2.5 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]" type="text" onChange={handleChange} value={newvalue}/>
                        <button className="block bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-2xl shadow-blue-200 text-white font-bold rounded-md p-2.5 absolute top-1/2 translate-y-[-50%] right-0" onSubmit={handleClickUpdate}>Modifier</button>
                    </form>
                </li>
                :
                <li className=" relative">
                    <div className="block w-full rounded-md bg-white px-1 py-2.5 border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]" key={item.id}>{item.title}</div>
                
                    <button className="block bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-2xl shadow-blue-200 text-white font-bold rounded-md p-4 absolute top-[45%] translate-y-[-50%] right-[50px] z-1" onClick={()=>setIsEdit(true)}><FaUserEdit /></button>
                    <button className="block bg-red-500 duration-300 ease-in-out hover:bg-red-800 text-[1rem] shadow-2xl shadow-blue-200 text-white font-bold rounded-md p-4 absolute top-[45%] translate-y-[-50%] right-0" onClick={()=>onDelete(item.id)}><FaTrash /></button>
                    
                </li>
            }
        </>
    )
}
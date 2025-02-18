import { useState } from "react"
import Items from './Items'
import { IoAdd } from "react-icons/io5";



export default function TodoApp({features, setFeatures}){
    const [itemTodo, setItemTodo]=useState([]);

    function handleChange(even){
        const value=even.target.value;
        setItemTodo(value);
        
    }

    function handleSubmit(e){
      e.preventDefault();

      if(itemTodo != ""){
        const newValue={
          id:crypto.randomUUID(),
          title:itemTodo,
          completed:false
        }

        
        setFeatures([...features, newValue]);
        setItemTodo('');
      }
        
      
        
    }

    function handleUpdate(id, value){
      const temp=[...features];
      const item=temp.find(item=>item.id===id);
      item.title=value;
      setFeatures(temp);

    }

    function handleDelete(id){
      const temp=features.filter(item=>item.id!==id);
      setFeatures(temp);
    }





    return(
      <div className="w-full h-full">
        <form className="relative"
          onSubmit={handleSubmit}
        >

          <input
          className="block w-[95%] rounded-md px-4 py-2.5 mb-4 outline-none border-none focus:border focus:border-[#4F75FF] border-[1.5px] text-[1rem] focus:shadow-lg shadow-[#acbcf8]" 
            type="text" 
            onChange={handleChange}
            value={itemTodo} />

          <button className="block bg-blue-500 duration-300 ease-in-out hover:bg-blue-800 text-[1rem] shadow-2xl shadow-blue-200 text-white font-bold rounded-full p-4 absolute top-1/2 translate-y-[-50%] right-0"
            onClick={handleSubmit} 
            type="submit">
              <IoAdd />
          </button>

        </form>


      <div className="w-full rounded-md h-auto sm:h-[550px] overflow-y-auto no-scrollbar">
        <ul className="w-full space-y-3">
        {
          features.map(item => (
              <Items 
              key={item.id} 
              item={item} 
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              />
          ))
        }
        </ul>
      </div>

    </div>
    )
}


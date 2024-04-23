import React from 'react'
import { useContext } from 'react';

export const Usercontext=React.createContext({
   todos: [
    {
        id:1,
        todo:"todomsg",
        compleated: false,
    }
   ],
   addtodo:(todo)=>{},
   updatetodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete:(id)=>{},
    
})

export const List=Usercontext.Provider;

export default function Uselist(){
return useContext(Usercontext)
}

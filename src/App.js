
import './App.css';
import Header from './header/Header';
import MainContent from "./maincontent/maincontent";

import {useEffect, useState} from 'react';
import userEvent from "@testing-library/user-event";



const array=[
    {
        nameItems: 'lexa',
        model:'helper'
    },

    {
        nameItems: 'sasha',
        model:'kurator'
    },

    {
        nameItems: 'egor',
        model:'kloun'
    },
    {
        nameItems: 'ruslan',
        model:'kloun'
    },

    {
        nameItems: 'annastasia',
        model:'super-binder'
    },

    {
        nameItems: 'cats',
        model:'adidas'
    },

    ]
;

function App() {

    const [inputValuesSearch, setValue]= useState('');
    const [items, setItems]= useState([]);

    const onItemsSearch=(e)=>{
        const{value}=e.target;
        setValue(value)

        const filter=array.filter(({nameItems})=>(nameItems.toLowerCase().includes(value.toLowerCase())));
        setItems(filter);
        console.log(value)
    }

    useEffect(()=>{
        setTimeout(()=>setItems(array),2000)
    },[])

  return (
    <div className="App">

        <Header
            onChangeValueUser={onItemsSearch}
            inputValueSearch={inputValuesSearch}
        />

        <MainContent arrayblock={items}/>
        {
            items.length===0&&<div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        }

    </div>
  );
}

export default App;

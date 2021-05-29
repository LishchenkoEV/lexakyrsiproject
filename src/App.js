
import './App.css';
import Header from './header/Header';
import MainContent from "./maincontent/maincontent";
import {useEffect, useState} from 'react';
import userEvent from "@testing-library/user-event";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const array=[
    {
        nameItems: 'lexa helper',
        image:'https://sun9-3.userapi.com/impf/c847122/v847122069/df451/AhqZv8PVKXw.jpg?size=960x638&quality=96&sign=17b3d9481bd29a6319729eef3c96288f&type=album',
        price: '1000 доларий'
    },

    {
        nameItems: 'sasha kurator',
        image: 'https://sfedu.ru/files/upload/per_photo/180x240/6/1/per_id_-13748.JPG',
        price: '100 доларий'
    },

    {
        nameItems: 'egor kloun',
        image:'https://sun6-22.userapi.com/s/v1/if1/aflAP_zZSEgsUycgIavUgz2iCKuR3MYEzVo_PH8-WRq_8KvghgrX2BKvT74142XMifoeH-bE.jpg?size=200x0&quality=96&crop=0,230,470,470&ava=1',
        price: '100 доларий'
    },
    {
        nameItems: 'ruslan kloun',
        image:'https://sun9-44.userapi.com/impf/c850536/v850536463/b90a8/T7DaVPVHsu4.jpg?size=1620x2160&quality=96&sign=80ccb05ec4f827ce1c6dafe00a7eb879&type=album',
        price: '100 доларий'
    },

    {
        nameItems: 'annastasia binder',
        image:'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkHO3_T72D3Zys8b6LLxgwy6aKTM5SRkZCeTgDn6uOyic',
        price: '100 доларий'
    }

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
        <Router>
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
        </Router>
    </div>
    
  );
}

export default App;
import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

let socket ;
const LiveChat = () => {
    const search = useLocation();
    const {name, room} = queryString.parse(search);
    

    useEffect( ()=>{
        socket = io("http://localhost:5000");
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default LiveChat;
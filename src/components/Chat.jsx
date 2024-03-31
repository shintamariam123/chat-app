import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MessageBox from "./MessageBox";
import { setChat } from "../REDUX/chatSlice";


function Chat() {

    const location = useLocation();
    const user = location.state;
    const [typeMessage, setTypeMessage] = useState("")
    const [newSocket, setNewSocket] = useState()
    const [id, setUserId] = useState()
    const boxref = useRef(null)
    const dispatch = useDispatch()
    const datared = useSelector(state => state.chatReducer)

    useEffect(() => {

        const socket = io("https://chat-app-server-nm76.onrender.com");
        // const socket = io("https://fitness-tracker-zpqs.onrender.com");
        setNewSocket(socket)

        socket.on("connect", () => {
            setUserId(socket.id)
        });
        console.log(socket);
        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            dispatch(setChat(data))
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            dispatch(setChat(data))
            console.log(data.user, data.message);
        })

        socket.on('sendMessage', (data) => {
            dispatch(setChat(data))
            console.log(data.user, data.message, data.id);
        })

        socket.on('disconnect', () => {
            socket.emit("disconnect", { user })
        })

        socket.on('leave', (data) => {
            dispatch(setChat(data))
            console.log(data.user, data.message);
        })


    }, []);

    const send = () => {
        if (typeMessage != "") {
            newSocket.emit('message', { message: typeMessage, id })
            setTypeMessage("")
        }
    }

    useEffect(() => {
        console.log(datared);
    }, [datared])

    useEffect(() => {
        boxref.current?.lastElementChild?.scrollIntoView()
    }, [datared])

    return (
        <>
            <div
                style={{ height: "100vh", backgroundColor: "black" }}
                className="d-flex justify-content-center align-items-center">
                <div className="box">
                   
                    <div style={{ backgroundColor: '#cece2f', height: '80px' }}>
                        <div className="align-items-center d-flex justify-content-between p-3">
                            <h2 style={{ color: 'white' }}>Chats</h2>
                            <i className="fa-regular fa-comments icon "></i>
                        </div>
                    </div>
                    <div ref={boxref} className="chatarea" style={{ height: "76%" }}>
                        {datared && datared.map((item, index) => (
                            <MessageBox user={user} name={item.user} message={item.message} />
                        ))}
                    </div>
                    <div className="inputbox px-2 py-2 d-flex " style={{ height: "12%", width: "100%" }}>
                        <input onChange={(e) => setTypeMessage(e.target.value)} value={typeMessage} style={{ width: "70%" }} type="text" className="me-2 inp" placeholder="Type your Message" />
                        <button onClick={() => send()} className="button" style={{ width: "30%" }}><i style={{color:'white'}} className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
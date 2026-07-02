import express from "express"
import {WebSocketServer} from "ws"

const app=express();
const port=8000;
const server=app.listen(port,()=>{
  console.log("Server is listening...")
})

const wss=new WebSocketServer({server})
//ws->stream
wss.on('connection',(ws)=>{
  ws.on('message',(data)=>{
console.log("data from client %s: ", data);
ws.send("thanks buddy!")
  })
})
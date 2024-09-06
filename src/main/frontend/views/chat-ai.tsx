import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAIService} from "Frontend/generated/endpoints";

export default function ChatAi() {
    const [question, setQuestion]= useState<string>("");
    const [response, setResponse]= useState<string>("");
    async function sendMessage(){
        const resp=await ChatAIService.chat(question);
        setResponse(resp);
    }
    return(
        <div>


        <div className="p-m">
            <h1>Chat Bot</h1>
            <TextField style={{width:'80%'}} onChange={(e)=>setQuestion(e.target.value)}></TextField>
            <Button onClick={sendMessage}>Send</Button>
        </div>
            {response}
        </div>
    )
}
package com.example.springreactvaddintest2.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
import org.stringtemplate.v4.ST;

@BrowserCallable
@AnonymousAllowed
public class ChatAIService {

    private ChatClient chatClient;

    public ChatAIService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }
    public String chat(String question){
        return  chatClient.prompt()
                .user(question)
                .call().content();
    }

}

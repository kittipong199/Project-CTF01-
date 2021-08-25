package com.art.project.chat.configration;
import com.art.project.chat.handler.ChatWebSocketHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@CrossOrigin(origins = "http://localhost:4200")
@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer{
	
	private final static String CHAT_ENDPOINT = "/chat";

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry webSocketHandlerRegistry) {
        webSocketHandlerRegistry.addHandler(getChatWebSocketHandler(), CHAT_ENDPOINT)
                .setAllowedOrigins("*");
    }

    @Bean
    public WebSocketHandler getChatWebSocketHandler(){
        return new ChatWebSocketHandler();
    }

}

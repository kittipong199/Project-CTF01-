package com.project.chatv1;
// test คือ ชื่อ database

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.project.register.model.User;
import com.project.register.model.UserRepository;


@SpringBootApplication
public class Chatv1Application {
	
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(Chatv1Application.class, args);
	}

	
	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			System.out.println("Test Test");
			User user = new User (001,"Oak", "Test", "byart@gmail.com","Art1111","Art1111");
			userRepository.save(user);
		};
}
}
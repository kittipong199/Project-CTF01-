package com.art.project.register;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.PathContainer.Options;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.art.project.register.modle.UserRepository;
import com.art.project.register.modle.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class RegisterController {

	@Autowired
	UserRepository repository;
	
	
	//Get
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> users = new ArrayList<>();
		
		try {
			repository.findAll().forEach(users::add);
			
			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(users,HttpStatus.OK);
		}catch (Exception e){
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
		Optional<User> userData = repository.findById((int)id);
		
		if (userData.isPresent()) {
			return new ResponseEntity<>(userData.get(), HttpStatus.OK);
			
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping(value = "/users")
	public ResponseEntity<User> postUser(@RequestBody User user){
		
		try {
			User _user = repository.save(new User(user.getId(), user.getfName(), user.getlName(), user.getEmail(), user.getPassword(), user.getConPassword()));
			return new ResponseEntity<>(_user, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
		Optional<User> userData = repository.findById((int) id);
		
		if (userData.isPresent()) {
			User _user = userData.get();
			_user.setId(user.getId());
			_user.setfName(user.getfName());
			_user.setlName(user.getlName());
			_user.setEmail(user.getEmail());
			_user.setPassword(user.getPassword());
			_user.setConPassword(user.getConPassword());
			return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

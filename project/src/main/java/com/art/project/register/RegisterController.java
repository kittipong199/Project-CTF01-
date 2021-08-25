package com.art.project.register;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import com.art.project.register.modle.ResourceNotFoundException;
import com.art.project.register.modle.UserRepository;
import com.art.project.register.modle.User;
import com.art.project.register.modle.UserDetails;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class RegisterController {

	@Autowired
	private UserRepository userRepository;
	
	
	//Get all user
	@GetMapping("/users")
	public List<User> getAllUsers(){
		
		return userRepository.findAll();
		
		
	}
	
	// get employee by id rest api
			@GetMapping("/users/{id}")
			public ResponseEntity<User> getUserById(@PathVariable Integer id) {
				
				User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
						
								return ResponseEntity.ok(user);
			}
	
	// create user rest api
	@PostMapping(value = "/users")
	public User createUser(@RequestBody User user){
		return userRepository.save(user); // แบบเดิม
		
		
////		// Encrypt Password
//	    user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//	    
//
//	    try {
//	      // Create user in database
//	      User user = userRepository.save(user);
//
//	      // Hide password in response
//	      user.setPassword("");
//
//	      return new ResponseEntity<>(user, HttpStatus.CREATED);
//	    } catch (Exception e) {
//	      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
//	    }
//	}
	}
	
							
		
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetails){
		User user = userRepository.findById((int) id).orElseThrow(() -> new ResourceNotFoundException("User not exist with id : "+ id));
		user.setfName(userDetails.getfName());
		user.setlName(userDetails.getlName());
		user.setEmail(userDetails.getEmail());
		user.setPassword(userDetails.getPassword());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
		
	}
	
	@PostMapping(value = "/authenticate")
		  public ResponseEntity<User> authenticate(@RequestBody User user) {

		    try {
		      // Get user by email
		      User user1 = userRepository.findByEmail(user.getEmail());

		      // Compare encrypted password
		      // note:
		      // encoder.matches() - will compare
		      // - raw not-encrypted password (from user request) with
		      // - encrypted password (from database)
		      BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		      if (encoder.matches(user1.getPassword(), user1.getPassword())) {
		        // password matched - Hide password in response
		        user1.setPassword("");
		        return new ResponseEntity<>(user1, HttpStatus.OK);
		      } else {
		        // password not matched - response failed
		        return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		      }

		    } catch (Exception e) {
		      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		    }
		  }
}

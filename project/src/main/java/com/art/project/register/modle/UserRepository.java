package com.art.project.register.modle;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.art.project.register.modle.User;


@Repository
public interface UserRepository  extends JpaRepository<User, Integer>{
	 User findByEmail(String email);
}


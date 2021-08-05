package com.art.project.register.modle;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository  extends CrudRepository<User, Integer>{
	List<User> findByf_name(String f_name);
}


package com.project.register.model;

import org.springframework.data.repository.CrudRepository;
import com.project.register.model.User;

public interface UserRepository  extends CrudRepository<User, Integer>{

}

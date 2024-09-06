package com.example.springreactvaddintest2;

import com.example.springreactvaddintest2.Repositories.CustomerRepository;
import com.example.springreactvaddintest2.entities.Customer;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Dbinit implements ApplicationRunner {
    private CustomerRepository customerRepository;

    public Dbinit(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        for (int i = 0; i <100 ; i++) {
            Customer customer = Customer.builder()
                    .nom("nom"+ i)
                    .email("nom"+ i + "@gmail.com")
                    .build();
            customerRepository.save(customer);
        }

    }
}

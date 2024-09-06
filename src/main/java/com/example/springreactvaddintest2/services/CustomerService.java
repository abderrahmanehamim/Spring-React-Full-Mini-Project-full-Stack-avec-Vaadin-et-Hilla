package com.example.springreactvaddintest2.services;

import com.example.springreactvaddintest2.Repositories.CustomerRepository;
import com.example.springreactvaddintest2.entities.Customer;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import java.util.List;
@BrowserCallable
@AnonymousAllowed

public class CustomerService {
    private  CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }
    public Customer saveCustomer(Customer customer){
        return customerRepository.save(customer);
    }

}

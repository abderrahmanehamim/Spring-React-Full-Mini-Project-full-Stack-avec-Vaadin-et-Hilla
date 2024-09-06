package com.example.springreactvaddintest2.services;

import com.example.springreactvaddintest2.Repositories.CustomerRepository;
import com.example.springreactvaddintest2.entities.Customer;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;
@BrowserCallable
@AnonymousAllowed
public class CustomerCrudService extends CrudRepositoryService<Customer,Long, CustomerRepository> {
}

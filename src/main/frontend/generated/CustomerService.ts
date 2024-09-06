import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Customer_1 from "./com/example/springreactvaddintest2/entities/Customer.js";
import client_1 from "./connect-client.default.js";
async function getAllCustomers_1(init?: EndpointRequestInit_1): Promise<Array<Customer_1>> { return client_1.call("CustomerService", "getAllCustomers", {}, init); }
async function saveCustomer_1(customer: Customer_1, init?: EndpointRequestInit_1): Promise<Customer_1> { return client_1.call("CustomerService", "saveCustomer", { customer }, init); }
export { getAllCustomers_1 as getAllCustomers, saveCustomer_1 as saveCustomer };

import {useEffect, useState} from "react";
import Customer from "Frontend/generated/com/example/springreactvaddintest2/entities/Customer";
import {CustomerService} from "Frontend/generated/endpoints";
import {Grid, GridColumn} from "@vaadin/react-components";


export default function CustomerComponent(){
    const [customers, setCustomers]= useState<Customer[]>([]);
    useEffect(()=>{
        CustomerService.getAllCustomers().then(
            (resp)=>{
                setCustomers(resp);
            }
        );

    },[]);
    return(
        <div>
            <h1> Customers List</h1>
            <Grid items={customers}>
                <GridColumn path="id"></GridColumn>
                <GridColumn path="nom"></GridColumn>
                <GridColumn path="email"></GridColumn>
            </Grid>
        </div>
    )
}
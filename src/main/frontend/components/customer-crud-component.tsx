import {AutoCrud} from "@vaadin/hilla-react-crud";
import {CustomerCrudService} from "Frontend/generated/endpoints";
import CustomerModel from "Frontend/generated/com/example/springreactvaddintest2/entities/CustomerModel";

export default function CustomerCrudComponent() {
  return(
      <AutoCrud service={CustomerCrudService} model={CustomerModel}></AutoCrud>
  )  ;
}
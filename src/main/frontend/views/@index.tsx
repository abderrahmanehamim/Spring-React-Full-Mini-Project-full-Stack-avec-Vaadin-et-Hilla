import CustomerComponent from "Frontend/components/customer-component";
import "../styles/styles.css"
import CustomerCrudComponent from "Frontend/components/customer-crud-component";
export default function index(){
    return(
        <div className="p-m">
            <CustomerCrudComponent></CustomerCrudComponent>
        </div>
    );
}
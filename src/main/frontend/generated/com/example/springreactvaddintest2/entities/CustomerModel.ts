import { _getPropertyModel as _getPropertyModel_1, Email as Email_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Customer_1 from "./Customer.js";
class CustomerModel<T extends Customer_1 = Customer_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(CustomerModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, true, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "java.lang.Long" } }));
    }
    get nom(): StringModel_1 {
        return this[_getPropertyModel_1]("nom", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 4, max: 200 })], meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Email_1()], meta: { javaType: "java.lang.String" } }));
    }
}
export default CustomerModel;

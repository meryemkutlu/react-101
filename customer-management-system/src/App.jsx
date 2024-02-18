import "./App.css";
import { useState } from "react";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import CustomerItem from "./components/CustomerItem/CustomerItem";
import CustomerList from "./components/CustomerList/CustomerList";

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    console.log(customers);
  };

  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default App;

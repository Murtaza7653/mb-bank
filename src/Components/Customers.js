import React, { useEffect, useState } from 'react';
import Customer from './Customer';

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const load = async () => {
            try {
                const response = await fetch('http://localhost/bank-api/api.php');
                const jsonResponse = await response.json();
                setCustomers(jsonResponse);
                // console.log(jsonResponse);
            } catch (error) {
                console.log(error);
            }
        }
        load();
    }, []);
    return (
        <div className="container my-3">
            <h2 className="text-center" style={{color:"#0F0326", textDecoration:"underline"}}>Our Valued Customers</h2>
            <div className="row">
                {customers.map((customer) => {
                    return <div className="col-md-3 d-flex justify-content-center" key={customer.account}>
                        <Customer account={customer.account} name={customer.name} contact={customer.contact} balance={customer.balance} />
                    </div>
                })}
            </div>
        </div>
    )

}
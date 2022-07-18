import axios from 'axios';
import React, { useState } from 'react';

export default function Transfer() {

    // const [sender, setSender] = useState("");
    // const [recipient, setRecipient] = useState("");
    // const [amount, setAmount] = useState("");

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleTransfer = (e) => {
        e.preventDefault();

        if(window.confirm("Confirm transfer?")) {
            axios.post('http://localhost/bank-api/transfer.php', inputs).then(function(response){
        console.log(response.data);
        handleReset();
        alert("Transfer Successful!")
        });
        }
        else {
            alert("Transfer Cancelled.")
        }
    }

    const handleReset = () => {
        document.getElementById("transferForm").reset();
    }

    return (

        <div className='container my-3' style={{minHeight:"76.2vh"}}>
            <h2 className="text-center" style={{ color: "#0F0326", textDecoration:"underline" }}>Funds Transfer</h2>
            <form className='mx-3' id="transferForm" onSubmit={handleTransfer}>
                <div className="mb-3">
                    <label htmlFor="senderaccount" className="form-label">Sender Account Number</label>
                    <input type="number" className="form-control" name="sender" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="recipientaccount" className="form-label">Recipient Account Number</label>
                    <input type="number" className="form-control" name="recipient" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" className="form-control" name="amount" onChange={handleChange} placeholder='Enter Amount (Rs.)' />
                </div>
                <div className="d-grid gap-2" style={{ justifyContent: "center" }}>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#0F0326", borderColor: "#0F0326" }} >Transfer Money</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>

    )

}
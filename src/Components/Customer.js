import React from 'react';
// import { useNavigate } from 'react-router-dom';

export default function Customer(props) {
    // const navigate = useNavigate();
    return (

        <div className="card my-3 shadow-lg bg-white rounded" style={{ width: "15rem", border: "1px solid #0F0326" }}>
            <img src="https://reqres.in/img/faces/6-image.jpg" style={{ borderBottom: "1px solid #0F0326" }} className="card-img-top" alt="customer" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
            </div>
            <ul className="list-group list-group-flush" >
                <li className="list-group-item" style={{ borderBottom: "1px solid #0F0326" }}><strong>Account No.: </strong>{props.account}</li>
                <li className="list-group-item" style={{ borderBottom: "1px solid #0F0326" }}><strong>Contact: </strong>{props.contact}</li>
                <li className="list-group-item"><strong>Balance: </strong>Rs. {Number(props.balance).toLocaleString()}/-</li>
            </ul>
            {/* <div className="card-body d-flex align-items-center justify-content-center">
                <button className="btn btn-outline" style={{ backgroundColor: "#0F0326", color: "white" }} onClick={() => { navigate('/transfer') }}>Transfer</button>
            </div> */}
        </div>

    )

}
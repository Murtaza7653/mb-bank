import React from 'react';
import carousel1 from './images/carousel1.jpg';
import carousel2 from './images/carousel2.jpg';
import carousel3 from './images/carousel3.jpg';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="container my-3">
            <h1 className="text-center my-3" style={{ color: "#0F0326" }}>Welcome to MB Banking Solutions!</h1>
            <h5 className='text-center my-3' style={{ color: "#0F0326" }}>Online Banking at your fingertips.</h5>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="image1" />
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5>Better Accessibility</h5>
                            <p>Operate your account from the comfort of your home.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="image2" />
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5>Faster Payments</h5>
                            <p>Send and receive money, make online payments within minutes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="image3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>High-End Security</h5>
                            <p>We ensure 100% privacy & security of your valuable information.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container my-3' style={{margin: "auto"}}>
                <button style={{display:"inline-block", width: "30%", marginRight:"5%"}} type="button" className="btn btn-outline-primary" onClick={()=>{navigate('/customers')}}>View All Customers</button>
                <button style={{display:"inline-block", width: "30%", marginRight:"5%"}} type="button" className="btn btn-outline-primary" onClick={()=>{navigate('/transfer')}}>Initiate Transfer</button>
                <button style={{display:"inline-block", width: "30%"}} type="button" className="btn btn-outline-primary" onClick={()=>{navigate('/about')}}>About Us</button>
            </div>
        </div>

    )

}
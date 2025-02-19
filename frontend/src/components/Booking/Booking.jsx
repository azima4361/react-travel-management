import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = ({ tour, avgRating }) => {
    const navigate = useNavigate();
    const { price, reviews, id: tourId } = tour; // Assuming tour has an 'id' field

    const [credentials, setCredentials] = useState({
        userId: '01', // Example user ID, replace with actual user ID
        userEmail: 'example@gmail.com', // Replace with actual user email
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            // Send booking data to the server
            await axios.post('http://localhost:5000/api/book', {
                userId: credentials.userId,
                fullName: credentials.fullName,
                phone: credentials.phone,
                guestSize: credentials.guestSize,
                bookAt: credentials.bookAt,
                totalAmount: totalAmount
            });

            navigate("/thank-you");
        } catch (error) {
            console.error('Error creating booking:', error.response ? error.response.data : error);
        }
    };

    return (
        <div className="booking">
            <div className="booking_top d-flex align-items-center justify-content-between"> 
                <h3>${price} <span>/per person</span></h3>
                <span className="tour_rating d-flex align-items-center">
                    <i className="ri-star-s-fill"></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            <div className="booking_form">
                <h5>Information</h5>
                <Form className="booking_info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date" id="bookAt" required onChange={handleChange} />
                        <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange} />
                    </FormGroup>
                    <Button className="w-100 mt-4" type="submit">Book Now</Button>
                </Form>
            </div>

            <div className="booking_bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">${price} <i className="ri-close-line"></i> 1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
};

export default Booking;

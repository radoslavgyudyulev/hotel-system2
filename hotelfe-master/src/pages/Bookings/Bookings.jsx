import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Form from "react-bootstrap/Form";
import { localStorageGet } from "utils/localStorage";
import axios from "axios";
import { useSelector } from "react-redux";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const API_URL = "http://localhost:8000";

const HotelList = () => {
  const [bookings, setBookings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const acessToken = localStorageGet("acessToken");
  const userRole = localStorageGet("roles");

  const config = {
    headers: {
      Authorization: `Bearer ${acessToken}`,
    },
  };


  const fetchBookings = async () => {
    setIsLoading(true);
    const { data, status, statusText } = await axios.get(
      `${API_URL}/api/hotel/get/bookings`,
      config
    );
    if (data && status === 200 && statusText === "OK") {
      setBookings(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings()
  }, [])

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!bookings) {
    return <div>No available bookigs</div>;
  }

  console.log(bookings)

  return (
    <div
      style={{}}
    >
      {bookings.map((booking) => {
        return (<div style={{borderBottom: '1px solid grey', padding: '4px'}}>
        <span>
          <b>{booking.hotel.name}</b>
          {' '}  was reserved from {' '}
           <b>{booking.startDate.split('T')[0]}</b>
           {' '} to <b>{booking.endDate.split('T')[0]}</b></span> 
           {' '} for <b>{booking.hotel.pricePerNight} EUR</b> per night
      </div>)
      })}
      
    </div>
  );
};

export default HotelList;

import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Form from 'react-bootstrap/Form';
import { localStorageGet } from "utils/localStorage";
import axios from "axios";
import { useSelector } from "react-redux";
import Alert from 'react-bootstrap/Alert';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const API_URL = "http://localhost:8000";


const Booking = ({hotel}) => {
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1)
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [isBooked, setIsBooked] = useState(false)

  const acessToken = localStorageGet('acessToken')

  const config = {
      headers: {
        Authorization: `Bearer ${acessToken}`,
      },
    };

  const userRole = localStorageGet('roles')


  const handleBookHotel = async (hotel) => {
    console.log('hehe')
    const { status, statusText } = await axios.post(
      `${API_URL}/api/hotel/book`,
      { hotel: hotel, startDate, endDate },
      config
    );
    if (status === 200 && statusText === "OK") {
      // fetchAllPosts();
      setIsBooked(true)
    }
  }

  return (
    <>
    {isBooked &&  <Alert >
  The booking was successful
        </Alert>}
<div style={{marginBottom: '8px', marginTop: '8px'}}>
  <span>START DATE</span>
<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div>
  <span>END DATE</span>
  <DatePicker minDate={startDate} selected={endDate} onChange={(date) => setEndDate(date)} />
</div>

{userRole === '"user"' && 
<Button style={{marginTop: '10px'}}  onClick={() => handleBookHotel(hotel)}>
  BOOKING
  </Button>}
  </>
  )
}


const HotelList = () => {
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const acessToken = localStorageGet('acessToken')
    const userRole = localStorageGet('roles')

    const config = {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      };

    const fetchAllPosts = async () => {
        setIsLoading(true)
        const { data, status, statusText } = await axios.get(
          `${API_URL}/api/ad/all`,
          config
        );
        if (data && status === 200 && statusText === "OK") {
          setPosts(data);
          setIsLoading(false)
        }
      };

      const deletePost = async (id) => {
        const { status, statusText } = await axios.post(
          `${API_URL}/api/user/ads/delete`,
          { id },
          config
        );
        if (status === 200 && statusText === "OK") {
          fetchAllPosts();
        }
      };

      

      useEffect(() => {
        fetchAllPosts()
      }, [])

      if(isLoading) {
          return <div>Loading</div>
      }

      if(!posts) {
          return <div>No available posts</div>
      }
return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
 {posts.map(post => {
    return (
        <div style={{padding: '20px',  width: '23rem' }}> 
             <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{post?.name}</Card.Title>
          <Card.Subtitle>
           Description: {post?.description}
          </Card.Subtitle>

          <Card.Text>
           Distance from center: {post?.distance} km
          </Card.Text>

          <Card.Text>
           Price per night: {post?.pricePerNight} EUR
          </Card.Text>

          <Card.Text>
           Region: {post?.region} / {post?.town}
          </Card.Text>

          <Form.Group className="mb-1" >
        <Form.Check disabled type="checkbox" label="Wifi" checked={post?.options.wifi || false}/>
      </Form.Group>

      <Form.Group className="mb-1" >
        <Form.Check disabled type="checkbox" label="Parking" checked={post?.options.parking || false} />
      </Form.Group>

      <Form.Group className="mb-1" >
        <Form.Check disabled type="checkbox" label="Free cancelation" checked={post?.options.freeCancelation || false}/>
      </Form.Group>

      <Form.Group  className="mb-1" >
        <Form.Check disabled type="checkbox" label="Room service" checked={post?.options.roomService || false}/>
      </Form.Group>
     {userRole === '"moderator"' && <Button variant="danger" onClick={() => deletePost(post._id)}>DELETE</Button>}
     {userRole === '"user"' && <Booking hotel={post}/>}


        </Card.Body>
      </Card>
        </div>
    )
})}
    </div>
}

export default HotelList
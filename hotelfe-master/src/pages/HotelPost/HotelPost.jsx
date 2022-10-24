import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import axios from "axios";
import { localStorageGet } from "utils/localStorage";


// pricePerNight: String,
//     available: String,
//     description: String,
//     stars: Number,
//     distanceFromCenter: Number,
//     region: String,

const API_URL = "http://localhost:8000";


const HotelPost = () => {
    const acessToken = localStorageGet('acessToken')


    const [pricePerNight, setPricePerNight] = useState(0)
    const [description, setDescription] = useState('')
    const [distance, setDistance] = useState('')
    const [region, setRegion] = useState('')
    const [town, setTown] = useState('')
    const [wifi, setWifi] = useState(false)
    const [parking, setParking] = useState(false)
    const [freeCancelation, setFreeCancelation] = useState(false)
    const [roomService, setRoomService] = useState(false)
    const [name, setName] = useState('')

    const [successPost, setSuccessPost] = useState(false)

    const config = {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      };
    
     
      const postAd = async () => {
          const data = {
            pricePerNight,
            description,
            distance,
            region,
            town,
            name,
            options: {'wifi' : wifi,
             'parking': parking,
              'freeCancelation': freeCancelation,
               'roomService': roomService}
          }
          console.log('tets')

        const { status, statusText } = await axios.post(
          `${API_URL}/api/ad/post`,
          data,
          config
        );

        if (status === 200 && statusText === "OK") {
            setSuccessPost(true)
        }
      };

    return (
        <div style={{ marginTop: '10px'}}> <Form >
          <div style={{fontSize:' 18px', color: 'grey', marginBottom: '10px'}}>POST HOTEL</div>
              <Form.Group className="mb-1" >
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} value={name}  placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-1" >
                <Form.Label>Price per night</Form.Label>
                <Form.Control onChange={(e) => setPricePerNight(e.target.value)} value={pricePerNight}  placeholder="Price per night" />
            </Form.Group>

            <Form.Group className="mb-1" >
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e) => setDescription(e.target.value)} value={description}  placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-1" >
                <Form.Label>Distance from center</Form.Label>
                <Form.Control onChange={(e) => setDistance(e.target.value)} value={distance}  placeholder="Distance from center" />
            </Form.Group>

            <Form.Group className="mb-1" >
                <Form.Label>Region</Form.Label>
                <Form.Control onChange={(e) => setRegion(e.target.value)} value={region}  placeholder="Region" />
            </Form.Group>

            <Form.Group className="mb-1" >
                <Form.Label>Town</Form.Label>
                <Form.Control onChange={(e) => setTown(e.target.value)} value={town}  placeholder="Town" />
            </Form.Group>

        <Form.Group className="mb-1" >
        <Form.Check onChange={(e) => setWifi(e.target.checked)} value={wifi} type="checkbox" label="Wifi" />
      </Form.Group>

      <Form.Group className="mb-1" >
        <Form.Check onChange={(e) => setParking(e.target.checked)} value={parking} type="checkbox" label="Parking" />
      </Form.Group>

      <Form.Group className="mb-1" >
        <Form.Check onChange={(e) => setFreeCancelation(e.target.checked)} value={freeCancelation} type="checkbox" label="Free cancelation" />
      </Form.Group>

      <Form.Group className="mb-1" >
        <Form.Check onChange={(e) => setRoomService(e.target.checked)} value={roomService} type="checkbox" label="Room service" />
      </Form.Group>

  


            <Button variant="primary" onClick={postAd}>
                Post
            </Button>
        </Form></div>
    )
}

export default HotelPost
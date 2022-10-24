import React, { useEffect, useState } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";

import { MobileCard, Searchbar } from "components/_shared";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from "./Home.scss";

const API_URL = "http://localhost:8000";

const Home = () => {
  const [deals, setDeals] = useState([]);

  const { searchOpenMobile } = useSelector((state) => state.ui);

  const fetchDeals = async () => {
    const { data, status } = await axios.get(`${API_URL}/api/ad/all`);
    if (data && status === 200) {
      setDeals(data);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  // pricePerNight: String,
  // available: String,
  // description: String,
  // stars: Number,
  // distanceFromCenter: Number,
  // region: String,

  return (
    <div>
       PLEASE SIGN IN
    </div>
  );
};

export default Home;

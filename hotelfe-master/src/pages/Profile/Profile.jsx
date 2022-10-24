import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { requestOptionsBuilder } from "utils/auth";
import authHeader from "utils/services/auth-header";

const API_URL = "http://localhost:8000";

const Profile = () => {
  const [userActiveAds, setUserActiveAds] = useState([]);

  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/auth/login" />;
  }

  const body = {
    brand: "Mercedes",
    model: "c",
    condition: "new",
    price: "28000",
    year: 2014,
    motorPower: 180,
    category: "car",
    euroStandart: 5,
    mileage: 150000,
    engineType: "gasoline",
    transmission: "automatic",
    color: "red",
    region: "Varna",
    place: "Varna",
    postedBy: currentUser.id,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${currentUser.accessToken}`,
    },
  };

  const fetchUserAds = async () => {
    const { data, status, statusText } = await axios.get(
      `${API_URL}/api/user/ads`,
      config
    );
    if (data && status === 200 && statusText === "OK") {
      setUserActiveAds(data);
    }
  };

  const deleteAd = async (id) => {
    const { status, statusText } = await axios.post(
      `${API_URL}/api/user/ads/delete`,
      { id },
      config
    );
    if (status === 200 && statusText === "OK") {
      fetchUserAds();
    }
  };

  useEffect(() => {
    fetchUserAds();
  }, []);

  const postAd = async () => {
    const { status, statusText } = await axios.post(
      `${API_URL}/api/ad/post`,
      body,
      config
    );
    if (status === 200 && statusText === "OK") {
      fetchUserAds();
    }
  };

  return (
    <div>
      <header>
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <button onClick={postAd}>save ad</button>
      <div>
        <h3>ACTIVE ADS</h3>
        {userActiveAds.map((ad) => {
          return (
            <div key={ad._id}>
              <p>
                <b>Brand:</b>
                {ad.brand}
              </p>
              <p>
                <b>Model:</b>
                {ad.model}
              </p>
              <p>
                <b>Motor Power:</b>
                {ad.motorPower} HP
              </p>
              <p>
                <b>Condition:</b>
                {ad.condition}
              </p>
              <p>
                <b>Engine:</b>
                {ad.engineType}
              </p>
              <p>
                <b>Euro Standart:</b>
                {ad.euroStandart}
              </p>
              <p>
                <b>Year:</b>
                {ad.year}
              </p>
              <p>
                <b>Transmission:</b>
                {ad.transmission}
              </p>
              <p>
                <b>Price:</b>
                {ad.price}$
              </p>
              <p>
                <b>Mileage:</b>
                {ad.mileage} km
              </p>
              <p>
                <b>Place:</b>
                {ad.place}
              </p>
              <button onClick={() => deleteAd(ad._id)}>DELETE</button>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;

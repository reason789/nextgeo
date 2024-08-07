"use client";
import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import UserInfo from "@/components/UserInfo";
import GetIPAddress from "@/components/GetIPAddress";
// import { getUserInfo, getLocationInfo } from "../utils/userInfo";

function LocationComponent() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const countries = Country.getAllCountries();

          // Find the closest country (this is a simplified approach)
          const country = countries.reduce((prev, curr) => {
            const prevDist =
              Math.abs(prev.latitude - latitude) +
              Math.abs(prev.longitude - longitude);
            const currDist =
              Math.abs(curr.latitude - latitude) +
              Math.abs(curr.longitude - longitude);
            return prevDist < currDist ? prev : curr;
          });

          const states = State.getStatesOfCountry(country.isoCode);

          // Find the closest state (if available)
          const state =
            states.length > 0
              ? states.reduce((prev, curr) => {
                  const prevDist =
                    Math.abs(prev.latitude - latitude) +
                    Math.abs(prev.longitude - longitude);
                  const currDist =
                    Math.abs(curr.latitude - latitude) +
                    Math.abs(curr.longitude - longitude);
                  return prevDist < currDist ? prev : curr;
                })
              : null;

          setLocation({
            country: country.name,
            state: state ? state.name : "N/A",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div>
      <div>
        <h1>Google Analysis Dashboard</h1>
        {userInfo ? (
          <div>
            <p>IP Address: {userInfo.ip}</p>
            <p>Device: {userInfo.device}</p>
            <p>OS: {userInfo.os}</p>
            <p>ISP: {userInfo.isp}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <GetIPAddress />
      <UserInfo />
      <p>hello</p>
      {location ? (
        <p>
          Country: {location.country}, State: {location.state}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default LocationComponent;

// components/IpAddress.js

import { useEffect, useState } from "react";

const GetIpAddress = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIpAddress = async () => {
      const response = await fetch("/api/geoip");
      const data = await response.json();
      setIp(data.ip);
    };

    fetchIpAddress();
  }, []);

  return (
    <div>
      <h1>Your Dynamic IP Address</h1>
      <p>{ip || "Loading..."}</p>
    </div>
  );
};

export default GetIpAddress;

import React, { useEffect, useState } from "react";

const UserInfo = () => {
  const [ip, setIp] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [os, setOs] = useState("");
  const [isp, setIsp] = useState("");

  useEffect(() => {
    // Simulated IP address for demonstration, since we can't fetch real IP
    const simulatedIp = "192.168.0.1"; // This should be replaced by a real IP address in production
    setIp(simulatedIp);

    // Determine device type
    const userAgent = navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) {
      setDeviceType("Mobile");
    } else if (/Tablet/i.test(userAgent)) {
      setDeviceType("Tablet");
    } else {
      setDeviceType("Computer");
    }

    // Determine OS
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setOs("iOS");
    } else if (/Android/i.test(userAgent)) {
      setOs("Android");
    } else if (/Windows/i.test(userAgent)) {
      setOs("Windows");
    } else if (/Macintosh/i.test(userAgent)) {
      setOs("Mac OS");
    } else if (/Linux/i.test(userAgent)) {
      setOs("Linux");
    } else {
      setOs("Unknown");
    }

    // ISP information is generally not available without an external API
    setIsp("ISP information not available without an API");
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Device Information</h1>
      <ul>
        <li>
          <strong>IP Address:</strong> {ip}
        </li>
        <li>
          <strong>Device Type:</strong> {deviceType}
        </li>
        <li>
          <strong>OS:</strong> {os}
        </li>
        <li>
          <strong>ISP:</strong> {isp}
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;

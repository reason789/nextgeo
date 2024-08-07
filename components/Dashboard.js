import { useEffect, useState } from "react";
import { getIp } from "../utils/getIp";
import { getDeviceInfo } from "../utils/getDeviceInfo";

const Dashboard = ({ userAgent }) => {
  const [ip, setIp] = useState("");
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const ip = await getIp();
      setIp(ip);
      const info = getDeviceInfo(userAgent);
      setDeviceInfo(info);
    };
    fetchData();
  }, [userAgent]);

  return (
    <div>
      <h1>Google Analysis Dashboard</h1>
      <h2>IP Address: {ip}</h2>
      <h2>Device Information:</h2>
      <p>Browser: {deviceInfo.browser?.name}</p>
      <p>Browser Version: {deviceInfo.browser?.version}</p>
      <p>Device Type: {deviceInfo.device?.type || "Desktop"}</p>
      <p>OS: {deviceInfo.os?.name}</p>
      <p>OS Version: {deviceInfo.os?.version}</p>
      <p>ISP Information: This cannot be fetched without an external API.</p>
    </div>
  );
};

export default Dashboard;

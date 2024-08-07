import ip from "ip";

export const getUserInfo = () => {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const vendor = navigator.vendor;
  const ipAddress = ip.address();

  const location = {}; // Placeholder for location information
  const isp = {}; // Placeholder for ISP information

  return {
    ipAddress,
    userAgent,
    platform,
    vendor,
    location,
    isp,
  };
};

export const getLocationInfo = () => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      });
    } else {
      resolve({ error: "Geolocation is not supported by this browser." });
    }
  });
};

import publicIp from "public-ip";

export const getIp = async () => {
  const ip = await publicIp.v4();
  return ip;
};

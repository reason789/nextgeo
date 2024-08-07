import UAParser from "ua-parser-js";

export function getUserInfo(req) {
  const parser = new UAParser(req.headers["user-agent"]);
  const result = parser.getResult();

  const userInfo = {
    ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    device: result.device.type || "desktop",
    os: result.os.name || "unknown",
    isp: "unknown", // Hard to determine without an external API
  };

  // You can add more parsing logic here if needed

  return userInfo;
}

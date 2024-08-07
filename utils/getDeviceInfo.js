import { UAParser } from "ua-parser-js";

export const getDeviceInfo = (userAgent) => {
  const parser = new UAParser(userAgent);
  return parser.getResult();
};

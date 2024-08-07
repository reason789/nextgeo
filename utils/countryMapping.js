export const countryData = [
  {
    country: "United States",
    latitude: 37.0902,
    longitude: -95.7129,
    states: ["California", "Texas", "New York", "Florida", "Illinois"],
  },
  {
    country: "Canada",
    latitude: 56.1304,
    longitude: -106.3468,
    states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  },
  {
    country: "Brazil",
    latitude: -14.235,
    longitude: -51.9253,
    states: ["São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Paraná"],
  },
  {
    country: "Australia",
    latitude: -25.2744,
    longitude: 133.7751,
    states: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
    ],
  },
  {
    country: "India",
    latitude: 20.5937,
    longitude: 78.9629,
    states: [
      "Maharashtra",
      "Uttar Pradesh",
      "Bihar",
      "West Bengal",
      "Tamil Nadu",
    ],
  },
  {
    country: "United Kingdom",
    latitude: 55.3781,
    longitude: -3.436,
    states: ["England", "Scotland", "Wales", "Northern Ireland"],
  },
  {
    country: "Germany",
    latitude: 51.1657,
    longitude: 10.4515,
    states: [
      "Bavaria",
      "North Rhine-Westphalia",
      "Baden-Württemberg",
      "Hesse",
      "Saxony",
    ],
  },
  {
    country: "France",
    latitude: 46.6034,
    longitude: 1.8883,
    states: [
      "Île-de-France",
      "Provence-Alpes-Côte d'Azur",
      "Occitanie",
      "Nouvelle-Aquitaine",
      "Auvergne-Rhône-Alpes",
    ],
  },
  {
    country: "Japan",
    latitude: 36.2048,
    longitude: 138.2529,
    states: ["Tokyo", "Osaka", "Kyoto", "Hokkaido", "Fukuoka"],
  },
  {
    country: "Russia",
    latitude: 61.524,
    longitude: 105.3188,
    states: [
      "Moscow",
      "Saint Petersburg",
      "Novosibirsk",
      "Yekaterinburg",
      "Nizhny Novgorod",
    ],
  },
  {
    country: "Bangladesh",
    latitude: 23.685,
    longitude: 90.3563,
    states: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"],
  },
];
export const getCountryFromCoords = (latitude, longitude) => {
  let closestCountry = null;
  let closestDistance = Infinity;

  countryData.forEach((data) => {
    const distance = Math.sqrt(
      Math.pow(data.latitude - latitude, 2) +
        Math.pow(data.longitude - longitude, 2)
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCountry = data.country;
    }
  });

  return closestCountry || "Unknown";
};

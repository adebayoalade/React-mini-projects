import React, {createContext, useEffect, useState} from 'react'
const WeatherContext = createContext()

const WeatherProvider = () => {
const [data, setdata] = useState(null);
const [loading, setloading] = useState(true);

useEffect(() => {
  const fetchdata = () => {
   const url = "https://weatherapi-com.p.rapidapi.com/current"
   const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key":
        "212eb6b3ddmsh09b08",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
   };
  fetch(url, options).then(
    (response) => {
        if(!response.ok) {
            throw new Error("Error fetching data");
        }
        return response.json();
    }
  ).then(
    (result) => {
        console.log("API Response:", result);
        setdata(result);
        setloading(false);
    }
  ).catch(
    (error) => {
        console.log("Fetch Error: ", error);
        setloading(false);
    }
  );
  };
  fetchdata();
}, [])

  return (
    <WeatherContext.Provider value={{data, loading}}>
        {children}
    </WeatherContext.Provider>
  )
}

export {WeatherContext, WeatherProvider};
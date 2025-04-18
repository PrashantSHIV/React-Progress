import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FiSunrise } from "react-icons/fi";

import { useState, useEffect } from "react";
import axios from "axios";

export function WeatherApp() {
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [windSpeed, setWindSpeed] = useState(0);
    const [sunriseTime, setSunriseTime] = useState('');
    const [icon_code, setIconCode] = useState('');
    const [weather, setWeather] = useState('');

    const [search, setSearch] = useState('Delhi');

    async function searchWeather(e) {
        if (e) e.preventDefault();

        let API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2a736e83db074058026c7b90b52fabb8&units=metric`;

        try {
            let data = (await axios.get(API)).data;
            console.log(data);

            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setCity(data.name);
            setCountry(data.sys.country);
            setWindSpeed(data.wind.speed);
            setSunriseTime(
                new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })
            );
            setWeather(data.weather[0].main);
            setIconCode(data.weather[0].icon);
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    }

    // Load data once on component mount
    useEffect(() => {
        searchWeather();
    }, []);

    return (
        <main className="absolute top-1/2 left-1/2 -translate-1/2  rounded-4xl p-10 flex flex-col gap-6 bg-[#7396bc] shadow-lg w-110">
            <h1 className="text-4xl text-center text-white font-[500]">Weather App</h1>
            <form onSubmit={searchWeather} className="rounded-[14px] px-4 py-3 flex text-xl bg-[#9ab5d2]">
                <input
                    className="outline-none"
                    type="text"
                    placeholder="e.g. Delhi"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button className="bg-[#608ab4] py-1 px-4 rounded-[6px] text-white">Search</button>
            </form>

            <div className="text-white p-8 shadow rounded-3xl bg-[#7c9cc2]">
                <div className="flex gap-3">
                    <img className="basis-1/2 object-contain" src={`https://openweathermap.org/img/wn/${icon_code}@2x.png`} alt="" />
                    <div className="text-center">
                        <h1 className="text-7xl mb-3">{temp}<sup>o</sup></h1>
                        <h1 className="text-2xl "><span>{city}</span>, <span>{country}</span></h1>
                    </div>
                </div>
                <h1 className=" text-center py-5 text-3xl font-semibold border-b-1 border-[#f1f4f63c]">{weather}</h1>
                <div className="meta flex justify-between gap-2 text-center text-xl mt-5">
                    <div>
                        <span>Wind</span>:
                        <h1 className="mt-2 flex items-center gap-2"><FaWind /> {windSpeed} km/h</h1>
                    </div>
                    <div>
                        <span>Humidity</span>:
                        <h1 className="mt-2 flex items-center gap-2"><WiHumidity /> {humidity}%</h1>
                    </div>
                    <div>
                        <span>Sunrise</span>:
                        <h1 className="mt-2 flex items-center gap-2"><FiSunrise /> {sunriseTime}</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}

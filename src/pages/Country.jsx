import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/Layout/CountryCards";
import { all } from "axios";   // axios:HTTP client that simplifies making API requests
 
export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {    // useEffect use for fetching data
    startTransition(async () => {   //useTransition hook enables state updates
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (err) {
        console.error("Fetch failed:", err.message);
        setError("Failed to fetch country data.");
      }
    });
  }, []);

  return (
    <section className="country-section">
      <h1 className="Heading-of-country">Countries of the World</h1>
      {error && <p>{error}</p>}
      <ul className="grid grid-four-cols">
        {countries.map((curCountry) => (
          <CountryCard
            key={curCountry.name.common}
            country={curCountry}
          />
        ))}
      </ul>
    </section>
  );
};

import CountryFacts from "../api/countryData.json";

export const About = () => {
  return (
    
    <section className="section-about container">
      <h2 className="container-title">
        {/* Country and their description  */}
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      {/* Showing details by using Api  */}
      <div className="gradient-cards">
        {CountryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p className="card-description">
                  Capital: <span>{capital}</span>
                </p>
                <p className="card-description">
                  Population: <span>{population}</span>
                </p>
                <p className="card-description">
                  Interesting Fact: <span>{interestingFact}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

import { useState } from "react";

const FormTag = ({ countries, setCountries }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const addCountry = (event) => {
    event.preventDefault();
    const countryNoIndex = countries.findIndex((item) => item.name === country);
    if (countryNoIndex !== -1) {
      alert("이미 등록됨");
      return;
    } else {
      // console.log(countries.length);

      const newCountry = {
        id: countries.length + 1,
        name: country,
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries([...countries, newCountry]);
    }
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const updateButton = () => {
    const countryNoIndex = countries.findIndex((item) => item.name === country);
    if (countryNoIndex !== -1) {
      const updateCountry = [...countries];
      updateCountry[countryNoIndex] = {
        ...updateCountry[countryNoIndex],
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries(updateCountry);
    } else {
      alert("추가되지않은 국가입니다. 추가부터해주세요");
      return;
    }
  };
  return (
    <form onSubmit={addCountry}>
      <input
        type="text"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      ></input>
      <input
        type="text"
        value={gold}
        onChange={(event) => setGold(event.target.value)}
      ></input>
      <input
        type="text"
        value={silver}
        onChange={(event) => setSilver(event.target.value)}
      ></input>
      <input
        type="text"
        value={bronze}
        onChange={(event) => setBronze(event.target.value)}
      ></input>
      <button type="submit">추가</button>
      <button type="button" onClick={updateButton}>
        업데이트
      </button>
    </form>
  );
};

export default FormTag;

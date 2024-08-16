import { useState } from "react";

const TableTag = ({ countries, setCountries }) => {
  const delectCountry = (id) => {
    setCountries(countries.filter((item) => item.id !== id));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>버튼</th>
          </tr>
        </thead>
        <tbody>
          {countries
            .sort((a, b) => {
              if (b.gold !== a.gold) return b.gold - a.gold;
            })
            .map((country) => (
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>
                  <button onClick={() => delectCountry(country.id)}>
                    삭제
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTag;

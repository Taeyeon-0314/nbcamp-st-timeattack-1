import { useState } from "react";
import FormTag from "./components/FormTag";
import TableTag from "./components/TableTag";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <FormTag countries={countries} setCountries={setCountries} />
      <TableTag countries={countries} setCountries={setCountries} />
    </>
  );
}

export default App;

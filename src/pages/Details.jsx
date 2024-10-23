import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";

const Details = () => {
  const { name } = useParams();
  const { navigate, goBack} = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <button onClick={goBack}>
        <IoArrowBack size="20px" /> Back
      </button>
      Details {name}
    </div>
  );
};

export default Details;

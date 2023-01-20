import React, { useState } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [notLaptop, setNotLaptop] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  //useStates - the end

  //axios start
  const createDevice = (e) => {
    e.preventDefault();
    axios
      .post("https://razer-api.onrender.com/devices", {
        name: name,
        image: image,
        price: price,
        desc: desc,
        category: category,
      })
      .then((res) => {
        console.log(res.data);
        alert("Device created !");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    setDesc("");
    setCategory("");
    setName("");
    setImage("");
    setPrice("");
  };
  //axios end

  return (
    <div>
      <Context.Provider
        value={{
          mobile,
          setMobile,
          notLaptop,
          setNotLaptop,
          createDevice,
          name,
          image,
          category,
          price,
          desc,
          setDesc,
          setPrice,
          setName,
          setImage,
          setCategory,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { Context, ContextProvider };

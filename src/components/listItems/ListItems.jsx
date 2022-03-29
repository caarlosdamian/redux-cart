import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./listItem.scss";
import axios from "axios";

const ListItems = () => {
  const [collections, setcollections] = useState([]);
  useEffect(() => {
    const getCollections = async () => {
      const fetch = await axios.get(
        "http://localhost:5000/api/store/collections/"
      );
      const res = await fetch.data;
      setcollections(res.data);
    };
    getCollections();
  }, []);


  return (
    <div className="list-container">
      <h1>List Items</h1>
      <div className="wrapper">
        {collections.map((item) => (
          <Card item={item} key={item.imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default ListItems;

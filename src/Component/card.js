import React from 'react'
import '../Component/card.css'
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Card({element1 , element2 , element3 , label1 ,label2 , label3 , label4 , label5 ,label6 }) {
    const [listData, setListData] = useState([]);
  let getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  let clickCard = (id) => {
    navigate(`/singlepost/${id}`);
  };
  return (
    <div className="card">
    <h1>OUR PRODUCT<span id="line"></span></h1>
    <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that<br/> have meaning and add a value for our clients</p>
    <Box>
    <button onClick={getData} className="btn1">CLICK HERE</button>
    <div className="container">
    {listData.map((x, i) => (
        
              
                  <div className="item">
                  <img  key={i} src={x.image}/>
                  <h3 id='title'>{x.category}</h3>
                <h3 >{x.title}</h3>
                <h3 style={{
                    backgroundColor:"black",
                    color: "#007bff",
                    texttransform: "uppercase",
                }}
                >${x.price}</h3>
                <button onClick={() => clickCard(x.id)} className="btn1">BUY NOW</button>
                  </div>
    ))}
       </div>
    </Box>
</div>
  )
}
// onClick={() => clickCard(x.id)}
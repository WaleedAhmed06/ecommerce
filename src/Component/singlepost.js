import { Box} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Singlepost() {
  let params = useParams();

  const [model, setModel] = useState({});

  let getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    getData(); // yahan kuch call krsakty hn
  }, []); // [] bracket empty means getdata ka funtion page reload pr chaleyga ka for "useeffect"
         // or agr is [] bracket mai koi bhi function daidein tw jab woh function chaley tab getdata chley getdata dependence on is []bracket function
  return (
    <>    
    <Box>
      <br/>
              <div className="card1">
                  <div className="box">
                  <img  src={model.image}/>
                  <h3 id='title'>{model.category}</h3>
                <h3 >{model.title}</h3>
                <h3 style={{
                    backgroundColor:"black",
                    color: "#007bff",
                    texttransform: "uppercase",
                }}
                >${model.price}</h3>
                  </div>
                  <div >
                    <h1 style={{
                        color:"black",
                        textDecoration:"underline",
                        fontFamily:"fantasy"
                    }}>DETAIL THIS PRODUCT</h1>
                    <h2 style={{
                        width:"600px",
                        color:"#007bff",
                        fontFamily:"initial",
                        textalign:"center",
                    }}>{model.description}</h2>
                  </div>
              </div>
    </Box>
</>
  );
}

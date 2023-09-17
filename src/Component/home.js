import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';



export default function Home() {

    const [itemData, setItemdata] = React.useState([
        {
            img: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/08/How-To-Fold-A-Pocket-Square-9-Different-Ways.jpg',
            title: 'Mens Fashion',
            route: "card",
            rows: 2,
            cols: 2,
            featured: true,
          },
          {
            img: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Pocket-Square-The-Dunaway-Fold.jpg',
            title: 'Mens Fashion',
            route: "card",
          },
          {
            img: 'https://www.dmarge.com/wp-content/uploads/2019/02/blazer-pocket-square.jpg',
            title: 'Mens Fashion',
            route: "card",
          },
          {
            img: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/08/One-Point-Fold-Pocket-Square.jpg',
            title: 'Mens Fashion',
            route: "card",
            cols: 2,
          },
      ]);
    
  

  return (
    <ImageList sx={{ width: "100%", height: 600 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item,i) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
         
            // subtitle={item.route}
            actionIcon={
              <Typography style={{
                backgroundColor:"black",
                color:"darkgray",
                fontFamily:"cursive",
                textAlign:"center",
                fontSize:"40px", }} >
              {item.title}
              </Typography>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


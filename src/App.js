import React from "react";

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://imgnews.pstatic.net/image/044/2013/11/15/20131115001027_0_59_20131115200201.jpg?type=w647"
  },
  {
    name: "Ramen",
    image: "https://postfiles.pstatic.net/data5/2005/1/27/67/v11-kingdom540.jpg?type=w2"
  },
  {
    name: "Samgiopsal",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MTNfMTA3%2FMDAxNTU3NzUzODcyMzU4.qLa3-1mcvNWr3lhqF5bPJYFnKhYGevWFB-b-UED-7CEg.TWQVk7Vjgb0YVcJexgRMVNGEfhIStJ2wXjhmbrTMgfkg.JPEG.dmsruddl1017%2F%25C5%25EB%25B5%25C5%25C1%25F6%25BB%25FD%25BB%25EF%25B0%25E3%25BB%25EC_0018_IMG_5385.jpg&type=sc960_832"
  },
  {
    name: "Chukumi",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140113_170%2Fqsd4898_1389573848504f8W1X_JPEG%2F%25C1%25F8%25C1%25D6%25B8%25C0%25C1%25FD_%25C8%25F1%25BE%25DF%25B3%25D7_%25C2%25DE%25B2%25D9%25B9%25CC9.jpg&type=sc960_832"
  },
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        < Food name={dish.name} picture={dish.image} />
      ))}
    </div >
  );
}
// jsx : html에 맞게 작성해줘야 한다.

export default App;

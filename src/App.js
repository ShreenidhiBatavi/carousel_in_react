import { useState } from "react";
export default function App() {
  const imgs = [
    "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327__340.jpg",
    "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg"
  ];
  const [currImg, setCurrImg] = useState(0);
  function next() {
    if (currImg === imgs.length - 1) {
      setCurrImg(0);
    } else {
      setCurrImg((prevState) => prevState + 1);
    }
  }
  function prev() {
    if (currImg === 0) {
      setCurrImg(imgs.length - 1);
    } else {
      setCurrImg((prevState) => prevState - 1);
    }
  }

//  setInterval(()=>{
//    setCurrImg((prevState)=>prevState+1)
//  },3000)

  console.log(currImg);
  return (
    <div className="App">
      <h1>Hare krishna</h1>
      <img src={imgs[currImg]} alt="image" />
      <button onClick={prev}>prev</button>

      <button onClick={next}>next</button>
    </div>
  );
}

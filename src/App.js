import { useState ,useRef} from "react";
export default function App() {
  const imgs = [
    "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327__340.jpg",
    "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg"
  ];
  const [currImg, setCurrImg] = useState(0);
  const index=useRef(currImg)
  const pic=useRef()
  
  function next() {
    if (index.current === imgs.length - 1) {
      // setCurrImg(0);
      index.current=0
      // setCurrImg(index.current)
      pic.current.src=imgs[index.current]

    } else {
      // setCurrImg((prevState) => prevState + 1);
      index.current++
      // setCurrImg(index.current)
      pic.current.src=imgs[index.current]

    }
    
  }
  function prev() {
    if (index.current === 0) {
      index.current=imgs.length - 1;
      setCurrImg(index.current)

    } else {
      // setCurrImg((prevState) => prevState - 1);
      index.current--
      setCurrImg(index.current)


    }
  }

//  setInterval(()=>{
//   next()
// },1000)

  console.log(index);
  console.log(pic)
  return (
    <div className="App">
      <h1>Hare krishna</h1>
      <img ref={pic} src={imgs[currImg]} alt="image" />
      <button onClick={prev}>prev</button>

      <button onClick={next}>next img</button>
    </div>
  );
}

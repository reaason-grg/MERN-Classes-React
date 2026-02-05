// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const[num1,setNum1]=useState(0);
//   const[num2,setNum2]=useState(0);
//   function addNum1(){
//     setNum1(num1+1);
//   }
//   function subNum2(){
//     setNum2(num2-1);
//   }
//   useEffect(() => {
//     console.log("useeffect is running")
//   },[num1,num2]);

//   return (
//     <div>
//       <h1>{num1}</h1>
//       <button onClick={addNum1}>Increment Num1</button>
//       <h1>{num2}</h1>
//       <button onClick={subNum2}>Decrement Num2</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const getImages = async () => {
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`,
      );
      // console.log(res.data);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  return (
    <div>
      {images.length > 0 ? (
        <div>
          <div className="flex flex-wrap justify-center gap-4 my-20">
            {images.map((image) => (
              <div key={image.id} className="flex">
                <img src={image.download_url} className="h-50 w-80"></img>
              </div>
            ))}
          </div>
          <div className="flex gap-8 justify-center ">
            <button
              className="bg-amber-500 p-4 border rounded-sm"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            >
              Prev
            </button>
            <h2 className="text-xl mt-3">{page}</h2>
            <button
              className="bg-amber-500 p-4 border rounded-sm"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>No Images</div>
      )}
    </div>
  );
};

export default App;

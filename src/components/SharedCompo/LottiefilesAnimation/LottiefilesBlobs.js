import React, { useRef } from 'react';

const LottiefilesBlobs = ({ children }) => {
 const ref = useRef(null);
 React.useEffect(() => {
  import("@lottiefiles/lottie-player");
 });
 return (
  <div>
   <lottie-player
    id="firstLottie"
    ref={ref}
    autoplay
    loop
    mode="normal"
    src= 'url("https://via.placeholder.com/500")'
   // style={{ width: "300px", height: "300px" }}
   ></lottie-player>
  </div>
 );
};

export default LottiefilesBlobs;
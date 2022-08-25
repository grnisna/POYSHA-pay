import React, { useRef } from 'react';

const Loading = () => {
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
    src="https://assets2.lottiefiles.com/packages/lf20_fnqxk1bz.json"
   ></lottie-player>

  </div>
 );
};

export default Loading;
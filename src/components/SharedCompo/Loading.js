import React, { useRef } from 'react';
import './Loading.css'
const Loading = () => {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        // <div className="flex items-center justify-center ">
        //     <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        // </div>
        <div className="loading flex items-center justify-center w-50">
            <lottie-player className="loading_file "
                id="firstLottie"
                ref={ref}
                autoplay
                style={{ width: 400 }}
                loop
                mode="normal"
                src="https://assets5.lottiefiles.com/packages/lf20_cjz9kbgr.json"
            ></lottie-player>
        </div>
    );
};

export default Loading;
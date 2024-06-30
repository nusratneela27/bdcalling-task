import React from "react";
import live from "../../assets/live.png";
import live2 from "../../assets/liv2.png";
import { Button } from "antd";
import Container from "../../components/Shared/Container/Container";

const LiveMeeting = () => {
  return (
    <Container>
      <div className="relative">
        <div className="flex justify-center items-center h-screen">
          <img
            src={live}
            alt="Live"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        <div className="flex justify-center pb-40">
          <div className="absolute z-10 top-[700px] w-11/12 md:w-1/2 lg:w-1/3">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg text-center p-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-300 opacity-50 rounded-lg"></div>
                <img src={live2} alt="" className="w-20 mx-auto mb-2" />
                <h1 className="text-xl font-bold mb-4">
                  Live lesson panel and chat section
                </h1>
                <Button
                  type="primary"
                  className="bg-gray-900 text-white px-5 md:px-7 py-3 md:py-4 lg:py-6 shadow-2xl"
                >
                  Go to the meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LiveMeeting;

// import React from "react";
// import live from "../../assets/live.png";
// import live2 from "../../assets/liv2.png";
// import { Button } from "antd";
// import Container from "../../components/Shared/Container/Container";

// const LiveMeeting = () => {
//   return (
//     <Container>
//       <div className="relative">
//         <div className="flex justify-center items-center h-screen">
//           <img
//             src={live}
//             alt="Live"
//             className="max-w-full h-auto shadow-lg rounded-lg"
//           />
//         </div>

//         <div className="flex justify-center pb-40 ">
//           <div className="absolute z-10 top-[700px]">
//             <div className="relative">
//               <div className="bg-white rounded-lg w-11/12 text-center p-10">
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-300 opacity-50"></div>
//                 <img src={live2} alt="" className="w-20 mx-auto mb-2" />
//                 <h1 className="font-bold mb-4">
//                   Live lesson panel and chat section
//                 </h1>
//                 <Button
//                   type="primary"
//                   className="bg-gray-900 text-white px-5 md:px-7 py-3 md:py-4 lg:py-6 shadow-2xl"
//                 >
//                   Go to the meeting
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default LiveMeeting;

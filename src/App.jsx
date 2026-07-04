import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-linear-to-br from-[#f9fafb] to-[#d2d6db] flex justify-center items-start">
      <div className="mt-[200px] w-[340px] bg-white rounded-lg p-[24px] border-2	border-neutral-200 flex flex-col gap-[16px] shadow-2xs">
        <div className="flex gap-[16px]">
          <img
            src="src/assets/profile-thumbnail.png"
            alt="Sarah Dole"
            className="h-[48px] w-[48px]"
          ></img>
          <div>
            <div className="text-lg font-semibold	text-neutral-900">
              Sarah Dole
            </div>
            <div className="text-sm font-normal text-neutral-600">
              @sarahdole
            </div>
          </div>
        </div>
        <p className="text-base font-normal text-neutral-600">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </div>
  );
};

export default App;

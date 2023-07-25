import React from "react";
import '../index.css';

const Header = () => {
  return (
    <header className="w-80 h-16 bg-[#E1E9DA] flex items-center justify-between p-5 absolute top-0 left-0 z-10">
      <div className="w-[40px] h-[40px]"
        style={{
          backgroundImage: `url('/images/MenuIcon.png')`, // 배경 이미지
          backgroundPosition: "center", // 이미지 위치
          backgroundSize: "cover", // 이미지 꽉차게
          backgroundRepeat: 'no-repeat', // 이미지 반복 지정
        }}
      />
      <div className="w-[26px] h-[26px]"
        style={{
          backgroundImage: `url('/images/MyInfoIcon.png')`, // 배경 이미지
          backgroundPosition: "center", // 이미지 위치
          backgroundSize: "cover", // 이미지 꽉차게
          backgroundRepeat: 'no-repeat', // 이미지 반복 지정
        }}
      />

    </header>
  )
};

export default Header;

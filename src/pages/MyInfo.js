// 내 정보 보기
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyInfo = () => {
  // 0부터 99까지의 숫자 배열 생성
  const ages = Array.from({ length: 100 }, (_, index) => index);
  const name = sessionStorage.getItem("username");
  // 성별, 나이, 키, 체중 상태 저장
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  // 로컬스토리지 저장된 데이터
  const localGender = localStorage.getItem("gender");
  const localAge = localStorage.getItem("age");
  const localHeight = localStorage.getItem("height");
  const localWeight = localStorage.getItem("weight");
  // 로그아웃 시 정보 초기화
  const logout = () => {
    sessionStorage.setItem("username", "");
    localStorage.setItem("gender", "");
    localStorage.setItem("age", "");
    localStorage.setItem("height", "");
    localStorage.setItem("weight", "");
  };

  // 입력 값 반영
  const hasLocalValue = () => {
    setAge(localAge ? localAge : 0);
    setGender(localGender ? localGender : "");
    setHeight(localHeight ? localHeight : "");
    setWeight(localWeight ? localHeight : "");
  };
  useEffect(() => {
    hasLocalValue();
  }, []);
  // 성별, 나이, 키, 체중 상태 저장 후 유지
  const saveInfo = () => {
    localStorage.setItem("gender", gender);
    localStorage.setItem("age", age);
    localStorage.setItem("height", height);
    localStorage.setItem("weight", weight);
  };

  const genderChange = (e) => {
    setGender(e);
  };
  console.log(gender);

  const ageChange = (e) => {
    setAge(parseInt(e.target.value));
  };
  console.log(age);

  const heightChange = (e) => {
    setHeight(e.target.value);
  };
  console.log(height);

  const weightChange = (e) => {
    setWeight(e.target.value);
  };
  console.log(weight);

  return (
    <main className="w-80 h-[800px] flex justify-center flex-col items-center bg-[#ffffff] absolute top-0 left-0 border-2 border-[#E6E6E6] z-0 ">
      <div className="flex flex-col items-center ">
        <div
          className="w-[110px] h-[110px] rounded-full"
          style={{
            backgroundImage: `url('/images/userImg.png')`, // 배경 이미지
            backgroundPosition: "center", // 이미지 위치
            backgroundSize: "cover", // 이미지 꽉차게
            backgroundRepeat: "no-repeat", // 이미지 반복 지정
          }}
        />
        <span className="text-[25px] font-bold text-stone-700 mt-[15px]">
          {name}
        </span>
        <Link to="/">
          <button
            className="text-[10px] font-thin underline decoration-1 text-stone-400 mt-[15px]"
            onClick={logout}
          >
            로그아웃
          </button>
        </Link>
      </div>
      <ul className=" w-[300px] h-[300px] px-[20px] py-[20px] flex flex-col justify-between border-2 border-[#E6E6E6] rounded-lg mt-[40px]">
        <li className="mb-[10px]">
          <span>성별 : </span>
          <button
            onClick={() => genderChange("여자")}
            className={`rounded-xl px-5 py-3 text-base font-medium 
                        ${
                          gender === "여자"
                            ? "bg-[#fae2ab] transition duration-200 hover:bg-[#FDF6E6] active:bg-[#fae2ab] focus:ring-2"
                            : ""
                        }`}
          >
            {" "}
            여자{" "}
          </button>

          <button
            onClick={() => genderChange("남자")}
            className={`rounded-xl px-5 py-3 text-base font-medium 
                        ${
                          gender === "남자"
                            ? "bg-[#fae2ab] transition duration-200 hover:bg-[#FDF6E6] active:bg-[#fae2ab] focus:ring-2"
                            : ""
                        }`}
          >
            {" "}
            남자{" "}
          </button>
        </li>
        <li className="mb-[10px]">
          <label htmlFor="ageSelect" className="mr-2">
            나이 :
          </label>
          <select
            id="ageSelect"
            className="border rounded p-1"
            value={age}
            onChange={ageChange}
          >
            {ages.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
          <span>세</span>
        </li>
        <li className="mb-[10px]">
          <span>키 :</span>
          <input
            placeholder="키를 입력하세요."
            className="w-[170px] "
            value={height}
            onChange={heightChange}
          />
          <span>cm</span>
        </li>
        <li className="mb-[10px]">
          <span>체중 :</span>
          <input
            placeholder="체중을 입력하세요."
            className="w-[170px]"
            value={weight}
            onChange={weightChange}
          />
          <span>kg</span>
        </li>
      </ul>
      {/* 저장하기 버튼 */}
      <div>
        <button onClick={saveInfo}>저장하기</button>
      </div>
    </main>
  );
};

export default MyInfo;

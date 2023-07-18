import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';

function Exercise() {
  const [ExerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.odcloud.kr/api/15068730/v1/uddi:2dd1a2cb-6030-48a2-980d-c31f0cc18b6c?page=1&perPage=10&returnType=JSON&serviceKey=4tizpLwbVSjS3YtSR46gwWJ6G%2BKnUD1ZfsoeHvlkFeeJwzXDOHL8E85hMJ1F5yn2c6bQH5BrxqIBfNnwLl8TJQ%3D%3D'
      )
      .then((response) => {
        console.log(response.data); // 받은 데이터 확인
        setExerciseData(response.data); // 받은 데이터로 운동 상태 업데이트
      })
      .catch((error) => {
        console.log('에러:', error);
      });
  }, []);

  //괄호 주의
  return (
    <div>
      {ExerciseData.data.map((item, i) => (
        <div key={i}>
          <p>운동명: {item['운동명']}</p>
          <p>MET계수: {item['MET계수']}</p>
        </div>
      ))}
    </div>
  );
}

export default Exercise;
//{[...ExerciseData]}

// 헬스장 위치 검색

import React, { useState } from 'react';
import MapContainer from './MapContainer';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <>
    
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="지역과 헬스장이름 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </div>
    </>
  );
}

export default LandingPage;

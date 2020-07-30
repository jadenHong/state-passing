import React, { useState } from 'react';
import './index.css';

const Counter = ({ count }) => {
  console.log(count);
  return <div>카운터: {count} </div>
}

const Controls = ({plus, minus}) => {
  return (
    <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
  )
}

const WelcomeMessage = ({ isMobile }) => {
  // 모바일 기기에서 볼경우에는 '안녕하세요 모바일'
  // 데스크탑에서는 '안녕하세요 데스크탑' 출력해보세요
  
  // const renderMobile = () =>  <h2>안녕하세요 모바일</h2>
  // const renderDesktop = () => <h2>안녕하세요 데스크탑</h2>
  // return (
  //   width < 400 ? 
  // <h2>안녕하세요 모바일</h2> : <h2>안녕하세요 데스크탑</h2>
  //   )

  const textStyle = {
    color: isMobile ? 'red' : 'blue'
  }
  return (
  <h2 style={textStyle}>안녕하세요 {isMobile ? '모바일' : '데스크탑'}</h2>
  )
}

const App = () => {

  const [count, setCount] = useState(0);
  const isMobile = window.innerWidth < 400; // 이렇게되면 스크린 사이즈가 400픽셀 이하일때만 트루가 되겟죠

  // 디폴트 1입니다 만약에 함수가 inCrease() 이런식으로 파라미터 없이 콜 됐을때 1을 쓰라는 의미죠
  // 여기서 함수 정의하신거있죠
  const inCrease = (increaseBy = 1) => {
    setCount(count + increaseBy);
  }

  const deCrease = (decreaseBy = 1) => {
    setCount(count - decreaseBy);
  }


  return (
    // 여기 이 div전체가 부모 -> App.js
    <div>
      {/* 자식들 */}
      <WelcomeMessage isMobile={isMobile}/>
      <Counter count={count} /> 
      {/* 여기서는 함수에 파라미터 따로 주지않았죠? 그렇기때문에 함수에선 디폴트값으로 정해진 1을 쓸거에요 */}

      {/* 프롭에 들어가는 함수가 파라미터를 받으면 새로운 콜백함수를 생성!!!!(() => {})
      파라미터를 받지 않는다면 그냥 함수명만 쓰기 (inCrease) */}

      {/*  저 함수들이 여기 그대로 직접 쓰이는게 아니라 엄밀히 따지면  */}
      {/* 새로운 함수를 생성해서 그 새로운 함수가 저 위에 인크리즈 디크리즈를 콜하게 되는거에요 */}
      {/* () => {} <-- 새로운 함수 생성, () => { inCrease() } <- 새로운 함수 바디 내에서 인크리즈 함수를 콜 */}
      {/* 쉽게 말하면 앞으로 프롭에서 이런 패턴이보인다 -> 렌더마다 그 함수가 새로 생성되는거라고 기억하시면됨 */}
      {/* <Component prop={() => { somefunction() } } -> 이런패턴.. */}
      {/* 컴포넌트에서 프롭으로 함수콜하는게 만약에 안되면 콜백으로 바꿔서 [ () => {} 이패턴] 해보세요 거의 다 됩니다 */}
      <Controls plus={() => inCrease()} minus={() => deCrease()}/>
      <Controls plus={() => inCrease(5)} minus={() => deCrease(5)} />
    </div>
  )
}

export default App;
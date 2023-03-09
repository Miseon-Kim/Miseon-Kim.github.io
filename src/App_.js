// import logo from './logo.svg';
import './scss/App.scss';
import React, { useState } from 'react';

function App() {
  const [글제목, setTitChange] = useState(['가 글제목1', '다 글제목2', '나 글제목3']);
  const [날짜, setDateIn] = useState(['2023-03-07 09:00', '2023-03-07 08:30', '2023-03-07 08:00']);
  const [좋아요, setGood] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [date, setDate] = useState(0);
  

  return (
    <div className="App">
      <header>
        <p>BLUEWEBD™</p>
      </header>
      <div className="btnWrap">
        <span className="btn type1" role="button" onClick={()=>{
          /*
          글제목[0] = '글제목 변경됨1'; // 원본 데이터를 영구적으로 수정함
          titChange(글제목)
          위 함수 실행하지 않음. 이유는 새로운 array로 인식하지 않기 때문.
          */
          
          const copy = [...글제목]; // array나 object 자료형을 복사할 때 독립적 자료형으로 인식할 수 있도록 ...을 적용해준다.
          copy[0] = '글제목변경';
          setTitChange(copy)
          
        }}>제목변경</span>
        <span className="btn type1" role="button" onClick={()=>{
          const 제목정렬 = [...글제목];
          제목정렬.sort();
          setTitChange(제목정렬) 
        }}>가나다정렬</span>
        
        {/* <span className="btn type1" role="button" onClick={ () => {
          글제목[0] = '글제목 변경됨1'; // 원본 데이터를 영구적으로 수정함
          titChange(글제목)
          // 제목변경(['글제목 변경됨1', '글제목 변경됨2', '글제목 변경됨3']);
          
          let copy = 글제목;
          copy[0] = '글제목 변경됨1'
          제목변경(copy);

        } }>제목변경</span> */}
      </div>
      <ul className="item-lst">
        {
          글제목.map(function(a, i){
            // a는 array의 값, i는 array의 정수(숫자-0,1,2)
            // { a } 또는 { 글제목[i] }로 적용가능
            return(
              <li key={i}>
                <dl className="item-group">
                  <dt>
                    <div className="tit" role="button" onClick={()=>{
                      // var modalTit = [...글제목];
                      // modalTit[i] = modalTit[i] + 1;
                      // setTitle(modalTit);
                      // setModal(!modal); // !를 통해서 show/hide 상태를 체크
                      setModal(true); setTitle(i); setDate(i);                
                    }}>{ a }</div>
                    <div className="item-good">
                      <span className="btn" role="button" onClick={ () => {
                        // setGood(좋아요 +1);
                        const good = [...좋아요];
                        good[i] = good[i] + 1;
                        setGood(good);
                      } }>👍</span> {좋아요[i]}
                    </div>
                    <div className="item-mod">                
                      
                    </div>
                  </dt>
                  <dd>{날짜[i]} 발행</dd>
                </dl>
              </li>
            )
          })
        }
        {/* <li>
          <dl className="item-group">
            <dt>
              <div className="tit">{글제목[0]}</div>
              <div className="item-good">
                <span className="btn" role="button" onClick={ () => {
                  setGood(좋아요 +1);
                } }>👍</span> {좋아요}
              </div>
              <div className="item-mod">                
                
              </div>
            </dt>
            <dd>{날짜[0]} 발행</dd>
          </dl>
        </li>
        <li>
          <dl className="item-group">
          <dt>
              <div className="tit">{글제목[1]}</div>
              <div className="item-good">
                <span className="btn" role="button" onClick={ () => {
                  setGood(좋아요 +1);
                } }>👍</span> {좋아요}
              </div>
            </dt>
            <dd>{날짜[1]} 발행</dd>
          </dl>
        </li>
        <li>
          <dl className="item-group">
          <dt>
              <div className="tit" role="button" onClick={()=>{
                // if(modal === true){
                //   setModal(false)
                // } else {
                //   setModal(true)
                // }
                setModal(!modal)
                
              }}>{글제목[2]}</div>
              <div className="item-good">
                <span className="btn" role="button" onClick={ () => {
                  setGood(좋아요 +1);
                } }>👍</span> {좋아요}
              </div>
            </dt>
            <dd>{날짜[2]} 발행</dd>
          </dl>
        </li> */}
      </ul>

      {
        // 조건식 작성은 삼항연산자
        // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
        modal === true ?  <Modal title={title} date={date} 날짜={날짜} 글제목변경={setTitChange} 글제목={글제목} /> : null
      }

      {/* <Modal /> */}

      
    </div>
  );
}

// const Modal = () => {}

function Modal(props){
  return(
    <>
    <div className="modal">
        <h2 className="cont-tit">
          {props.글제목[props.title]}
          {/* {props.글제목[0]} */}
        </h2>

        <div className="cont-desc">
          <p>{props.날짜[props.date]}</p>
          <p>상세내용</p>
        </div>

        <div className="btnWrap">
          <span className="btn type1" role="button" onClick={()=>{
            // props.글제목변경(['제목1', '제목2', '제목3']);
            const copy = [...props.글제목];
            copy[0] = "제목변경1"
            
            props.글제목변경(copy);
          
          }}>글수정</span>
        </div>

      </div>
    </>
    
  )
}

export default App;

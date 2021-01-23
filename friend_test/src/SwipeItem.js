import React from "react";
import styled from "styled-components";
import img from "./pat.png";

const SwipeItem = React.memo(({ onSwipe }) => {
  const swipe_div = React.useRef();

  let swipe_status = "ready"; // swipe 기본 상태 설정
  let target_classname = ""; // 이벤트가 발생했을 때 줄 클래스
  let coordinate = {
    // 시작 좌표 설정
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  };

  // useEffect Hook
  React.useEffect(() => {
    // 리셋값 설정
    const reset = () => {
      swipe_status = "ready";
      coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0,
      };

      swipe_div.current.className = target_classname;
      swipe_div.current.style.left = `${0}px`;
      swipe_div.current.style.top = `${0}px`;
    };

    const touchStart = (e) => {
      swipe_status = "touchstart";
      target_classname = swipe_div.current.className;

      // 터치 시작 시 좌표 저장
      coordinate = {
        ...coordinate,
        start_x: e.touches[0].clientX,
        start_y: e.touches[0].clientY,
      };
    };
    const touchEnd = (e) => {
      swipe_status = "touchend";

      // touchStart로 인해 변경된 값을 구하는 changeTouches[]
      coordinate = {
        ...coordinate,
        end_x: e.changedTouches[0].clientX,
        end_y: e.changedTouches[0].clientY,
      };

      // x 좌표 이동 거리 구하기
      let diff_x = coordinate.end_x - coordinate.start_x;
      let direct = "left";

      // Math.abs() 메서드는 절대값을 구함
      if (Math.abs(diff_x) > 50) {
        swipe_div.current.className = `${target_classname} swipe`;
      }

      // 움직인 방향에 transition 추가
      if (diff_x > 0) {
        direct = "right";
        swipe_div.current.style.left = `${diff_x + 150}px`;
        swipe_div.current.style.opacity = 0;
      } else {
        direct = "left";
        swipe_div.current.style.left = `${diff_x - 150}px`;
        swipe_div.current.style.opacity = 0;
      }

      // 3초 후 reset
      window.setTimeout(() => {
        reset();
        onSwipe(direct);
      }, 300);
    };
    const touchMove = (e) => {
      // swipe 중 다른 이벤트 방지
      e.preventDefault();

      // 현재 이동 중인 좌표
      let current_coordinate = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      // 터치 중일 때 div가 따라 움직임
      swipe_div.current.style.left = `${
        current_coordinate.x - coordinate.start_x
      }px`;
      swipe_div.current.style.top = `${
        current_coordinate.y - coordinate.start_y
      }px`;
    };

    // 터치 이벤트가 취소될 경우 원상태로 reset
    const touchCancle = (e) => {
      swipe_status = "cancle";
      reset();
    };

    swipe_div.current.addEventListener("touchstart", touchStart);
    swipe_div.current.addEventListener("touchend", touchEnd);
    swipe_div.current.addEventListener("touchmove", touchMove);
    swipe_div.current.addEventListener("touchcancle", touchCancle);

    // 이벤트 해제
    return () => {
      if (!swipe_div.current) {
        return;
      }
      swipe_div.current.removeEventListener("touchstart", touchStart);
      swipe_div.current.removeEventListener("touchend", touchEnd);
      swipe_div.current.removeEventListener("touchmove", touchMove);
      swipe_div.current.removeEventListener("touchcancle", touchCancle);
    };
  }, []);

  return (
    <DragItem ref={swipe_div}>
      <img src={img} alt="pat" />
    </DragItem>
  );
});

SwipeItem.defaultProps = {
  onSwipe: () => {},
};

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &.swipe {
    transition: 300ms;
  }
  & > div {
    text-align: center;
    width: 170px;
    background-color: #ffd6aa;
    border-radius: 50%;
  }
  & img {
    max-width: 120px;
    opacity: 95%;
  }
`;

export default SwipeItem;

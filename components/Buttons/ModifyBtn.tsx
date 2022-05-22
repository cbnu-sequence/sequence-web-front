import React from 'react';
import { ModifyButton } from "./styles";

export function ModifyBtn(props) {
  const [position] = {right, center, left};
  const right {
    display: inline-block; 
    float: right;
  }

    return (
    //<ModifyButton position={props}>글쓰기</ModifyButton>
      <div className="writeButton">
        <ModifyButton>수정</ModifyButton>;
        <position = {props} />
      </div>
    )
}

export default ModifyBtn;
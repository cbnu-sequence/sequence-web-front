import React from 'react';
import { DeleteButton } from "./styles";

const position = (props) => (
    {props.position}
  )

function DeleteBtn() {
        return (
        <DeleteButton>삭제</DeleteButton>
        );
}

export default DeleteBtn;
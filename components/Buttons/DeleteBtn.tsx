import React from 'react';
import { DeleteButton } from "./styles";

function DeleteButton() {
    const [isToggled, setIsToggled] = useState(false);
    const [userToggled, setUserToggled] = useState(false);
    const { user: me } = useUser();
}


export function DeleteBtn() {
    return <DeleteButton isToggled={isToggled} userToggled={userToggled}>
        삭제</DeleteButton>;
}

export default DeleteBtn;
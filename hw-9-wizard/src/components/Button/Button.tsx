import React, {FC} from 'react';
import './Button.css'

interface IButtonProps {
    destiny: string,
    clickCallback: () => void;
    disabled: boolean;
}

const Button: FC<IButtonProps> = (props)=> {
        return (
            <button onClick={props.clickCallback} disabled={props.disabled}
                    type="button">{props.destiny}</button>
        )

};

export default Button;
import styled, { withTheme } from "styled-components";
import { useState } from "react";
import Sun from './Sun';
import Moon from './Moon';

const ToggleWrap = styled.div`
    position: fixed;
    top: 24px;
    right: 48px;
    z-index: 5;
    display: grid;
    grid-template-columns: 25px 50px 18px;
    grid-gap: 12px;
    align-items: center;

    svg {
        &:first-of-type {
            height: 25px;
        }

        &:last-of-type {
            height: 18px;
        }
    }

    @media (max-width: 734px) {
        top: 12px;
        right: 24px;
    }
`

const Checkbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label:after {
        left: calc(100% - 1.5px);
        transform: translateX(-100%);
    }
`

const Label = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: ${(props) => props.theme.colors.start1};
    display: block;
    border-radius: 100px;
    position: absolute;
    top: 0;
    border: 1px solid rgb(${(props) => props.theme.text});
    transition: border 300ms;

    &:after {
        content: '';
        position: absolute;
        top: 1.25px;
        left: 1.25px;
        width: 20.25px;
        height: 20.25px;
        background: rgb(${(props) => props.theme.text});
        border-radius: 90px;
        transition: 0.3s;
    }
`

const Check = styled.div `
    height: 25px;
    position: relative;
`

const Toggle = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const { themePicker } = props;

    const handleChange = () => {
        setIsChecked(!isChecked);

        let theme = isChecked === true ? 'light' : 'dark';
        themePicker(theme);
    }

    return (
        <ToggleWrap>
            <Sun/>
            <Check>
                <Checkbox type="checkbox" checked={isChecked} id="switch" onChange={handleChange}/>
                <Label htmlFor="switch">Toggle Light and Dark Modes</Label>
            </Check>
            <Moon />
        </ToggleWrap>
    )
}

export default withTheme(Toggle);
import styled from "styled-components"

const SunSvg = styled.svg`
    fill: rgb(${(props) => props.theme.text});
`
const Sun = (props) => {
    return (
        <SunSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M15 3v5h2V3ZM7.5 6.094 6.094 7.5l3.531 3.563 1.438-1.438Zm17 0-3.563 3.531 1.438 1.438L25.906 7.5ZM16 9c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7Zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5ZM3 15v2h5v-2Zm21 0v2h5v-2ZM9.625 20.938 6.094 24.5 7.5 25.906l3.563-3.531Zm12.75 0-1.438 1.437 3.563 3.531 1.406-1.406ZM15 24v5h2v-5Z"/>
        </SunSvg>
    )
}

export default Sun;
import styled from "styled-components"

const MoonSvg = styled.svg`
    path {
        fill: rgb(${(props) => props.theme.text});
    }

    height: 20px;
`

const Moon = (props) => {
    return (
        <MoonSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281 288">
            <path d="M48 101.5C48 180.2 111.8 244 190.5 244c34.155 0 65.504-12.016 90.05-32.052-6.521 11.496-14.683 22.317-24.484 32.118-58.579 58.579-153.553 58.579-212.132 0-58.579-58.579-58.579-153.553 0-212.132C57.611 18.257 73.272 7.774 89.99.484 64.054 26.292 48 62.02 48 101.5Z" fillRule="evenodd"/>
        </MoonSvg>
    )
}

export default Moon;
import styled from "styled-components";

const ListItem = styled.li`
    svg {
        width: 60px;
        transition: width 150ms ease-in-out;
    }

    img {
        transition: transform 150ms ease-in-out;
    }
    padding: 0 12.5px;
    position: relative;

    @media (max-width: 734px) {
        svg {
            width: 50px;
        }

        img {
            width: 50px;
            height: 50px;
        }

        padding: 10px 10px 0px 10px;
    }

    &:first-of-type {
        padding-left: 0;

        @media (max-width: 734px) {
            padding-left: 10px;
        }
    }

    &:last-of-type {
        padding-right: 0;

        @media (max-width: 734px) {
            padding-right: 10px;
        }
    }

    &:hover,
    &:focus {
        svg {
            width: calc(60px * 1.1);
        }

        img {
            transform: scale(1.1);
            transform-origin: bottom;
        }

        @media (max-width: 734px) {
            svg {
                width: 50px;
            }

            img {
                transform: scale(1);
            }
        }

        &:after {
            opacity: 1;
        }
    }

    &:after {
        content: '•';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -30px;
        font-size: 2em;
        opacity: 0;
        color: rgb(${(props) => props.theme.dockColor});
        text-align: center;
        transition: opacity 500ms;

        @media (max-width: 734px) {
            content: none;
        }
    }

    &:first-of-type:after,
    &:last-of-type:after {
        width: calc(100% - 12.5px);
    }

    &:last-of-type:after {
        padding-left: 12.5px;
    }
`
export default ListItem;
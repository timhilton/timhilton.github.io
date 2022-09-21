import styled from "styled-components";

const ListItem = styled.li`
    svg {
        width: 80px;
        transition: width 150ms ease-in-out;
    }
    padding: 0 12.5px;
    position: relative;

    @media (max-width: 734px) {
        svg {
            width: 50px;
        }

        padding: 0 10px;
    }

    &:first-of-type {
        padding-left: 0;
    }

    &:last-of-type {
        padding-right: 0;
    }

    &:hover,
    &:focus {
        svg {
            width: calc(80px * 1.05);
        }

        @media (max-width: 734px) {
            svg {
                width: calc(50px * 1.1);
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
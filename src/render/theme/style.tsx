import styled from 'styled-components';
export const ThemeChangeWraper = styled.div`
    position: fixed;
    bottom: 50px;
    right: 30px;
    background-color: var(--dropdown-bg);
    box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    svg {
        width: 24px;
        flex-shrink: 0;
        fill: var(--them-change-fill);
        stroke: var(--them-change-stroke);
        transition: 0.5s;
    }
`
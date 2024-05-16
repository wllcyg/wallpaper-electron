import styled from 'styled-components';
export const SliderWrapper = styled.div`
    flex-basis: 240px;
    border-right: 1px solid var(--border-color);
    padding: 24px;
    overflow: auto;
    flex-shrink: 0;
    .side-menu {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        font-family: var(--body-font);
        a {
            text-decoration: none;
            color: var(--theme-color);
            display: flex;
            align-items: center;
            font-weight: 400;
            padding: 10px;
            font-size: 14px;
            border-radius: 6px;
            transition: 0.3s;
            &:hover {
                background-color: var(--hover-menu-bg);
            }
            cursor: pointer;
        }
        svg {
            width: 16px;
            margin-right: 8px;
        }
    }
`
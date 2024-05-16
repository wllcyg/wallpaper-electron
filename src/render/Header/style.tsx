import styled from 'styled-components';
export const HeaderContainer = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 50px;
    padding: 0 30px;
    white-space: nowrap;
    @media screen and (max-width: 480px) {
        padding: 0 16px;
    }
    .logo{
        display: flex;
        align-items: center;
        color: var(--theme-color);
        font-family: var(--body-font);
        svg{
            margin-right: 12px;
        }
    }
    .drag-area{
        flex: 1;
        -webkit-app-region: drag;
        height: 100%;
    }
`;
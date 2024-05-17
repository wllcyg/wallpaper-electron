import styled from 'styled-components';

export const DrawContainer = styled.div`
    .draw{
        top: 54px;
        right: 0;
        bottom: 0;
        width: calc(100vw - 290px);
        position: fixed;
        transform: translateX(100%);
        transition: transform 0.3s;
        display: flex;
    }
    .mask{
        background-color: rgba(0, 0, 0, 0.5);
        flex: 1;
    }
    .content{
        width: 500px;
        background-color: #f7f7f7;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    .active {
        transform: translateX(0);
    }
`;
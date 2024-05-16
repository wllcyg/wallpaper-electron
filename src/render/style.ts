import styled from 'styled-components';

export const MainContainer = styled.div`
    .inner{
       height: calc(100vh - 50px);
        display: flex;
        flex-grow: 1;
        overflow: hidden;
        .main{
            flex: 1;
            padding: 24px;
            overflow: auto;
        }
    }
`
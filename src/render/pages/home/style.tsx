import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-gap: 20px;
    
    .app-card {
            
        font-size: 16px;
        background-color: var(--content-bg);
        border-radius: 14px;
        border: 1px solid var(--theme-bg-color);
        padding: 20px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
            transform: scale(1.02);
            background-color: var(--theme-bg-color);
        }
        .title{
            font-weight: bold;
            font-size: 20px;
        }
        .img-dsc{
            display: flex;
            justify-content: space-between;
            .option-btn{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                .content-button {
                    background-color: #3a6df0;
                    border: none;
                    padding: 8px 26px;
                    color: #fff;
                    border-radius: 20px;
                    margin-top: 16px;
                    cursor: pointer;
                    transition: 0.3s;
                    white-space: nowrap;
                }
                .content-button:hover {
                    background-color: #2a5cd4;
                }
            }

            img{
                width: 40%;
                margin-top: 12px;
                filter: blur(2px);
                transition: 0.3s ease;
                border-radius: 10px;
                &:hover {
                    filter: blur(0);
                }
            }
        }

            
    }


`;
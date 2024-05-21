import styled from 'styled-components';

export const ModalWrapper = styled.div`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 300ms;
    }
    .modal-overlay.modal-enter-done {
        opacity: 1;
    }
    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 4px;
        position: relative;
        width: 500px;
        max-width: 100%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transform: scale(0.9);
        transition: transform 300ms;
        min-height: 300px;
    }
    .modal-content.modal-enter-done {
        transform: scale(0.1);
    }
    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    .modal-enter {
        opacity: 0;
        transform: scale(0.9);
    }

    .modal-enter-active {
        opacity: 1;
        transform: scale(1);
    }

    .modal-exit {
        opacity: 1;
        transform: scale(1);
    }

    .modal-exit-active {
        opacity: 0;
        .modal-content {
            transform: scale(0.1);
        }
    }


`
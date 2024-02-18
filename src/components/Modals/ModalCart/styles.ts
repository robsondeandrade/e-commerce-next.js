import styled from 'styled-components'

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: flex-end;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
    width: 486px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: -5px 0px 6px 0px #00000021;
    display: flex;
    flex-direction: column;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CloseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
    margin: 39px 22px;
    background-color: ${({ theme }) => theme.colors.tertiary};
`

export const CloseIcon = styled.h2`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 28px;
    font-weight: 400;
    padding-bottom: 5px;
`

export const TitleModal = styled.h2`
    font-size: 27px;
    font-weight: 700;
    text-align: left;
    margin: 36px 47px;
`

export const Description = styled.h2`
    font-size: 16px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    margin: 36px 20px 0 47px;
`

export const FooterContent = styled.div`
    width: 486px;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.error};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    bottom: -1px;
    border: none;
`

export const ContentBotton = styled.button`
    width: 486px;
    height: 75px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    border: none;
    margin-bottom: 0;
    cursor: pointer;
`

export const ContentValue = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 16px;
    @media (max-width: 480px) {
        justify-content: center;
        gap: 20px;
        margin-left: 10px;
    }
`

export const ValueCurrency = styled.span`
    font-size: 24px;
    font-weight: 700;
`

export const FinishPurchase = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 24px;
    font-weight: 700;
    line-height: 15px;
    margin: auto;
`

export const BodyContent = styled.div`
    overflow-y: auto;
    flex: 1;
    max-height: calc(100vh - 260px);
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.secondary} transparent;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`

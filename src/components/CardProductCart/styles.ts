import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    position: relative;
    width: 379px;
    height: 110px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin: 5px auto 28px;
    box-shadow: -2px 2px 10px 0px #0000000d;

    @media (max-width: 480px) {
        width: 359px;
    }
`

export const Content = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
`

export const Image = styled.img`
    max-width: 80px;
    max-height: 80px;
`

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding-right: 20px;
`

export const BoxValue = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px 0 10px;
    justify-content: space-between;
`

export const Typography = styled.span`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    margin-right: 12px;
`

export const ContainerQuantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: -10px;
    gap: 2px;
`

export const ContentQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    & > * {
        flex: 1;
        text-align: center;
        border-right: 0.3px solid ${({ theme }) => theme.colors.gray[200]};
        &:last-child {
            border-right: none;
        }
    }
`

export const TypographyValue = styled.span<{
    $isDisabled?: boolean
}>`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 14px;
    font-weight: 400;
    margin: auto;
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
`

export const SpanQuantidy = styled.span`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 8px;
    font-weight: 400;
    line-height: 6px;
`

export const Amount = styled.span`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    @media (max-width: 480px) {
        margin-left: 30px;
    }
`

export const CloseButton = styled.div`
    position: absolute;
    right: -27px;
    top: -43px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    margin: 39px 22px;
    background-color: ${({ theme }) => theme.colors.tertiary};
`

export const CloseIcon = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 3px;
`

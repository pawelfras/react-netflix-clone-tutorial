import styled from 'styled-components/macro';

const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => {
        return direction;
    }};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default Inner;

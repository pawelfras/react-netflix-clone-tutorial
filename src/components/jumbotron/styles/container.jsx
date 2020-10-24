import styled from 'styled-components/macro';
import Item from './item';

const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export default Container;

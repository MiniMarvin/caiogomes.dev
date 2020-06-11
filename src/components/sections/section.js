import styled from 'styled-components';

const Section = styled.section`
    overflow: hidden;
    width: auto;
    max-width: 100vw;
    /* max-height: 468px; */
    max-height: 80vh;
    padding: 30px 15px 0px 15px;

    @media (min-width: 420px) {
        padding: 30px 30px 0px 30px
    };

`;

export default Section;
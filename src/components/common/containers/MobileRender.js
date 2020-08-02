import styled from 'styled-components';
import theme from '../../../theme';

const MobileOnlySpan = styled.span`
  @media (min-width: ${theme.limitSize}px) {
  display: none;
  }
`;

const DesktopOnlySpan = styled.span`
  @media (max-width: ${theme.limitSize}px) {
    display: none;
  }
`;

const MobileOnlyDiv = styled.div`
  @media (min-width: ${theme.limitSize}px) {
  display: none;
  }
`;

const DesktopOnlyDiv = styled.div`
  @media (max-width: ${theme.limitSize}px) {
    display: none;
  }
`;


export {MobileOnlySpan, DesktopOnlySpan, MobileOnlyDiv, DesktopOnlyDiv};
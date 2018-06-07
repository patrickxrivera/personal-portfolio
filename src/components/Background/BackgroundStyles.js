import styled, { keyframes } from 'styled-components';
import { ChevronDown } from 'react-feather';

const fade = keyframes`
  from {
    opacity: 0;
    margin-top: 19rem;
  }

  to {
    opacity: 1;
    margin-top: 21rem;
  }
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
`;

export const Heading = styled.div`
  text-align: center;
  font-size: 3rem;
`;

export const SubHeading = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  width: 600px;
  text-align: center;
`;

export const ChevronIcon = styled(ChevronDown)`
  width: 50px;
  height: 50px;
  animation: ${fade} 1.2s ease-out infinite;

  &:hover {
    color: #96ffca;
    transition: 80ms ease;
    cursor: pointer;
  }
`;

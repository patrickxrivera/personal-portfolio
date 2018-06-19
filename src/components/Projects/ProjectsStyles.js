import styled from 'styled-components';

import { fadeInUp } from '../../utils/animations';

export const Wrapper = styled.div`
  padding-top: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 400ms 250ms ease-out forwards;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-auto-rows: minmax(100px, 300px);
  justify-content: center;
  margin: 0 6rem;
`;

export const ProjectWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  justify-content: space-between;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 1rem;
`;

export const TitleText = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 6px;
`;

export const Description = styled.span`
  text-align: center;
  font-weight: 300;
  margin: 2rem 0 1rem;
`;

export const Stack = styled.span`
  text-align: center;
  font-weight: 300;

  margin-bottom: 1.5rem;
`;

export const Links = styled.div`
  display: flex;
  width: 60px;
  justify-content: ${({ website }) => (website === null ? 'center' : 'space-between')};
`;

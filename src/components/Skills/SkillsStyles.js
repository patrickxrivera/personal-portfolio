import styled from 'styled-components';

import { fadeInUp } from '../../utils/animations';
import media from '../../utils/mediaTemplate';

export const Wrapper = styled.div`
  padding-top: 5rem;
  opacity: 0;
  animation: ${fadeInUp} 400ms 250ms ease-out forwards;

  ${media.tablet`padding-top: 2rem;`};
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8rem;

  ${media.tablet`flex-direction: column;`};
  ${media.tablet`justify-content: center;`};
  ${media.tablet`align-items: center;`};
`;

export const Column = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  max-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;

  ${media.tablet`margin-bottom: 2rem;`};

  ${media.phone`padding: 2rem 1rem;`};
  ${media.phone`min-width: 270px;`};
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 1.25rem 0;
`;

export const Description = styled.span`
  font-weight: 300;
  text-align: center;
`;

export const ToolkitTitle = styled.span`
  color: rgb(140, 67, 255);
  margin: 2rem 0 1.25rem;
  font-size: 1.25rem;
`;

export const ToolkitItem = styled.div`
  font-weight: 300;
  text-align: center;
  margin: 0.2rem 0;
`;

import styled from 'styled-components';

import { fadeInUp } from '../../utils/animations';
import media from '../../utils/mediaTemplate';

export const Wrapper = styled.div`
  padding-top: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 400ms 250ms ease-out forwards;

  ${media.tablet`margin-bottom: 3rem;`};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: ${({ hasGif }) => (hasGif === null ? 'center' : 'space-between')};
  width: 1100px;
  margin: 0 auto 3rem;

  ${media.phone`width: 100vw;`};
  ${media.phone`flex-direction: column;`};
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 6rem;

  ${media.phone`margin: 0 auto;`};
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
  width: 400px;

  ${media.phone`padding: 2rem 1rem;`};
  ${media.phone`width: 240px;`};
  ${media.phone`margin: 0 auto 1rem;`};
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 1rem;

  ${media.phone`text-align: center;`};
  ${media.phone`width: 100%;`};
  ${media.phone`justify-content: center;`};
  ${media.phone`margin-left: 0;`};
`;

export const TitleText = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 6px;

  ${media.phone`font-size: 1.1rem;`};
`;

export const Description = styled.span`
  text-align: center;
  font-weight: 300;
  margin: 2rem 0 1rem;

  ${media.phone`font-size: 14px;`};
`;

export const Stack = styled.span`
  text-align: center;
  font-weight: 300;
  margin-bottom: 1.5rem;

  ${media.phone`font-size: 14px;`};
`;

export const Image = styled.img`
  width: 50px;
  height: 35px;
`;

export const Links = styled.div`
  display: flex;
  width: 60px;
  justify-content: ${({ website }) => (website === null ? 'center' : 'space-between')};
`;

import styled from 'styled-components';

import { fadeInUp } from '../../utils/animations';
import media from '../../utils/mediaTemplate';

export const Wrapper = styled.div`
  padding-top: 3rem;
  opacity: 0;
  animation: ${fadeInUp} 400ms 250ms ease-out forwards;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  min-width: 300px;
  max-width: 720px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 2rem;

  ${media.phone`margin: 0 10px 2rem;`};
`;

export const Headline = styled.div`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.2px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 2rem auto;
`;

export const Icon = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: rgb(140, 67, 255);
    transition: 80ms ease-in forwards;
    cursor: pointer;
  }
`;

export const icon = {
  margin: '0 .5rem'
};

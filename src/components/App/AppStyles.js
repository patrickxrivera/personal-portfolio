import styled, { injectGlobal } from 'styled-components';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  color: #fff;
  margin: 0 2rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
    sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.35;
`;

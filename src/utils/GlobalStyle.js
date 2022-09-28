import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7ecf2;
}
ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
h1,
h2,
h3,
h4 {
  margin: 0;
}
p {
  margin: 0;
}
.gap {
  &-15 {
    gap: 15px;
  }
}
.loaderStyle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 1101;
}
`;

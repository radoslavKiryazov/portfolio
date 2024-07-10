import { styled, css } from "styled-components";

export const ShellImage = styled.img(
  () => css`
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
  `
);

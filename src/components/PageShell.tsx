import scanLines from "../assets/scanlines.png";
import terminalBezel from "../assets/bezel.png";
import { ShellImage } from "../atoms/atoms";
import { styled, css } from "styled-components";
import { ReactNode, FC } from "react";

interface PageShellProps {
  children: ReactNode;
}

const PageShell: FC<PageShellProps> = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <ShellImage src={terminalBezel} />
      <ShellImage src={scanLines} />
      <Content>{children}</Content>
    </Wrapper>
  );
};
const Content = styled.div(
  () => css`
    display: flex;
    max-width: 105rem;
    height: 50rem;
    margin-top: 5rem;
    margin-left: 8rem;
    font-size: 20px;
    margin-bottom: 5rem;
  `
);

const Wrapper = styled.div(
  () => css`
    background: green;
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 100vh;
  `
);
export default PageShell;

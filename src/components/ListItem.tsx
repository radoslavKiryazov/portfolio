import { styled, css } from "styled-components";
import { forwardRef } from "react";

interface ListItemProps {
  title: string;
}

const ListItem = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const { title } = props;
  return (
    <Wrapper tabIndex={0} ref={ref}>
      {title}
    </Wrapper>
  );
});

const Wrapper = styled.div(
  () => css`
    cursor: pointer;
    font-size: 50px;
    &:focus {
      background-color: pink;
    }
  `
);
export default ListItem;

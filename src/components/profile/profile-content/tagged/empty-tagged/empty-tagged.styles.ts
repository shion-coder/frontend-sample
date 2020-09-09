import styled from 'styled-components';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

/* -------------------------------------------------------------------------- */

type TextProps = {
  bold?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  grid-column: span 3;
`;

export const Icon = styled(AccountBoxOutlinedIcon)`
  font-size: 3rem;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Text = styled.p<TextProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

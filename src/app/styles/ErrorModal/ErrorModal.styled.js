import styled from 'styled-components';

export const ErrorModalStyled = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  color: red;
  text-transform: capitalize;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  transition: transform 0.5s ease-in;
  transform: translateY(
    ${({ display }) => (display === 'true' ? '0%' : '100%')}
  );
`;

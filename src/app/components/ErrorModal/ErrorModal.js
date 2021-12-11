import { ErrorModalStyled } from '../../styles/ErrorModal/ErrorModal.styled';

export const ErrorModal = ({ errorMessage, show }) => {
  const message = errorMessage;
  return (
    <ErrorModalStyled display={show}>
      <p aria-live="polite">{message}</p>
    </ErrorModalStyled>
  );
};

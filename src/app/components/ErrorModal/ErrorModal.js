import { ErrorModalStyled } from '../../styles/ErrorModal/ErrorModal.styled';

export const ErrorModal = ({ errorMessage, show }) => {
  if (!show) return null;

  return (
    <ErrorModalStyled>
      <p>{errorMessage}</p>
    </ErrorModalStyled>
  );
};

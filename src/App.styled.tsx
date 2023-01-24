import styled from 'styled-components';
import device from './styles/utils/device';

const App = styled.div`
  width: 90%;
  max-width: 76rem;
  margin: 0 auto;

  & > *:not(:last-child) {
    margin-block-end: 3rem;
  }

  @media screen and ${device.tablet} {
    margin-block-start: 5rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const UnitButton = styled.button`
  --background: var(--white);
  border: none;
  background-color: var(--background);
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.8rem;
  letter-spacing: 0.25rem;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;

const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ForecastTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: 100%;
  left: 0;
  color: red;
  text-transform: capitalize;
  font-size: 1.3rem;
  font-weight: 700;
`;

export default {
  App,
  Header,
  UnitButton,
  ForecastContainer,
  ForecastTitle,
  ErrorMessage,
};

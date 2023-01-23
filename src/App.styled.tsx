import styled from 'styled-components';

const App = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const ForecastTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
`;

export default { App, Header, UnitButton, ForecastContainer, ForecastTitle };

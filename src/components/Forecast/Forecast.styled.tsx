import styled from 'styled-components';

const Forecast = styled.figure`
  --background: var(--white);
  background-color: var(--background);
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'icon date temp'
    'icon outlook temp';
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-radius: 10px;
  box-shadow: -5px 7px 5px rgba(0, 0, 0, 0.25);
`;

const Icon = styled.div`
  grid-area: icon;
  margin-right: 1rem;
`;

const Date = styled.div`
  grid-area: date;
  display: flex;
`;

const Outlook = styled.p`
  grid-area: outlook;
`;

const Temperature = styled.div`
  grid-area: temp;
  display: flex;
  justify-self: end;
  align-self: center;
  gap: 1rem;

  img {
    width: 1.2rem;
    margin-right: 0.2rem;
  }

  p {
    display: flex;
    align-items: center;

    &:last-of-type {
      span img {
        transform: rotate(180deg);
      }
    }
  }
`;

export default {
  Forecast,
  Icon,
  Date,
  Outlook,
  Temperature,
};

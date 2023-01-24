import styled from 'styled-components';
import device from '../../styles/utils/device';

const CurrentWeather = styled.section`
  background: linear-gradient(#00a2ff, #005a8e);
  color: white;
  text-align: center;
  padding: 1.7rem 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
  grid-template-areas:
    'location location'
    'icon icon'
    'temp temp'
    'outlook outlook'
    'min-max min-max'
    'wind-humid wind-humid ';
  box-shadow: -5px 7px 5px rgba(0, 0, 0, 0.25);

  @media screen and ${device.tablet} {
    padding: 5rem 0;
    grid-template-areas:
      'icon location'
      'icon temp'
      'icon outlook'
      'icon min-max'
      'icon wind-humid';
    text-align: left;
    gap: 0.6rem;
  }
`;

const Location = styled.p`
  grid-area: location;
  font-weight: 700;
  font-size: 2.4rem;
`;

const Icon = styled.div`
  grid-area: icon;
  img {
    margin: 0 auto;
    width: 6.5rem;
  }

  @media screen and ${device.tablet} {
    img {
      width: 21rem;
    }
    align-self: center;
    justify-self: end;
    margin-right: 5rem;
  }
`;

const Temperature = styled.p`
  grid-area: temp;
`;

const Outlook = styled.p`
  grid-area: outlook;
  text-transform: capitalize;
`;

const MinMaxTemp = styled.div`
  grid-area: min-max;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 2rem;

  @media screen and ${device.tablet} {
    justify-content: flex-start;
  }
`;

const WindHumidContainer = styled.div`
  grid-area: wind-humid;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  img {
    width: 3rem;
  }

  @media screen and ${device.tablet} {
    justify-content: flex-start;
  }
`;

const OtherStat = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  gap: 0.5rem;
`;

export default {
  CurrentWeather,
  Location,
  Icon,
  Temperature,
  Outlook,
  MinMaxTemp,
  WindHumidContainer,
  OtherStat,
};

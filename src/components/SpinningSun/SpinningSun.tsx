import sunIcon from '../../assets/weather-icons/day-clear.svg';
import Styled from './SpinningSun.styled';

const SpinningSun = () => {
  return (
    <Styled.SpinningSun>
      <img
        src={sunIcon}
        alt="loading icon displayed when fetching inital data"
      ></img>
    </Styled.SpinningSun>
  );
};

export default SpinningSun;

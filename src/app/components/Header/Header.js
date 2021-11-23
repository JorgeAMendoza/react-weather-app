import { StyledHeader } from '../../styles/Header/Header.styled';
import { Search } from '../../styles/Header/Search.styled';
import { SearchBar } from '../../styles/Header/SearchBar.styled';
import { SearchIcon } from '../Icons/SearchIcon';
import { DegreeToggleButton } from '../../styles/Header/DegreeToggleButton.styled';

export const Header = ({
  search,
  setSearch,
  unitType,
  setUnitType,
  weatherCall,
}) => {
  const changeUnit = () => {
    setUnitType();
  };
  return (
    <StyledHeader>
      <Search
        onSubmit={(e) => {
          e.preventDefault();
          weatherCall();
        }}
      >
        <SearchBar htmlFor="City Search">
          <SearchIcon />
          <input
            type="text"
            placeholder="city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={(e) => setSearch(e.target.value)}
          />
        </SearchBar>
      </Search>

      <DegreeToggleButton onClick={changeUnit}>{unitType}</DegreeToggleButton>
    </StyledHeader>
  );
};

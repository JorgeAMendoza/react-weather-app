import { StyledHeader } from '../../styles/Header/Header.styled';
import { Search } from '../../styles/Header/Search.styled';
import { SearchBar } from '../../styles/Header/SearchBar.styled';
import { SearchIcon } from '../Icons/SearchIcon';
import { DegreeToggleButton } from '../../styles/Header/DegreeToggleButton.styled';
import { Container } from '../../styles/utils/Container.styled';
import { SearchButton } from '../../styles/Header/SearchButton';

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
    <Container>
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
              placeholder="City..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={(e) => setSearch(e.target.value)}
            />
          </SearchBar>
          <SearchButton>Search</SearchButton>
        </Search>

        <DegreeToggleButton onClick={changeUnit}>
          {unitType} °
        </DegreeToggleButton>
      </StyledHeader>
    </Container>
  );
};

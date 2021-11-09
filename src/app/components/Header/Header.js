import { StyledHeader } from '../../styles/Header/Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Search>
        <SearchBar></SearchBar>
        <SearchButton />
      </Search>

      <DegreeToggleButton />
    </StyledHeader>
  );
};

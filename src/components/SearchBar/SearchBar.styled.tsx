import styled from 'styled-components';

const SearchBar = styled.div`
  width: min(70%, 27rem);
`;

const SearchLabel = styled.label`
  --label-background: var(--white);
  background-color: var(--label-background);
  border-radius: 10px;
  display: flex;
  height: 3.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  input {
    border: none;
    background-color: transparent;
    width: 90%;
    font-weight: 400;
    font-size: 1.5rem;
  }

  span {
    margin-right: 1rem;
    img {
      width: 2.5rem;
    }
  }
`;

export default { SearchBar, SearchLabel };

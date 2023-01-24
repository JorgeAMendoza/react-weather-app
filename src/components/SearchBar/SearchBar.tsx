import { useForm } from 'react-hook-form';
import searchIcon from '../../assets/imgs/search.svg';
import { SubmitHandler } from 'react-hook-form/dist/types';
import loadingSpinner from '../../assets/imgs/loading-circle.gif';
import Styled from './SearchBar.styled';

const cityRegex = /^[A-Za-z.' ]+$/;
const cityStateRegex = /^[A-Za-z.' ]+,\s?[A-Za-z ]+$/;
const whiteSpaceRegex = /^\s+|\s+$/g;

interface SearchFormProps {
  searchQuery: string;
}

interface SearchBarProps {
  setSearch: React.Dispatch<string>;
  isLoading: boolean;
}

const SearchBar = ({ setSearch, isLoading }: SearchBarProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormProps>({
    defaultValues: {
      searchQuery: 'Dallas, Texas',
    },
  });

  const searchGeoLocation: SubmitHandler<SearchFormProps> = (data) => {
    if (cityRegex.test(data.searchQuery)) {
      setSearch(data.searchQuery);
      return;
    } else if (cityStateRegex.test(data.searchQuery)) {
      const cityState = data.searchQuery.split(',');
      cityState[0] = cityState[0].replace(whiteSpaceRegex, '');
      cityState[1] = cityState[1].replace(whiteSpaceRegex, '');

      setSearch(`${cityState[0]},${cityState[1]},US`);
      return;
    }
  };

  return (
    <Styled.SearchBar>
      <form onSubmit={handleSubmit(searchGeoLocation)}>
        <Styled.SearchLabel data-cy="citySearch">
          {isLoading ? (
            <span>
              <img src={loadingSpinner} alt="" />
            </span>
          ) : (
            <span>
              <img src={searchIcon} alt="" />
            </span>
          )}

          <input
            type="text"
            {...register('searchQuery', {
              pattern: /^[A-Za-z.' ]+$|^[A-Za-z.' ]+,\s?[A-Za-z ]+$/gi,
              required: true,
            })}
            aria-invalid={errors.searchQuery ? 'true' : 'false'}
            placeholder="City..."
          />
        </Styled.SearchLabel>
      </form>
    </Styled.SearchBar>
  );
};

export default SearchBar;

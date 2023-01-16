import { useForm } from 'react-hook-form';
import searchIcon from '../../assets/imgs/search.svg';
import { SubmitHandler } from 'react-hook-form/dist/types';

const cityRegex = /^[A-Za-z.' ]+$/;
const cityStateRegex = /^[A-Za-z.' ]+,\s?[A-Za-z ]+$/;
const whiteSpaceRegex = /^\s+|\s+$/g;

interface SearchFormProps {
  searchQuery: string;
}

interface SearchBarProps {
  setSearch: React.Dispatch<string>;
}

const SearchBar = ({ setSearch }: SearchBarProps) => {
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

    console.log('somethign very wrong!');
  };

  return (
    <header>
      <div>
        <div>
          <img src={searchIcon} alt="" />
        </div>
        <form onSubmit={handleSubmit(searchGeoLocation)}>
          <label data-cy="citySearch">
            <input
              type="text"
              {...register('searchQuery', {
                pattern: /^[A-Za-z.' ]+$|^[A-Za-z.' ]+,\s?[A-Za-z ]+$/gi,
                required: true,
              })}
              aria-invalid={errors.searchQuery ? 'true' : 'false'}
            />
          </label>

          <button data-cy="searchButton"></button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;

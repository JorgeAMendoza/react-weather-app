import { useForm } from 'react-hook-form';
import searchIcon from '../../assets/imgs/search.svg';
import { SubmitHandler } from 'react-hook-form/dist/types';
// simple form, so just put all the form content here

interface SearchFormProps {
  searchQuery: string;
}

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormProps>({
    defaultValues: {
      searchQuery: 'Dallas, Texas',
    },
  });

  console.log(errors.searchQuery);

  const searchGeoLocation: SubmitHandler<SearchFormProps> = (data) =>
    console.log('this is dat', data);

  return (
    <header>
      <div>
        <div>
          <img src={searchIcon} alt="" />
        </div>
        <form onSubmit={handleSubmit(searchGeoLocation)}>
          <input
            type="text"
            {...register('searchQuery', {
              pattern:
                /^[A-Za-z.' ]+$|^[A-Za-z.' ]+$|^[A-Za-z.' ]+, [A-Za-z]+$/gi,
              required: true,
            })}
            aria-invalid={errors.searchQuery ? 'true' : 'false'}
          />
        </form>
      </div>
    </header>
  );
};

export default SearchBar;

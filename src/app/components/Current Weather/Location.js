export const Location = ({ city, state, country }) => {
  return (
    <p>
      {city}, {state ? state : country}
    </p>
  );
};

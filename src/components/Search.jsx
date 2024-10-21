import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 280px;
    margin-bottom: 0;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-bg);
  color: var(--colors-text);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChage={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
export default Search;

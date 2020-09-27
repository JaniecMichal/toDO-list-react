import React from "react";
import Input from "../Input";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamsName from "../searchQueryParamsName";
import { Wrapper } from "./styled";

const Search = () => {
    const query = useQueryParameters();
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamsName,
            value: target.value.trim() !== "" ? target.value : undefined,
        })
    };
    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};

export default Search;
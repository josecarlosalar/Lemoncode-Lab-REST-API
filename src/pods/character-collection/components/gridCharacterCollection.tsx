import * as React from 'react';
import * as classes from '../character-collection.styles';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { CharacterCard } from './character-card.component';
import { CharacterEntityVm } from '../character-collection.vm';


interface Props {
    filteredCharacters: CharacterEntityVm[];
    onEdit: (id: string) => void;
}

export const GridCharacterCollection: React.FunctionComponent<Props> = (Props) => {
    const { onEdit, filteredCharacters } = Props;
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(3);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    return(
        <>
        <div className={classes.containerSearch}>
          <ul className={classes.list}>
            {filteredCharacters.slice(startIndex, endIndex).map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} onEdit={onEdit} />
              </li>
            ))}
          </ul>
        </div>
        <div>
        <Pagination
              count={Math.ceil(filteredCharacters.length / perPage)}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              showFirstButton
              showLastButton
              color="primary"
          />
        </div>
      </>
    )

}

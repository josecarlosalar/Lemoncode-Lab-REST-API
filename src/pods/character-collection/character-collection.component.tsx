import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  // onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      {/* <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button> */}

      <ul className={classes.list}>
        {characterCollection.map((hotel) => (
          <li key={hotel.id}>
            <CharacterCard character={hotel} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

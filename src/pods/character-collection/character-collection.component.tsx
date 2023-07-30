import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { useEffect } from 'react';
import { GridCharacterCollection } from './components/gridCharacterCollection';
import { Search } from './components/search';

interface Props {
  characterCollection: CharacterEntityVm[];
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onEdit } = props;
  const [filteredCharacters, setFilteredCharacters] = React.useState<CharacterEntityVm[]>(characterCollection);


  useEffect(() => {
    handleSearch(characterCollection);
    
  },[characterCollection]);

  const handleSearch = (characterCollection: CharacterEntityVm[]) => {
    setFilteredCharacters(characterCollection);
    renderListItems();
  };

  const renderListItems = () => { 
    return (
      <>
        <div>
          <Search characters={characterCollection} onSearch={handleSearch}/>
        </div>
        <div>
          <GridCharacterCollection filteredCharacters={filteredCharacters} onEdit={onEdit}/>
        </div>

      </>
      
    );
  };

  return (
    <>
      <div>
           {renderListItems()}
      </div> 
       
    </>
  );

};

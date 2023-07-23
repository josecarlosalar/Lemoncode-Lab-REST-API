import React, { useEffect, useState } from 'react';
import { Container, Grid, List, Pagination } from '@mui/material';
import { AppLayout } from '../../layouts';
import { Search, GridRickMorty, DialogCard, Character } from 'pods/rick-morty';
import * as classes from './rick.styles';

interface Props {
    characters: Character[];
}

export const RickMortyComponent: React.FC<Props> = ({ characters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);
    const [filteredCharacters, setFilteredCharacters] = React.useState<Character[]>(characters);
    const [selectedCharacter, setSelectedCharacter] = React.useState<Character>();
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = (character: Character) => {
      setOpen(true);
      setSelectedCharacter(character);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleSearch(characters);
        
    },[characters]);

    const handleSearch = (characters: Character[]) => {
      setFilteredCharacters(characters);
      setCurrentPage(1);
      renderListItems();
    };

    const renderListItems = () => {
        return  (
            <Grid  className={classes.container}>
                <Grid item xs={12}>
                    <Search characters={characters} onSearch={handleSearch}/>
                </Grid>
                <Grid className={classes.gridRick} item xs={12}>
                    <GridRickMorty characters={characters} filteredCharacters={filteredCharacters} currentPage={currentPage} 
                                    perPage={perPage} handleClickOpen={handleClickOpen}/>
                </Grid>
                <Grid item xs={12}>
                    <Pagination
                        count={Math.ceil(filteredCharacters.length / perPage)}
                        page={currentPage}
                        onChange={(event, page) => setCurrentPage(page)}
                        showFirstButton
                        showLastButton
                        color="primary"
                    />
                </Grid>
            </Grid>
        );
    };

    return (
        <>
            <Grid className={classes.contenedor} container spacing={2}>
                <List>
                    {renderListItems()}
                </List>
                <DialogCard openProp={open} handleClose={handleClose} selected={selectedCharacter} /> 
            </Grid>
        </>
    );
    

}
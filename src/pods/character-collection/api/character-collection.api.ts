import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: CharacterEntityApi[]; 
}

let characterCollection = [...mockCharacterCollection];

interface GetCharacterCollectionResponse {
     characters: ApiResponse;
   }

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  
  const query = gql`
   query {
    characters {
      results{
         id
         name
         status
         species
         image
       }
    }
   }
 `;
 const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
     query
   );
   return characters.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};

import { Character } from './character.api-model';
import { mockCharacterCollection } from './character.mock-data';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: Character[]; 
}

interface GetCharacterCollectionResponse {
     characters: ApiResponse;
   }

export const getCharacter = async (name: string): Promise<Character> => {
  

  const query = gql`
   query Character($name: String) {
    characters (filter:{name: $name}){
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
     query,
     {name}
   );
   return characters.results[0];
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

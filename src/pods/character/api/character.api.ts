import Axios from 'axios';
import { Character } from './character.api-model';

const url = 'http://localhost:3000/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character[]>(url);
  return data.find((h) => h.id === id);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
       await Axios.put<Character>(`${url}/${character.id}`, character);
     } else {
       await Axios.post<Character>(url, character);
     }
  return true;
};

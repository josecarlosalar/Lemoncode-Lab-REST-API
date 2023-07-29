import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  caharacter: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: caharacter.id,
  picture: `${caharacter.image}`,
  name: caharacter.name,
  status: caharacter.status,
  species: caharacter.species,
});

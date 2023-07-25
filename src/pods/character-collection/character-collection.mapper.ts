import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  caharacter: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: caharacter.id,
  picture: `${caharacter.image}`,
  name: caharacter.name,
  description: caharacter.origin.name,
  location: caharacter.location.name,
  gender: caharacter.gender,
});

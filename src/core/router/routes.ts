import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/rickmorty',
  character: '/rickmorty/:id',
  editCharacter: '/rickmorty/:name',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (name) => generatePath(switchRoutes.editCharacter, { name }),
};

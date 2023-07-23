import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  editHotel: string;
  rickMorty: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createHotel: '/hotels/create',
  editHotel: '/hotels/:id',
  rickMorty: '/rickmorty',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel'> {
  editHotel: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
};

import React from "react";
import { CenteredLayout } from "../layouts/centered.layout";
import { RickMortyContainer } from "../pods/rick-morty";

export const RickMortyScene: React.FC = () => {
  
  return (
    <CenteredLayout>
        <RickMortyContainer />
    </CenteredLayout>
  );
};
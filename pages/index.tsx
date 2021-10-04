import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import FavouriteProjects from '../components/FavouriteProjects';
import Hero from '../components/Hero';
import LatestCode from '../components/LatestCode';

function Home() {
  return (
    <ContainerBlock
      title="Gustavo Ferreira - Desenvolvedor Web"
      description="Desenvolvedor Web"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
}

export default Home;

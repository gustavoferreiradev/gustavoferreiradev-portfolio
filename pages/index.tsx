import { GetStaticProps } from 'next';
import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import FavouriteProjects from '../components/FavouriteProjects';
import Hero from '../components/Hero';
import LatestCode from '../components/LatestCode';
import userData from '../constants/data';
import getLatestRepos from '../lib/getLatestRepos';

interface HomeProps {
  latestRepos: [];
}

function Home(props: HomeProps) {
  return (
    <ContainerBlock
      title="Gustavo Ferreira - Desenvolvedor Web"
      description="Desenvolvedor Web"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode latestRepos={props.latestRepos} />
    </ContainerBlock>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestRepos: any = await getLatestRepos(userData.gitHubUsername);

  return {
    props: {
      latestRepos,
    },
  };
};

export default Home;

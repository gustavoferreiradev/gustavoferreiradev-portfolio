import axios from 'axios';

interface ServerData {
  items: Array<any>;
}

const getLatestRepos = async (githubUsername: string) => {
  try {
    const username = githubUsername;
    const token = `${process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`;
    const res = await axios.get<ServerData>(
      `https://api.github.com/search/repositories?q=user:${username}+sort:updated`,
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    const repos: Array<any> = res.data.items;
    const filteredRepos = repos.filter((repo) => repo.private === false);
    const latestSixRepos: Array<any> = filteredRepos.splice(0, 6);
    return latestSixRepos;
  } catch (err: any) {
    return { ...err };
  }
};

export default getLatestRepos;

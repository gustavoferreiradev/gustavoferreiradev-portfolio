interface gitHubRepoCardProps {
  latestRepo: {
    name: string;
    description: string;
    clone_url: string;
  };
}

export function GithubRepoCard(props: gitHubRepoCardProps) {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {props.latestRepo.name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {props.latestRepo.description}
      </p>
      <a
        href={props.latestRepo.clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
        target="_blank"
        rel="noreferrer"
      >
        <p className="dark:text-gray-500">Ver Repositório</p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
}

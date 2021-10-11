interface ProjectProps {
  title: string;
  link: string;
  imgUrl: string;
  number: any;
}

export default function ProjectCard(props: ProjectProps) {
  return (
    <a
      href={props.link}
      className="w-full block shadow-2xl"
      target="_blank"
      rel="noopener"
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={props.imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h2 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {props.title}
        </h2>
        <h3 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {props.number.length === 1 ? '0' + props.number : props.number}
        </h3>
      </div>
    </a>
  );
}

import Image from "next/image";
export default function Header() {
	return (
		<div className="relative h-24 w-100 flex flex-1 justify-between items-center gap-4">
			<div className="sm:w-1/4 flex">{""}</div>
			<div className="w-1/2 h-full flex justify-between items-center gap-4">
				<Avatar />
				<Navbar />
        <SocialMedia />
			</div>
			<div className="w-1/4 flex">{""}</div>
		</div>
	);
}

const Navbar = () => {
	const itens = [
		{
			name: "Home",
			link: "#home",
		},
		{
			name: "contact",
			link: "#contact",
		},
	];

	return (
		<nav className="w-full flex flex-1 items-center justify-end sm:mr-8">
			<ul className="flex justify-end gap-4">
				{itens.map((item, index) => (
					<li key={index.toString()}>
						<a href={item.link}>
							<span className="font-bold text-xs">{item.name}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

const Avatar = () => {
  const imgSize = 64
	return (
		<div className="min-w-16">
			<img
				src="https://avatars.githubusercontent.com/u/928412?v=4"
				alt="LinkedIn de Alyson Souza"
				width={imgSize}
				height={imgSize}
			/>
		</div>
	);
};

const SocialMedia = () => {
  const iconSize = 32
  const socialMedia = [
    {
      name: "Github",
      link: "https://github.com/alysonfs",
      icon: "/github.svg",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alysonfs/",
      icon: "/linkedin.svg",
    },
  ];
  
	return (
		<div className="flex items-center">
			<ul className="relative flex justify-between items-center gap-4">
        {socialMedia.map((item, index) => (
          <li key={index.toString()} className="min-w-8">
            <a href={item.link}>
              <Image
                src={item.icon}
                alt={`${item.name} de Alyson Souza`}
                width={iconSize}
                height={iconSize}
              />
            </a>
          </li>
        ))}
			</ul>
		</div>
	);
};

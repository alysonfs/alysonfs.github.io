"use client";

import Image from "next/image";
import { type MouseEvent, useEffect, useState } from "react";
import { useClientSize } from "@/hooks";

export default function InitialSection() {
	const { width: widthScreen } = useClientSize();
	const [halfWidthScreen, setHalfWidthScreen] = useState(0);
	const [x, setX] = useState(0);
	const [clipPathRightImage, setClipPathRightImage] = useState(halfWidthScreen);

	useEffect(() => {
		if (widthScreen > 0) {
			setHalfWidthScreen(widthScreen / 2);
		}
	}, [widthScreen]);

	useEffect(() => {
		if (halfWidthScreen > 0) {
			calcClipPath(halfWidthScreen);
		}
	}, [halfWidthScreen]);

	const calcPercentToPixel = (percent: number): number => {
		const margin = (halfWidthScreen * percent) / 100;
		return margin;
	};

	const clipPathMargin = {
		min: halfWidthScreen - calcPercentToPixel(30),
		max: halfWidthScreen + calcPercentToPixel(30),
	};

	// Quanto maior meu X menor o ClipPath
	const calcClipPath = (eixoX: number) => {
		const diff = halfWidthScreen - eixoX;
		setClipPathRightImage(halfWidthScreen + diff);
	};

	const moveCaptureHandler = (event: MouseEvent) => {
		setX(event.clientX);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (x > clipPathMargin.min && x < clipPathMargin.max) {
			calcClipPath(x);
		}
	}, [x, widthScreen, halfWidthScreen]);

	if (halfWidthScreen === 0) {
		return <div>{""}</div>;
	}

	return (
		<section className="relative flex flex-col items-center justify-start h-2/3 bg-black w-full">
			<div className="absolute top-0 flex flex-row w-full h-full">
				<Image
					src="/bg_backend.jpg"
					className="absolute top-0 h-full object-cover object-center lg:object-left-top"
					alt="Background backend"
					width={1440}
					height={740}
				/>
				<Image
					src="/bg_frontend.jpg"
					className="absolute top-0 h-full hidden lg:block lg:object-cover lg:object-right-top"
					alt="Background frontend"
					width={1440}
					height={740}
					style={{
						clipPath: `inset(0 0 0 ${clipPathRightImage}px)`,
						transition: "0.3s ease",
					}}
				/>
			</div>

			<div
				className="relative top-0 flex flex-col w-full h-full p-2 items-center justify-around
				bg-black lg:bg-transparent
				lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-black"
				onPointerMoveCapture={moveCaptureHandler}
			>
				<div className="relative flex w-full h-full  justify-center align-middle items-center ">
					<div className="relative top-0 mt-2 ">
						<h1 className="text-4xl font-bold text-white">Alyson Souza</h1>
						<p className="text-xl  text-white">Engenheiro de Software</p>
					</div>
				</div>

				<div className="relative flex flex-col gap-4 lg:flex-row  flex-1 w-full p-4">
					<div className="relative flex flex-1 flex-col justify-start ">
						<h2>
							<span className="text-2xl font-bold text-white">Backend</span>
						</h2>
						<p className="mt-4 text-sm text-white">
							Utilizando <span className="font-bold">NodeJs</span> e{" "}
							<span className="font-bold">Typescript</span>, construo sistemas
							escaláveis e eficientes, com ênfase na segurança e na arquitetura
							orientada a serviços. Minha abordagem se destaca pela atenção aos
							detalhes e pela busca contínua pela excelência no código, seguindo
							os princípios do <span className="font-bold">SOLID</span>. Com
							habilidades sólidas em design de APIs{" "}
							<span className="font-bold">REST</span> e{" "}
							<span className="font-bold">GraphQL</span> e integração de bancos de
							dados <span className="font-bold">Relacionais</span> e{" "}
							<span className="font-bold">NoSql</span>, contribuo para o
							desenvolvimento de soluções robustas e de alta qualidade. Além
							disso, tenho experiência em arquitetura na{" "}
							<span className="font-bold">AWS</span>, utilizando práticas de{" "}
							<span className="font-bold">IaC</span> (Infrastructure as Code) para
							garantir a consistência e escalabilidade da infraestrutura.
						</p>
					</div>

					<div className="relative flex flex-1">{""}</div>

					<div className="relative flex flex-1 flex-col justify-start align-middle items-end text-right">
						<h2>
							<span className="text-2xl font-bold text-white">Frontend</span>
						</h2>
						<p className="mt-4 text-sm text-white">
							<span className="font-bold">No Frontend</span>, atuo na
							implementação eficiente das propostas de UX/UI elaboradas por
							equipes de design. Utilizando Vite e Next.js, além das poderosas
							ferramentas como <span className="font-bold">Tailwind CSS</span> e{" "}
							<span className="font-bold">Styled Components</span>, foco em
							traduzir de forma precisa e funcional as visões de design em
							interfaces interativas e responsivas. Além disso, tenho
							experiência em{" "}
							<span className="font-bold">Server-Side Rendering (SSR)</span>,
							garantindo uma rápida renderização inicial e melhorando a
							experiência do usuário. Minha habilidade em integrar diversas{" "}
							<span className="font-bold">APIs externas</span> também contribui
							para o desenvolvimento de sistemas altamente conectados e
							funcionais.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

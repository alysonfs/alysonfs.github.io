"use client";

import { useClientReady } from "@/hooks";
import { ButtonSendWhatsApp } from "../button";

export default function ContactSection() {
	const isReady = useClientReady();

	if (!isReady) {
		return <div>{""}</div>;
	}

	return (
		<section
			id="contact"
			className="relative flex flex-col lg:h-1/2 justify-start bg-white w-full"
		>
			<div className="relative flex flex-col justify-start w-full h-full items-center gap-8">
				<h2 className="text-2xl text-center">
					Fique a vontade para entrar em contato comigo
				</h2>
				<ButtonSendWhatsApp
					phone="5584994077677"
					message="Olá! Estou interessado em seus serviços de Engenharia de Software. Podemos conversar mais sobre suas habilidades e disponibilidade? Aguardo sua resposta. Obrigado!"
				/>
			</div>
		</section>
	);
}

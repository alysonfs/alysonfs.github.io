import Image from "next/image";

export interface ButtonWhatsAppSend {
	phone: string;
	message?: string;
}

export const ButtonSendWhatsApp = (props: ButtonWhatsAppSend) => {
	const baseUrl = "https://wa.me/";
	const url = new URL(props.phone, baseUrl);

	if (props.message) {
		url.searchParams.append("text", props.message);
	}

	return (
		<a href={url.href} target="_blank" rel="noreferrer">
			<button
				type="button"
				className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md"
			>
				<Image
					src="/whatsapp.svg"
					alt="Enviar mensagem"
					color="white"
					width={24}
					height={24}
				/>
				<p>Enviar mensagem</p>
			</button>
		</a>
	);
};

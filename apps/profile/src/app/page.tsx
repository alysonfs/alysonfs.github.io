import Header from "./components/header/header";
import ContactSection from "./components/section/contact-section";
import InitialSection from "./components/section/initial-section";

export default function Home() {
	return (
		<main id="home">
			<Header />
			<div className="flex flex-col gap-8">
				<InitialSection />
				<ContactSection />
			</div>
		</main>
	);
}

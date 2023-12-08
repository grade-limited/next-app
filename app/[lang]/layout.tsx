import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const lexend = Lexend({ subsets: ["latin"] });

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
	title: "Grade Employee Mart | Grade Ltd. | Grade E-Mart",
	description:
		"Grade Ltd. is your tech-enabled solution to rising prices and superfluous middlemen. By eliminating distributors and dealers, we bring you quality products at pocket-friendly prices, ensuring end-to-end digitalization. Whether you`re a B2B partner or part of our employee network, experience transparent pricing in our tech-driven platform.",
	icons: "favicon.svg",
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(params.lang);

	return (
		<html lang={params.lang}>
			<head>
				<title>{dictionary.common.meta.title}</title>
				<meta
					name="description"
					content={dictionary.common.meta.description}
				/>
			</head>
			<body className={lexend.className}>{children}</body>
		</html>
	);
}

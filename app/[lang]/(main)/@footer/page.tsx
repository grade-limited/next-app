import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Footer({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	return <footer>Footer {dictionary.common.meta.title}</footer>;
}

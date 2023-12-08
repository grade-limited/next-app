"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, i18n, localeLabels } from "@/i18n-config";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
	const pathName = usePathname();
	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	return (
		<ul className="inline-flex gap-1 items-center divide-x divide-slate-500">
			{i18n.locales.map((locale) => {
				return (
					<li
						key={locale}
						className={`pl-1 text-xs font-medium ${
							locale === lang
								? "text-white"
								: "text-slate-400 hover:text-white transition-colors duration-2"
						}`}
					>
						<Link href={redirectedPathName(locale)}>
							{localeLabels[locale]}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

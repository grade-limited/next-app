import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Button, InputBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import LocaleSwitcher from "./locale-switcher";

export default async function Header({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	return (
		<>
			<section className="bg-slate-700 flex flex-row items-center justify-end px-8 py-[2px] gap-2">
				<LocaleSwitcher lang={lang} />
			</section>
			<header className="bg-slate-800 py-2 px-8">
				<nav className="flex flex-row items-center justify-evenly gap-4">
					<Image
						src={"/logo.svg"}
						width={120}
						height={100}
						alt="Grade Ltd."
					/>
					<div className="flex-1">
						<InputBase
							startAdornment={<IoSearch className={"mr-3 text-2xl"} />}
							inputMode="search"
							placeholder={dictionary.header.search}
							className="bg-slate-700 rounded-full py-1 px-4 text-white font-sans max-w-sm"
							fullWidth
						/>
					</div>
					<Link
						href={`tel:+09237238723`}
						className="text-white flex flex-col items-end justify-center"
					>
						<span className="text-sm">{dictionary.header.support.number}</span>
						<span className="text-xs text-slate-400">
							{dictionary.header.support.subtitle}
						</span>
					</Link>
					<Button
						variant="contained"
						className="rounded-full bg-primary hover:bg-primary-600 font-sans text-slate-800 font-bold"
					>
						{dictionary.header.signin}
					</Button>
				</nav>
			</header>
		</>
	);
}

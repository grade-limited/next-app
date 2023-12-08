export const i18n = {
	defaultLocale: "en",
	locales: ["en", "bn"],
} as const;

export const localeLabels = {
	en: "English",
	bn: "বাংলা",
} as const;

export type Locale = (typeof i18n)["locales"][number];

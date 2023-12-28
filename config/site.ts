export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "IT Odyssey",
	description: "IT blog.",
	navItems: [
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	links: {
		github: "https://github.com/paugarcia32",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};

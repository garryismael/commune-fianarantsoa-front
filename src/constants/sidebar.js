import {
	faArrowRightFromBracket,
	faBagShopping,
	faDashboard,
	faGear, faUser,
	faUserGear,
	faUserShield
} from "@fortawesome/free-solid-svg-icons";

export const menus = [
	{
		label: "Dashboard",
		to: "/",
		icon: faDashboard,
	},
	{
		label: "Clients",
		to: "/clients",
		icon: faUser,
	},
	{
		label: "Abonnements",
		to: "/abonnements",
		icon: faBagShopping,
	},
	{
		label: "Administrateurs",
		to: "/admins",
		icon: faUserShield,
	},
	{
		label: "Controlleurs",
		to: "/controlleurs",
		icon: faUserGear,
	},
	{
		label: "Configurations",
		to: "/configuration",
		icon: faGear,
	},
	{
		label: "Déconnexion",
		to: "/login",
		icon: faArrowRightFromBracket,
		css: "absolute bottom-8",
	},
];

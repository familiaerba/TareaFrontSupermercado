export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Supermercado Erba",
	description: "Supermercado al alcance de todos",
	navItems: [
		{
			label: "Principal",
			href: "/",
		},
    {
      label: "Catalogo",
      href: "/catalogo",
    },
    {
      label: "Inventario",
      href: "/inventario",
    },
    {
      label: "Promociones",
      href: "/promociones",
    },
	],
  tabsData: [
		{
			id: "Catalogo",
			label: "Catalogo",
			content: "En este apartado encontraremos el catálogo completo del supermercado"
		},
		{
			id: "Inventario",
			label: "Inventario",
			content: "Control de inventario de los productos"
    },
		{
			id: "Promociones",
			label: "Promociones",
			content: "Productos que pueden entrar en descuento"
		}
	],
};

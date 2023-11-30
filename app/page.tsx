"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default async function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "blue" })}>Supermercado Erba&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Descripcion de cada pestaña
				</h2>
			</div>
			<Tabs aria-label="Dynamic tabs">
				{siteConfig.tabsData.map((item) => (
					<Tab key={item.id} title={item.label}>
						<Card>
							<CardBody>
								{item.content}
							</CardBody>
						</Card>
					</Tab>
				))}
			</Tabs>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Puedes acceder a cada apartado mediante las opciones de<Code color="primary">arriba</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}

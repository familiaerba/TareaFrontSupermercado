'use client';
import { Card, CardBody, CardFooter, Image, CardHeader, Accordion, AccordionItem } from "@nextui-org/react";

async function getData() {
	const res = await fetch('http://localhost:8091/products')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}



export default async function CatalogoPage() {
	const data = await getData()
	//console.log(data)

	return (
		<div>
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
				{data.map((item, index) => (
					<div>
						<Card shadow="sm" key={index}>
							<CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[80px]">
								<h4 className="font-bold text-large">{item.title}</h4>
							</CardHeader>
							<CardBody className="h-[200px] flex justify-center items-center">
								<Image
									className="object-contain h-[150px] w-[150px]"
									alt="Card background"
									src={item.img}
									width="100%"
								/>
							</CardBody>
							<CardFooter className="text-small">
								<b>Precio: &nbsp;</b>
								<p className="text-default-500">{item.price}</p>
							</CardFooter>
						</Card>
						<Accordion isCompact>
							<AccordionItem key="1" aria-label="Categoria" title="Categoria">
								{item.category}
							</AccordionItem>
							<AccordionItem key="2" aria-label="Descripcion" title="Descripcion">
								{item.description}
							</AccordionItem>
						</Accordion>
					</div>

				))}
			</div>
		</div>
	);
}

'use client';
import { title } from "@/components/primitives";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

async function getData() {
	const res = await fetch('http://localhost:8091/products')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

export default async function InventarioPage() {

	const data = await getData()
	//console.log(data)
	let rndInt = randomIntFromInterval(1, 6)
	console.log(rndInt)
	return (
		<div>
			<h1 className={title()}>Inventario</h1>
			<Table>
				<TableHeader>
					<TableColumn>PRODUCTO</TableColumn>
					<TableColumn>CATEGORIA</TableColumn>
					<TableColumn>PRECIO</TableColumn>
					<TableColumn>CANTIDAD</TableColumn>
				</TableHeader>
				<TableBody>
					{data.map((row) =>
						<TableRow key={row.id}>
							<TableCell>{row.title}</TableCell>
							<TableCell>{row.category}</TableCell>
							<TableCell>{row.price}</TableCell>
							<TableCell>{row.stock}</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}

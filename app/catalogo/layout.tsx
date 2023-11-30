export default function CatalogoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center py-8 md:py-10">
			<div>
				{children}
			</div>
		</section>
	);
}

'use client';
import { subtitle, title } from "@/components/primitives";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, Image } from "@nextui-org/react";

export default function PromocionesPage() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isLoginModalOpen, toggleLoginModal] = useState(false)
	const [isRegisterModalOpen, toggleRegisterModal] = useState(false)
	const [value, setValue] = useState(false)

	return (
		<>
			<h1 className={title({ color: "blue" })}>PROMOCIONES</h1>
			<br />
			<br />
			<br />
			<Button onClick={() => toggleLoginModal(true)} color="primary">2x1</Button>
			<br />
			<br />
			<Button onClick={() => toggleRegisterModal(true)} color="primary">Segundo Miti</Button>
			<br />
			<br />
			<Button onClick={() => setValue(true)} color="primary">Nos vemos el 2024</Button>
			<br />
			<br />
			<br />
			<h2 className={subtitle({ class: "mt-4" })}>
				*Promociones validas hasta agotar stock
			</h2>
			<Modal isOpen={isLoginModalOpen} onOpenChange={onOpenChange} hideCloseButton={true}>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-col gap-1">2x1</ModalHeader>
						<ModalBody>
							<Image
								className="object-contain h-[150px] w-[150px]"
								alt="Card background"
								src="https://i.pinimg.com/originals/e8/2f/ae/e82fae2212a772a2e63e73011d6d8b4f.png"
								width="100%"
							/>
							<p>
								Compra dos productos del mismo tipo y el segundo te sera totalmenten GRATIS
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onClick={() => toggleLoginModal(false)} >
								Close
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
			<Modal isOpen={isRegisterModalOpen} onOpenChange={onOpenChange} hideCloseButton={true}>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-col gap-1">Segundo miti</ModalHeader>
						<ModalBody>
							<p>
								Compra dos productos de diferente tipo y el segundo será a MITAD de precio
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onClick={() => toggleRegisterModal(false)} >
								Close
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
			<Modal isOpen={value} onOpenChange={onOpenChange} hideCloseButton={true}>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-col gap-1">Nos vemos el 2024</ModalHeader>
						<ModalBody>
							<p>
								Realiza tus compras en Diciembre y empieza a pagarlas desde Enero del 2024
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onClick={() => setValue(false)} >
								Close
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}
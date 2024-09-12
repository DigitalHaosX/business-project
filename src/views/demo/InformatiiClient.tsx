import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Checkbox, Dropdown, Input } from '../../components/ui'
import Radio from '../../components/ui/Radio'
import { fetchClients } from './clientService'

const InformatiiClienti = () => {
    const [clients, setClients] = useState<{ id: number; name: string }[]>([])
    const [selectedClient, setSelectedClient] = useState<any>(null)

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const clientData = await fetchClients()
                setClients(
                    clientData.map((client: any) => ({
                        id: client.id,
                        name: client.name,
                        vat: client.vat,
                        email: client.email,
                        phone: client.phone,
                        billingAddress: client.billingAddress,
                        billingCity: client.billingCity,
                        billingCounty: client.billingCounty,
                        billingPostalCode: client.billingPostalCode,
                        shippingAddress: client.shippingAddress,
                        shippingCity: client.shippingCity,
                        shippingCounty: client.shippingCounty,
                        shippingPostalCode: client.shippingPostalCode,
                    })),
                )
            } catch (error) {
                console.error('Error fetching clients:', error)
            }
        }

        fetchClientData()
    }, [])

    const handleClientSelect = (clientId: number) => {
        const client = clients.find((c) => c.id === clientId)
        setSelectedClient(client || null)
    }

    const onCheck = (value: boolean, e: ChangeEvent<HTMLInputElement>) => {
        console.log(value, e)
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-start gap-4">
                <h4>Selecteaza clienti:</h4>
                <Button className="flex items-center" shape="circle">
                    <Dropdown className="" title="Dropdown Clienti">
                        {clients.map((client) => (
                            <Dropdown.Item
                                key={client.id}
                                eventKey={client.id.toString()}
                                onClick={() => handleClientSelect(client.id)}
                            >
                                {client.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </Button>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 mt-4">
                <h4>Tip:</h4>
                <Radio className="mr-4" name="simpleRadioExample">
                    Persoana fizica
                </Radio>
                <Radio defaultChecked name="simpleRadioExample">
                    Persoana juridica
                </Radio>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Nume Prenume / Denumire Societate</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Nume Prenume / Denumire Societate"
                        value={selectedClient?.name || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                name: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <h4>VAT</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="VAT"
                        value={selectedClient?.vat || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                vat: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Email</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Email"
                        value={selectedClient?.email || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                email: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <h4>Telefon</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Telefon"
                        value={selectedClient?.phone || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                phone: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div>
                <h4 className="mb-4">Adresa de facturare</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Adresa de facturare..."
                    value={selectedClient?.billingAddress || ''}
                    onChange={(e) =>
                        setSelectedClient({
                            ...selectedClient,
                            billingAddress: e.target.value,
                        })
                    }
                />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Oras</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Oras"
                        value={selectedClient?.billingCity || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                billingCity: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <h4>Judet</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Judet"
                        value={selectedClient?.billingCounty || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                billingCounty: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <h4>Cod Postal</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Cod Postal"
                        value={selectedClient?.billingPostalCode || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                billingPostalCode: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-4">
                <Checkbox defaultChecked onChange={onCheck} />
                <h4>Aceeasi adresa pentru livrare</h4>
            </div>
            <div className="mt-4">
                <h4 className="mb-4">Adresa de livrare</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Adresa de livrare..."
                    value={selectedClient?.shippingAddress || ''}
                    onChange={(e) =>
                        setSelectedClient({
                            ...selectedClient,
                            shippingAddress: e.target.value,
                        })
                    }
                />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Oras</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Oras"
                        value={selectedClient?.shippingCity || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                shippingCity: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <h4>Judet</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Judet"
                        value={selectedClient?.shippingCounty || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                shippingCounty: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <h4>Cod Postal</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Cod Postal"
                        value={selectedClient?.shippingPostalCode || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                shippingPostalCode: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="flex items-center justify-start mt-4 gap-4">
                <div>
                    <h4>Termen de livrare</h4>
                    <Input
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Termen de livrare"
                        value={selectedClient?.deliveryTerm || ''}
                        onChange={(e) =>
                            setSelectedClient({
                                ...selectedClient,
                                deliveryTerm: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Button
                    className="flex justify-center items-center mt-4 w-[300px] h-[40px]"
                    shape="circle"
                >
                    Salveaza
                </Button>
            </div>
        </div>
    )
}

export default InformatiiClienti

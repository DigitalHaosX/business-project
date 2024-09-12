import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Checkbox, Dropdown, Input } from '../../components/ui'
import Radio from '../../components/ui/Radio'
import { fetchClients, updateClient } from './clientService'

interface Client {
    id: number
    createDate: string
    type: string
    name: string
    vat: string
    email: string
    phone: string
    billingAddress: string
    billingCity: string
    billingCounty: string
    billingPostalCode: string
    shippingAddress: string
    shippingCity: string
    shippingCounty: string
    shippingPostalCode: string
}

const InformatiiClienti = () => {
    const [clients, setClients] = useState<Client[]>([])
    const [selectedClientId, setSelectedClientId] = useState<number | null>(
        null,
    )
    const [clientName, setClientName] = useState<string>('')
    const [clientVat, setClientVat] = useState<string>('')
    const [clientEmail, setClientEmail] = useState<string>('')
    const [clientPhone, setClientPhone] = useState<string>('')
    const [billingAddress, setBillingAddress] = useState<string>('')
    const [billingCity, setBillingCity] = useState<string>('')
    const [billingCounty, setBillingCounty] = useState<string>('')
    const [billingPostalCode, setBillingPostalCode] = useState<string>('')
    const [shippingAddress, setShippingAddress] = useState<string>('')
    const [shippingCity, setShippingCity] = useState<string>('')
    const [shippingCounty, setShippingCounty] = useState<string>('')
    const [shippingPostalCode, setShippingPostalCode] = useState<string>('')
    const [clientType, setClientType] = useState<string>('COMPANY')
    const [sameAddress, setSameAddress] = useState<boolean>(false)

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const clientsData = await fetchClients()
                setClients(clientsData)
                console.log('Fetched clients:', clientsData)
            } catch (error) {
                console.error('Error fetching clients:', error)
            }
        }

        fetchClientData()
    }, [])

    useEffect(() => {
        if (selectedClientId !== null) {
            const selectedClient = clients.find(
                (client) => client.id === selectedClientId,
            )
            if (selectedClient) {
                setClientName(selectedClient.name)
                setClientVat(selectedClient.vat)
                setClientEmail(selectedClient.email)
                setClientPhone(selectedClient.phone)
                setBillingAddress(selectedClient.billingAddress)
                setBillingCity(selectedClient.billingCity)
                setBillingCounty(selectedClient.billingCounty)
                setBillingPostalCode(selectedClient.billingPostalCode)
                setShippingAddress(selectedClient.shippingAddress)
                setShippingCity(selectedClient.shippingCity)
                setShippingCounty(selectedClient.shippingCounty)
                setShippingPostalCode(selectedClient.shippingPostalCode)
                setClientType(selectedClient.type)
            }
        }
    }, [selectedClientId, clients])

    const handleClientSelect = (clientId: number) => {
        setSelectedClientId(clientId)
    }

    const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setSameAddress(isChecked)
        if (isChecked) {
            setShippingAddress(billingAddress)
            setShippingCity(billingCity)
            setShippingCounty(billingCounty)
            setShippingPostalCode(billingPostalCode)
        } else {
            setShippingAddress('')
            setShippingCity('')
            setShippingCounty('')
            setShippingPostalCode('')
        }
    }

    const handleSave = async () => {
        try {
            if (selectedClientId === null) {
                throw new Error('No client selected')
            }

            // Prepare the updated client object
            const updatedClient = {
                type: clientType,
                name: clientName.trim(),
                vat: clientVat.trim(),
                email: clientEmail.trim(),
                phone: clientPhone.trim(),
                billingAddress: billingAddress.trim(),
                billingCity: billingCity.trim(),
                billingCounty: billingCounty.trim(),
                billingPostalCode: billingPostalCode.trim(),
                shippingAddress: shippingAddress.trim(),
                shippingCity: shippingCity.trim(),
                shippingCounty: shippingCounty.trim(),
                shippingPostalCode: shippingPostalCode.trim(),
            }

            // Validate required fields
            if (
                !updatedClient.name ||
                !updatedClient.email ||
                !updatedClient.phone
            ) {
                throw new Error(
                    'Please fill out all required fields (name, email, phone)',
                )
            }

            // Make the API request to update the client
            await updateClient(selectedClientId, updatedClient)
            alert('Client updated successfully!')
        } catch (error) {
            console.error('Error updating client:', error)
            alert(`Failed to update client: ${error.message}`)
        }
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
                <Radio
                    className="mr-4"
                    name="clientType"
                    checked={clientType === 'INDIVIDUAL'}
                    onChange={() => setClientType('INDIVIDUAL')}
                >
                    Persoana fizica
                </Radio>
                <Radio
                    name="clientType"
                    checked={clientType === 'COMPANY'}
                    onChange={() => setClientType('COMPANY')}
                >
                    Persoana juridica
                </Radio>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Nume Prenume / Denumire Societate</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Nume Prenume / Denumire Societate"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />
                </div>
                <div>
                    <h4>VAT</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="VAT"
                        value={clientVat}
                        onChange={(e) => setClientVat(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Email</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Telefon</h4>
                    <Input
                        className="w-[650px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Telefon"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <h4 className="mb-4">Adresa de facturare</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Adresa de facturare..."
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Oras</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Oras"
                        value={billingCity}
                        onChange={(e) => setBillingCity(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Judet</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Judet"
                        value={billingCounty}
                        onChange={(e) => setBillingCounty(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Cod Postal</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Cod Postal"
                        value={billingPostalCode}
                        onChange={(e) => setBillingPostalCode(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-4">
                <input
                    type="checkbox"
                    checked={sameAddress}
                    onChange={onCheck}
                />
                <h4>Aceeasi adresa pentru livrare</h4>
            </div>
            <div className="mt-4">
                <h4 className="mb-4">Adresa de livrare</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Adresa de livrare..."
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Oras</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Oras"
                        value={shippingCity}
                        onChange={(e) => setShippingCity(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Judet</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Judet"
                        value={shippingCounty}
                        onChange={(e) => setShippingCounty(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Cod Postal</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Cod Postal"
                        value={shippingPostalCode}
                        onChange={(e) => setShippingPostalCode(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex items-center justify-start mt-4 gap-4">
                <div>
                    <h4>Termen de livrare</h4>
                    <Input
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Termen de livrare"
                        value={clientType}
                        onChange={(e) => setClientType(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Button
                    className="flex justify-center items-center mt-4 w-[300px] h-[40px]"
                    shape="circle"
                    onClick={handleSave}
                >
                    Salveaza
                </Button>
            </div>
        </div>
    )
}

export default InformatiiClienti

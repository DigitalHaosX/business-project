import React, { ChangeEvent } from 'react'
import { Button, Checkbox, Dropdown, Input } from '@/components/ui'
import Radio from '@/components/ui/Radio'

const InformatiiClienti = () => {
    const onCheck = (value: boolean, e: ChangeEvent<HTMLInputElement>) => {
        console.log(value, e)
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-start gap-4">
                <h4>Selecteaza clienti:</h4>
                <Button className="flex items-center" shape="circle">
                    <Dropdown className="" title="Dropdown Clienti">
                        <Dropdown.Item eventKey="a">Client 1</Dropdown.Item>
                        <Dropdown.Item eventKey="b">Client 2</Dropdown.Item>
                        <Dropdown.Item eventKey="c">Client 3</Dropdown.Item>
                        <Dropdown.Item eventKey="d">Client 4</Dropdown.Item>
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
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Nume Prenume / Denumire Societate"
                    />
                </div>
                <div>
                    <h4>VAT</h4>
                    <Input
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="VAT"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Email</h4>
                    <Input
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <h4>Telefon</h4>
                    <Input
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Telefon"
                    />
                </div>
            </div>
            <div>
                <h4 className="mb-4">Adresa de facturare</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Adresa de facturare..."
                />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Oras</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Oras"
                    />
                </div>
                <div>
                    <h4>Judet</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Judet"
                    />
                </div>
                <div>
                    <h4>Cod Postal</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Cod Postal"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-4">
                <Checkbox defaultChecked onChange={onCheck}></Checkbox>
                <h4>Aceeasi adresa pentru livrare</h4>
            </div>
            <div className="mt-4">
                <h4 className="mb-4">Adresa de livrare</h4>
                <Input
                    textArea
                    className="rounded-xl"
                    placeholder="Adresa de livrare..."
                />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
                <div>
                    <h4>Oras</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Oras"
                    />
                </div>
                <div>
                    <h4>Judet</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Judet"
                    />
                </div>
                <div>
                    <h4>Cod Postal</h4>
                    <Input
                        className="w-[400px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Cod Postal"
                    />
                </div>
            </div>
            <div className="flex items-center justify-start mt-4 gap-4">
                <div>
                    <h4>Termen de livrare</h4>
                    <Input
                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                        placeholder="Termen de livrare"
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

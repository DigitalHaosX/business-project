import React from 'react'
import { useParams } from 'react-router-dom'
import Steps from '@/components/ui/Steps'
import { Button, Card, Dropdown, Input } from '@/components/ui'
import Tabs from '@/components/ui/Tabs'

const { TabNav, TabList, TabContent } = Tabs

const ProiectDetails = () => {
    const { id } = useParams<{ id: string }>()

    return (
        <div className="text-xl font-semibold">
            <h1 className="mb-4">Proiect:{id}</h1>

            {/* Add your logic here to fetch and display project details based on the ID */}
            <div className="mb-4">
                <Steps>
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                </Steps>
            </div>
            <div className="flex flex-row justify-between">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[200px] h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 1</h5>
                    <p className="mt-4 text-xl font-bold">
                        Receptie si ceare proiect
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[200px] h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 2</h5>
                    <p className="mt-4 text-xl font-bold">Diagnostic</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[200px]  h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 3</h5>
                    <p className="mt-4 text-xl font-bold">Creare deviz</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[200px]  h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 4</h5>
                    <p className="mt-4 text-xl font-bold">Aprobare lucrare</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[200px]  h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 5</h5>
                    <p className="mt-4 text-xl font-bold">Comandare piese</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[200px]  h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 6</h5>
                    <p className="mt-4 text-xl font-bold">
                        Atribuire si finalizare sarcini
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl  w-[200px]  h-[150px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-xl font-bold">Pasul 7</h5>
                    <p className="mt-4 text-xl font-bold">
                        Finalizare proiect si trimitere motor
                    </p>
                </Card>
            </div>
            <div className="mt-4">
                <Tabs defaultValue="tab1" variant="pill">
                    <TabList>
                        <TabNav value="tab1">Informatii proiect</TabNav>
                        <TabNav value="tab2">Informatii client</TabNav>
                        <TabNav value="tab3">Informatii financiare</TabNav>
                        <TabNav value="tab4">Documente</TabNav>
                        <TabNav value="tab5">Sarcini</TabNav>
                        <TabNav value="tab6">Piese</TabNav>
                    </TabList>
                    <div className="p-4">
                        <TabContent value="tab1">
                            <div className="flex items-center justify-between mt-4 gap-4">
                                <div>
                                    <h4>Titlu Proiect</h4>
                                    <Input
                                        className="w-[500px] h-[40px] rounded-full mb-4 mt-4"
                                        placeholder="Titlu proiect"
                                    />
                                </div>
                                <div>
                                    <h4>Tip Proiect</h4>
                                    <Button
                                        className="flex justify-center items-center w-[500px] h-[40px] mt-4 mb-4"
                                        shape="circle"
                                    >
                                        <Dropdown
                                            className="flex items-center justify-center"
                                            title="Tip Proiect"
                                        >
                                            <Dropdown.Item eventKey="a">
                                                Masina intreaga
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="b">
                                                Motor
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="c">
                                                Turbina
                                            </Dropdown.Item>
                                        </Dropdown>
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <h4 className="mb-4">Informatii proiect</h4>
                                <Input
                                    textArea
                                    className="rounded-xl"
                                    placeholder="Text area example"
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <Button
                                    className="flex justify-center items-center mt-4 w-[300px] h-[40px]"
                                    shape="circle"
                                >
                                    Salveaza
                                </Button>
                            </div>
                        </TabContent>
                        <TabContent value="tab2">
                            <p>
                                A computer lets you make more mistakes faster
                                than any invention in human history with the
                                possible exceptions of handguns and tequila.
                                (Mitch Radcliffe).
                            </p>
                        </TabContent>
                        <TabContent value="tab3">
                            <p>
                                In C++ its harder to shoot yourself in the foot,
                                but when you do, you blow off your whole leg.
                                (Bjarne Stroustrup)
                            </p>
                        </TabContent>
                        <TabContent value="tab4">
                            <p>
                                In C++ its harder to shoot yourself in the foot,
                                but when you do, you blow off your whole leg.
                                (Bjarne Stroustrup)
                            </p>
                        </TabContent>
                        <TabContent value="tab5">
                            <p>
                                In C++ its harder to shoot yourself in the foot,
                                but when you do, you blow off your whole leg.
                                (Bjarne Stroustrup)
                            </p>
                        </TabContent>
                        <TabContent value="tab6">
                            <p>
                                In C++ its harder to shoot yourself in the foot,
                                but when you do, you blow off your whole leg.
                                (Bjarne Stroustrup)
                            </p>
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default ProiectDetails

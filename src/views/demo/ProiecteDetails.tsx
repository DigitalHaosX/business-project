import { useParams } from 'react-router-dom'
import Steps from '@/components/ui/Steps'
import { Card } from '@/components/ui'
import Tabs from '@/components/ui/Tabs'
import InformatiiClienti from './InformatiiClient'
import InformatiiProiect from './InformatiiProiect'
import InformatiiFinanciare from './InformatiiFinanciare'
import InformatiiDocumente from './InformatiiDocumente'
import InformatiiSarcini from './InformatiiSarcini'
import InformatiiPiese from './InformatiiPiese'

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
                        Receptie si creare proiect
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
                            <InformatiiProiect />
                        </TabContent>
                        <TabContent value="tab2">
                            <InformatiiClienti />
                        </TabContent>
                        <TabContent value="tab3">
                            <InformatiiFinanciare />
                        </TabContent>
                        <TabContent value="tab4">
                            <InformatiiDocumente />
                        </TabContent>
                        <TabContent value="tab5">
                            <InformatiiSarcini />
                        </TabContent>
                        <TabContent value="tab6">
                            <InformatiiPiese />
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default ProiectDetails

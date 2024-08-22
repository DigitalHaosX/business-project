import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Progress from '@/components/ui/Progress'

const Home = () => {
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold mb-4">Dashboard</h3>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Utilizatori</h5>
                    <p className="mt-10 text-4xl font-bold">45</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte</h5>
                    <p className="mt-10 text-4xl font-bold">32</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Iesiri</h5>
                    <p className="mt-10 text-4xl font-bold">3000 RON</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Intrari</h5>
                    <p className="mt-10 text-4xl font-bold">2000 RON</p>
                </Card>
            </div>
            <div className="flex items-center justify-between w-full mb-4 mt-4">
                <h4 className="text-3xl font-semibold">Proiecte</h4>
                <Button shape="circle">Proiect nou +</Button>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Titlu Proiect</h5>
                    <Progress percent={30} />
                    <p className="mt-2">Sarcini: 10/30</p>
                    <p className="mt-2">Status: In pregatire</p>
                    <p className="mt-2">Termen limita: 26 Iul 2024</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Titlu Proiect</h5>
                    <Progress percent={50} />
                    <p className="mt-2">Sarcini: 10/30</p>
                    <p className="mt-2">Status: In pregatire</p>
                    <p className="mt-2">Termen limita: 26 Iul 2024</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Titlu Proiect</h5>
                    <Progress percent={70} />
                    <p className="mt-2">Sarcini: 10/30</p>
                    <p className="mt-2">Status: In pregatire</p>
                    <p className="mt-2">Termen limita: 26 Iul 2024</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Titlu Proiect</h5>
                    <Progress percent={90} />
                    <p className="mt-2">Sarcini: 10/30</p>
                    <p className="mt-2">Status: In pregatire</p>
                    <p className="mt-2">Termen limita: 26 Iul 2024</p>
                </Card>
            </div>
            <div className="flex items-center justify-between w-full mb-4 mt-4">
                <h4 className="text-3xl font-semibold">Operatori</h4>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Operator #1</h5>

                    <div className="flex flex-row gap-2 mt-8">
                        <p className="">Buline Albe:</p>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                    </div>

                    <div className="flex flex-row gap-2 mt-6">
                        <p className="">Buline Negre:</p>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Operator #2</h5>
                    <div className="flex flex-row gap-2 mt-8">
                        <p className="">Buline Albe:</p>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                    </div>

                    <div className="flex flex-row gap-2 mt-6">
                        <p className="">Buline Negre:</p>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Operator #3</h5>
                    <div className="flex flex-row gap-2 mt-8">
                        <p className="">Buline Albe:</p>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                    </div>

                    <div className="flex flex-row gap-2 mt-6">
                        <p className="">Buline Negre:</p>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Operator #4</h5>
                    <div className="flex flex-row gap-2 mt-8">
                        <p className="">Buline Albe:</p>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                        <div className="w-4 h-4 bg-white rounded-full border"></div>
                    </div>

                    <div className="flex flex-row gap-2 mt-6">
                        <p className="">Buline Negre:</p>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home

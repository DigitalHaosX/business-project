import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Progress from '../components/ui/Progress'

import { useEffect, useState } from 'react'
import {
    fetchTotalUsers,
    fetchTotalProjects,
    fetchTotalExpenses,
    fetchTotalIncomes,
    fetchUsers,
} from '../views/demo/homeService'

interface User {
    id: number
    username: string
    firstName: string
    lastName: string
    role: string
    whitePoints: number
    blackPoints: number
}

const Home = () => {
    const [totalUsers, setTotalUsers] = useState<number | null>(null)
    const [totalProjects, setTotalProjects] = useState<number | null>(null)
    const [totalExpenses, setTotalExpenses] = useState<number | null>(null)
    const [totalIncomes, setTotalIncomes] = useState<number | null>(null)
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [users, projects, expenses, incomes] = await Promise.all([
                    fetchTotalUsers(),
                    fetchTotalProjects(),
                    fetchTotalExpenses(),
                    fetchTotalIncomes(),
                ])
                setTotalUsers(users)
                setTotalProjects(projects)
                setTotalExpenses(expenses)
                setTotalIncomes(incomes)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        const fetchUserData = async () => {
            try {
                const userData = await fetchUsers()
                setUsers(userData)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }

        fetchAllData()
        fetchUserData()
    }, [])

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
                    <p className="mt-10 text-4xl font-bold">
                        {totalUsers !== null ? totalUsers : 'N/A'}
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte</h5>
                    <p className="mt-10 text-4xl font-bold">
                        {' '}
                        {totalProjects !== null ? totalProjects : 'N/A'}
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Iesiri</h5>
                    <p className="mt-10 text-4xl font-bold">
                        {totalExpenses !== null ? totalExpenses : 'N/A'}
                    </p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Intrari</h5>
                    <p className="mt-10 text-4xl font-bold">
                        {totalIncomes !== null ? totalIncomes : 'N/A'}{' '}
                    </p>
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
            <div className="flex flex-wrap justify-between gap-4">
                {users.map((user, index) => (
                    <Card
                        key={user.id}
                        clickable
                        className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                        onClick={(e) =>
                            console.log(`Card Clicked for ${user.username}`, e)
                        }
                    >
                        <h5>
                            {user.firstName} {user.lastName} ({user.role})
                        </h5>
                        <div className="flex flex-row gap-2 mt-8">
                            <p>Buline Albe:</p>
                            {[...Array(user.whitePoints)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-4 h-4 bg-white rounded-full border"
                                ></div>
                            ))}
                        </div>
                        <div className="flex flex-row gap-2 mt-6">
                            <p>Buline Negre:</p>
                            {[...Array(user.blackPoints)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-4 h-4 bg-black rounded-full"
                                ></div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Home

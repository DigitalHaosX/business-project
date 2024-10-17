import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Progress from '../components/ui/Progress'
import { useState, useCallback } from 'react'
import { HiUserCircle, HiPlus, HiMinus } from 'react-icons/hi'

/* interface User {
    id: number
    username: string
    firstName: string
    lastName: string
    role: string
    whitePoints: number
    blackPoints: number
} */

const Home = () => {
    const [percentage, setPercentage] = useState(20)
    const [secondPercentage, setSecondPercentage] = useState(20)
    const [thirdPercentage, setThirdPercentage] = useState(20)
    const [fourthPercentage, setFourthPercentage] = useState(20)

    const onIncrease = useCallback(() => {
        let value = percentage + 10
        if (value > 100) {
            value = 100
        }
        setPercentage(value)
    }, [percentage])

    const onDecrease = useCallback(() => {
        let value = percentage - 10
        if (value < 0) {
            value = 0
        }
        setPercentage(value)
    }, [percentage])

    const onSecondIncrease = useCallback(() => {
        let value = secondPercentage + 10
        if (value > 100) {
            value = 100
        }
        setSecondPercentage(value)
    }, [secondPercentage])

    const onSecondDecrease = useCallback(() => {
        let value = secondPercentage - 10
        if (value < 0) {
            value = 0
        }
        setSecondPercentage(value)
    }, [secondPercentage])

    const onThirdIncrease = useCallback(() => {
        let value = thirdPercentage + 10
        if (value > 100) {
            value = 100
        }
        setThirdPercentage(value)
    }, [thirdPercentage])

    const onThirdDecrease = useCallback(() => {
        let value = thirdPercentage - 10
        if (value < 0) {
            value = 0
        }
        setThirdPercentage(value)
    }, [thirdPercentage])

    const onFourthIncrease = useCallback(() => {
        let value = fourthPercentage + 10
        if (value > 100) {
            value = 100
        }
        setFourthPercentage(value)
    }, [fourthPercentage])

    const onFourthDecrease = useCallback(() => {
        let value = fourthPercentage - 10
        if (value < 0) {
            value = 0
        }
        setFourthPercentage(value)
    }, [fourthPercentage])

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
                    <h5 className="text-4xl font-bold">Users</h5>
                    <p className="mt-10 text-4xl font-bold">30</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Projects</h5>
                    <p className="mt-10 text-4xl font-bold">50</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Expanses</h5>
                    <p className="mt-10 text-4xl font-bold">$12380</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Incomes</h5>
                    <p className="mt-10 text-4xl font-bold">$15583</p>
                </Card>
            </div>
            <div className="flex items-center justify-between w-full mb-4 mt-4">
                <h4 className="text-3xl font-semibold">Projects</h4>
                <Button shape="circle">New Project +</Button>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Project Title</h5>
                    <Progress percent={30} />
                    <div className="flex justify-between">
                        <p className="flex mt-2 ">Tasks:</p>
                        <p className="flex mt-2">10/30</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Status:</p>
                        <p className="mt-2">In Progress</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Deadline:</p>
                        <p className="mt-2">01/10/2024</p>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Project Title</h5>
                    <Progress percent={50} />
                    <div className="flex justify-between">
                        <p className="flex mt-2 ">Tasks:</p>
                        <p className="flex mt-2">15/30</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Status:</p>
                        <p className="mt-2">Approved</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Deadline:</p>
                        <p className="mt-2">10/10/2024</p>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Project Title</h5>
                    <Progress percent={70} />
                    <div className="flex justify-between">
                        <p className="flex mt-2 ">Tasks:</p>
                        <p className="flex mt-2">20/30</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Status:</p>
                        <p className="mt-2">Completed</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Deadline:</p>
                        <p className="mt-2">15/10/2024</p>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5>Project Title</h5>
                    <Progress percent={90} />
                    <div className="flex justify-between">
                        <p className="flex mt-2 ">Tasks:</p>
                        <p className="flex mt-2">25/30</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Status:</p>
                        <p className="mt-2">Declined</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-2">Deadline:</p>
                        <p className="mt-2">03/10/2024</p>
                    </div>
                </Card>
            </div>
            <div className="flex items-center justify-between w-full mb-4 mt-4">
                <h4 className="text-3xl font-semibold">Users</h4>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[350px]"
                    onClick={() => console.log('click')}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[50px] h-[50px]" />
                    </div>

                    <div className="flex flex-row justify-center gap-2 mt-2">
                        <h5>Firstname Lastname (Admin)</h5>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <Progress
                            className="flex items-center justify-center"
                            variant="circle"
                            percent={percentage}
                        />
                        <strong>Performance rating</strong>

                        <div className="flex flex-row justify-between w-full px-6">
                            <Button icon={<HiMinus />} onClick={onDecrease} />
                            <Button icon={<HiPlus />} onClick={onIncrease} />
                        </div>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[350px]"
                    onClick={() => console.log('click')}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[50px] h-[50px]" />
                    </div>

                    <div className="flex flex-row justify-center gap-2 mt-2">
                        <h5>Firstname Lastname (User)</h5>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <Progress
                            className="flex items-center justify-center"
                            variant="circle"
                            percent={secondPercentage}
                        />
                        <strong>Performance rating</strong>

                        <div className="flex flex-row justify-between w-full px-6">
                            <Button
                                icon={<HiMinus />}
                                onClick={onSecondDecrease}
                            />
                            <Button
                                icon={<HiPlus />}
                                onClick={onSecondIncrease}
                            />
                        </div>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[350px]"
                    onClick={() => console.log('click')}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[50px] h-[50px]" />
                    </div>

                    <div className="flex flex-row justify-center gap-2 mt-2">
                        <h5>Firstname Lastname (User)</h5>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <Progress
                            className="flex items-center justify-center"
                            variant="circle"
                            percent={thirdPercentage}
                        />
                        <strong>Performance rating</strong>

                        <div className="flex flex-row justify-between w-full px-6">
                            <Button
                                icon={<HiMinus />}
                                onClick={onThirdDecrease}
                            />
                            <Button
                                icon={<HiPlus />}
                                onClick={onThirdIncrease}
                            />
                        </div>
                    </div>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out rounded-2xl w-[300px] h-[350px]"
                    onClick={() => console.log('click')}
                >
                    <div className="flex items-center justify-center">
                        <HiUserCircle className="w-[50px] h-[50px]" />
                    </div>

                    <div className="flex flex-row justify-center gap-2 mt-2">
                        <h5>Firstname Lastname (Role)</h5>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <Progress
                            className="flex items-center justify-center"
                            variant="circle"
                            percent={fourthPercentage}
                        />
                        <strong>Performance rating</strong>

                        <div className="flex flex-row justify-between w-full px-6">
                            <Button
                                icon={<HiMinus />}
                                onClick={onFourthDecrease}
                            />
                            <Button
                                icon={<HiPlus />}
                                onClick={onFourthIncrease}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home

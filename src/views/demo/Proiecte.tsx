import { Card } from '@/components/ui'
import CustomTable from './CustomTable'

const Proiecte = () => {
    const columns = [
        {
            header: 'Task Name',
            accessorKey: 'taskName',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Assigned To',
            accessorKey: 'assignedTo',
        },
        {
            header: 'Due Date',
            accessorKey: 'dueDate',
        },
    ]

    const data = [
        {
            taskName: 'Task 1',
            status: 'Pending',
            assignedTo: 'John Doe',
            dueDate: '2024-09-10',
        },
        {
            taskName: 'Task 2',
            status: 'In Progress',
            assignedTo: 'Jane Smith',
            dueDate: '2024-09-12',
        },
        {
            taskName: 'Task 3',
            status: 'Completed',
            assignedTo: 'Alice Johnson',
            dueDate: '2024-09-14',
        },
        {
            taskName: 'Task 1',
            status: 'Pending',
            assignedTo: 'John Doe',
            dueDate: '2024-09-10',
        },
        {
            taskName: 'Task 2',
            status: 'In Progress',
            assignedTo: 'Jane Smith',
            dueDate: '2024-09-12',
        },
        {
            taskName: 'Task 3',
            status: 'Completed',
            assignedTo: 'Alice Johnson',
            dueDate: '2024-09-14',
        },
        {
            taskName: 'Task 1',
            status: 'Pending',
            assignedTo: 'John Doe',
            dueDate: '2024-09-10',
        },
        {
            taskName: 'Task 2',
            status: 'In Progress',
            assignedTo: 'Jane Smith',
            dueDate: '2024-09-12',
        },
        {
            taskName: 'Task 3',
            status: 'Completed',
            assignedTo: 'Alice Johnson',
            dueDate: '2024-09-14',
        },
        {
            taskName: 'Task 1',
            status: 'Pending',
            assignedTo: 'John Doe',
            dueDate: '2024-09-10',
        },
        {
            taskName: 'Task 2',
            status: 'In Progress',
            assignedTo: 'Jane Smith',
            dueDate: '2024-09-12',
        },
        {
            taskName: 'Task 3',
            status: 'Completed',
            assignedTo: 'Alice Johnson',
            dueDate: '2024-09-14',
        },
        // more data...
    ]
    return (
        <div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Proiecte</h3>
            </div>
            <div className="flex flex-row justify-between">
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte</h5>
                    <p className="mt-4 text-4xl font-bold">45</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">
                        Proiecte in pregatire
                    </h5>
                    <p className="mt-4 text-4xl font-bold">10</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte in progres</h5>
                    <p className="mt-4 text-4xl font-bold">5</p>
                </Card>
                <Card
                    clickable
                    className="hover:shadow-lg transition duration-150 ease-in-out w-[300px] h-[200px]"
                    onClick={(e) => console.log('Card Clickable', e)}
                >
                    <h5 className="text-4xl font-bold">Proiecte finalizate</h5>
                    <p className="mt-4 text-4xl font-bold">30</p>
                </Card>
            </div>
            <div
                className="mt-4"
                style={{
                    border: '1px solid #d1d5db', // Tailwind's "gray-300" color
                    borderRadius: '8px', // Optional: adds rounded corners
                    padding: '16px', // Optional: adds padding inside the border
                }}
            >
                <CustomTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Proiecte

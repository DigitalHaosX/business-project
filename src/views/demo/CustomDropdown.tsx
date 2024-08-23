import Dropdown from '@/components/ui/Dropdown'
import { HiDotsVertical } from 'react-icons/hi'

const CustomDropdown = ({ items }) => {
    const Toggle = (
        <div className="flex items-center cursor-pointer">
            <HiDotsVertical className="ml-2" />
        </div>
    )

    return (
        <div>
            <Dropdown renderTitle={Toggle} placement="bottom-end">
                {items.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item.eventKey}>
                        {item.label}
                    </Dropdown.Item>
                ))}
            </Dropdown>
        </div>
    )
}

export default CustomDropdown

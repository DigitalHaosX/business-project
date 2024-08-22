import Dropdown from '@/components/ui/Dropdown'
import { HiChevronDown } from 'react-icons/hi'

const CustomDropdown = ({ items }) => {
    const Toggle = (
        <div className="flex items-center cursor-pointer">
            <HiChevronDown className="ml-2" />
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

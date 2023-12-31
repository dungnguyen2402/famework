import { Button } from "@/components";
import { ICar } from "@/interfaces/Car";
import { GoTrash } from "react-icons/go";

type ListProps = {
    car: ICar[];
    onRemove: (car: ICar) => void;
};

const Item = ({ car, onRemove }: ListProps) => {
    return (
        <li className="flex justify-between items-center p-2 border-b border-red-200">
            {car.name}
            <Button danger onClick={() => onRemove(car)}>
                <GoTrash />
            </Button>
        </li>

    );
};

export default Item;

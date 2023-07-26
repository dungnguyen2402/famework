import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";
import { ICar } from '@/interfaces/Car';
import { useState } from "react";

type FormProps = {
    onAdd: (car: ICar) => void
};

const Form = ({ onAdd }: FormProps) => {

    const [valueInput, setValueInput] = useState<string>("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput,
            });
            const form = e.target as HTMLFormElement;
            form.reset();
            setValueInput("");
        }
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="border-b mb-3 p-3 flex justify-between items-center">
            <Input placehoder="Car Name" onChange={onHandleChange} />
            <Button primary>
                <AiOutlinePlus />
            </Button>
        </form>
    );
};

export default Form;
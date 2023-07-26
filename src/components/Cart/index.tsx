import { useDispatch, useSelector } from "react-redux"
import { Button } from ".."


const Cart = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: any) => state.cart)

    return (
        <Button></Button>
    )
}

export default Cart
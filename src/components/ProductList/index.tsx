import { useEffect } from 'react'
import { Button } from '..'
import Skeleton from 'react-loading-skeleton'
// import { instance } from '@/axios/config'
import { addProduct, deleteProduct, getProduct, updateProduct } from '@/action/product'
import { Dispatch } from 'redux'
import { useAppDispatch, useAppSelector } from '@/store/hook'


const ProductList = () => {
    // const { products, addProduct, isLoading, error, fetchProducts, updateProduct, removeProduct } = useContext(ProductContext)
    // const { state, dispatch } = useContext(ProductContext)
    // const dispatch = useDispatch();
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products)


    useEffect(() => {
        dispatch(getProduct());
    }, []);

    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => {
                return <div style={{ display: 'flex' }} key={item.id}>
                    <p>{item.name}</p>
                    <span style={{ paddingLeft: "10px", cursor: 'pointer' }}>Add to cart</span>
                </div>

            })}

            <Button type="primary" onClick={() => dispatch(addProduct({ name: "Product C" }))}>
                Add Product
            </Button>
            <Button
                type="primary"
                onClick={() => dispatch(updateProduct({ name: "Product C updated ", id: 3 }))}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => dispatch(deleteProduct(3))}>
                Delete Product
            </Button>
        </div>
    )
}

export default ProductList
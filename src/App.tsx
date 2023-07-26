// import { useEffect, useState } from "react";
// import "./App.css";
// import { ICar } from "./interfaces/Car";
// import { List } from "./components";
// import Form from "./components/Form";
// import Table from "./components/Table";
// import { instance } from "./axios/config";
// import { pause } from "./utils/pause";
// import "react-loading-skeleton/dist/skeleton.css"

// // const carsData = [
// //     { id: 1, name: "BMW", price: 100 }, // item
// //     { id: 2, name: "Mercedes", price: 200 }, // item
// //     { id: 3, name: "Ford", price: 300 }, // item
// // ]

// const columns = [
//     {
//         label: "Name",
//         key: "name",
//     },
//     {
//         label: "Price",
//         key: "price",
//     },
// ];

// // const carsConfigData = [
// //     {
// //         lable: "Name",
// //         name: "name",
// //         render: (item: any) => <span className="uppercase text-red-500">{item.name}</span>,
// //         header: (item: any) => <span className="text-green-500">{item.lable}</span>,
// //     },
// //     {
// //         label: "Price",
// //         key: "price",
// //         render: (item: any) => <span className="font-bold">{item.price}</span>,
// //     }
// // ]

// function App() {
//     const [cars, setCars] = useState<ICar[]>([]);
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<null>(null);

//     useEffect(() => {
//         (async () => {
//             setIsLoading(true)
//             try {
//                 await pause(1000);
//                 setCars(await instance.get("/cars"));
//                 setIsLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setIsLoading(false)
//             }
//         })();
//     }, []);


//     const addCar = (car: ICar) => {
//         setCars([...cars, car]);
//     };
//     const removeCar = (car: ICar) => {
//         setCars(cars.filter((item) => item.id !== car.id));
//     };

//     return (
//         <div>
//             <div className="w-96 mx-auto border">
//                 <Form onAdd={addCar} />
//                 <List cars={cars} onRemove={removeCar} loading={isLoading} />
//             </div>
//             <hr />
//             <h2>Table </h2>
//         </div>
//     );
// }

// export default App;
// npm i -g pnpm
// pnpm create vite@latest -- --template react-ts
// cd vite-react-ts
// pnpm i
// Chỉnh sửa file tsconfig.json
// cài đặt thêm module vite paths: vite-tsconfig-paths
// chỉnh sửa file vite.config.ts

import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
    return (
        <div>
            <Counter />
            <ProductList />
        </div>
    );
}

export default App;

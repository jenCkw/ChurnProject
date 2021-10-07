import React from 'react'
import CardItem from './CardItem'
import Chart from './chart/Chart'
import { userData } from '../dummyData'


function Home() {
    return (
        <div className="home workflow">
            <div className="row bg-white p-4 m-2">
                <CardItem title="Product" number={200}/>
                <CardItem title="Users" number={5}/>
                <CardItem title="Customer" number={100}/>
            </div>
            <div className="card bg-white p-4 m-2">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
        </div>
    )
}

export default Home

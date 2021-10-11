import CardItem from '../CartItem/CartItem';
import Chart from '../chart/Chart'
import { userData } from '../../dummyData'


function Home() {
    return (
        <div className="home workflow">
            <div className="row bg-white p-4 m-2">
                <CardItem title="Product" estimations={200}/>
                <CardItem title="Users" estimations={5}/>
                <CardItem title="Customer" estimations={100}/>
            </div>
            <div className="card bg-white p-4 m-2">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
        </div>
    )
}

export default Home
import CardItem from '../CartItem/CartItem';
import Chart from '../chart/Chart'
import { userData } from '../../dummyData'
import { useChurnQuery } from '../../generated/graphql';


function Home() {
    const { data } = useChurnQuery({fetchPolicy:'network-only'})
    let data_yes = []
    let data_no = []

    // eslint-disable-next-line
    data?.churn.map((x)=>{
        if(x.churn === 'Yes'){
            data_yes.push(x.churn)
        } else if(x.churn === 'No'){
            data_no.push(x.churn);
        }
    })
  
    return (
        <div className="home workflow">
            <div className="row bg-white p-4 m-2">
                <CardItem title="Customer" estimations={data?.churn.length}/>
                <CardItem title="Churn Customer" estimations={data_yes.length}/>
                <CardItem title="No Churn Customer" estimations={data_no.length}/>
            </div>
            <div className="card bg-white p-4 m-2">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
        </div>
    )
}

export default Home
import CardItem from '../CartItem/CartItem';
import Chart from '../chart/Chart'
import { userData } from '../../dummyData'
import { useChurnQuery } from '../../generated/graphql';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import PersonIcon from '@mui/icons-material/Person';

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
                <CardItem 
                title="Customers" 
                estimations={data?.churn.length} 
                path="/customer"
                Icon={PersonIcon}
                />
                <CardItem 
                title="Churn Customers" 
                estimations={data_yes.length}
                path="/churn_yes"
                Icon={PersonAddIcon}
                />
                <CardItem 
                title="No Churn Customers" 
                estimations={data_no.length}
                path="/churn_no"
                Icon={PersonAddDisabledIcon}
                />
            </div>
            <div className="card bg-white p-4 m-2">
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
        </div>
    )
}

export default Home
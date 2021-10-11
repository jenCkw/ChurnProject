import { useHelloQuery } from "../../generated/graphql"

function User() {
    const {data} = useHelloQuery();
  
    return (
        <div className="workflow p-4">
            <h1>User</h1>
            <div>
               <p>{data?.hello}</p>
            </div>
        </div>
    )
}

export default User

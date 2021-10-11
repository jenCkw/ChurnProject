import { useHelloQuery } from "../../generated/graphql"

function User() {
    const {data} = useHelloQuery();
    console.log(data)
    return (
        <div className="workflow">
            <h1>User</h1>
            <div>
               
            </div>
        </div>
    )
}

export default User

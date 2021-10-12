import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import { getAccessToke } from '../authentication/accessToken';
const  PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

    const condition = getAccessToke();

    return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/login"  />);
};
export  default  PrivateRoute;
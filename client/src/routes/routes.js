import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Users from "../pages/Users"
import AddUser from "../pages/AddUser";
import DetailUser from "../pages/DetailUser";
import EditUser from "../pages/EditUser"



export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/users',
                element: <Users/>
            },
            {
                path:'/add-user',
                element: <AddUser/>
            },
            {
                path:'/users/:id',
                element: <DetailUser/>
            },
            {
                path:'/users/edit/:id',
                element: <EditUser/>
            }
        ]
    }
    
]
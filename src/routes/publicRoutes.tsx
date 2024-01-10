
import Login from "../pages/Login"
import * as React from "react"


const PublicRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default PublicRoutes
import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminOrderView() {
    return (
        <div className="wrapper">
            <MyHeader />
            <div className="page-content">
                {/* Start Container Fluid */}
                


                {/* ========== Footer Start ========== */}
                <MyFooter />
                {/* ========== Footer End ========== */}
                
            </div>
        </div >
    );
}
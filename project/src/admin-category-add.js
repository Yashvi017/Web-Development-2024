import { Link } from "react-router-dom";
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminCategoryAdd() {
    return (
        <div className="wrapper">
            <MyHeader/>
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row w-100 align-items-center">
                                        <div className="col">
                                            <h4 className="card-title mb-0">Add Category</h4>
                                        </div>
                                        <div className="col-auto">
                                            <Link to="/category-list" className="btn btn-light btn-sm">
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="categoryName" className="form-label">Category Name</label>
                                                <input type="text" className="form-control" id="categoryName" placeholder="Enter category name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="categoryImage" className="form-label">Category Image</label>
                                                <input className="form-control" type="file" id="categoryImage" accept="image/*" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="categoryDescription" className="form-label">Description</label>
                                            <textarea className="form-control" id="categoryDescription" rows={3} placeholder="Enter category description" required defaultValue={""} />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <button type="reset" className="btn btn-outline-primary">Clear all</button>
                                            &nbsp;&nbsp;
                                            <button type="submit" className="btn btn-primary">Add Category</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container Fluid */}
                {/* ========== Footer Start ========== */}
                <MyFooter/>
                {/* ========== Footer End ========== */}
            </div>
            {/* ==================================================== */}
            {/* End Page Content */}
            {/* ==================================================== */}
        </div>
    );
}
import MyHeader from "./admin-myheader";
import MyFooter from "./admin-myfooter";

export default function AdminCategoryEdit() {
    return (
        <div className="wrapper">
            <MyHeader/>
            <div className="page-content">
                {/* Start Container Fluid */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row w-100 align-items-center">
                                        <div className="col">
                                            <h4 className="card-title mb-0">Edit Category</h4>
                                        </div>
                                        <div className="col-auto">
                                            <a href="category_list-admin.html" className="btn btn-light btn-sm">
                                                Back
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* Image Preview Column */}
                                        <div className="col-md-12 col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label d-block">Current Category Image</label>
                                                <img id="previewImage" src="/admin/assets/images/product/p-1.png" alt="Current Category Image" className="img-thumbnail mb-2" />
                                            </div>
                                        </div>
                                        {/* Edit Form Column */}
                                        <div className="col-md-12 col-lg-6">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="categoryName" className="form-label">Category Name</label>
                                                    <input type="text" className="form-control" id="categoryName" defaultValue="Fashion" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="categoryDescription" className="form-label">Description</label>
                                                    <textarea className="form-control" id="categoryDescription" rows={3} required defaultValue={"Includes apparel, shoes, and accessories"} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="categoryImage" className="form-label">Change Category
                                                        Image</label>
                                                    <input className="form-control" type="file" id="categoryImage" accept="image/*" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="reset" className="btn btn-outline-primary">Reset</button>
                                        &nbsp;&nbsp;
                                        <button type="submit" className="btn btn-primary">Update Category</button>
                                    </div>
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
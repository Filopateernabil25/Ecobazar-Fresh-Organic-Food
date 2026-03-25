import React, { useContext, useState } from 'react'
import { ProductContext } from '../services/ApiProducts';
import { CategoryContext } from '../services/ApiCategories';
import { ClipLoader } from 'react-spinners';
import { useCart } from './product/CartContext';
import { Link } from 'react-router-dom';
export default function Shop() {
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState("");
    const { products } = useContext(ProductContext);
    const { Categories } = useContext(CategoryContext);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    if (products.length === 0) {
        return (
            <div className="loading-screen d-flex justify-content-center align-items-center">
                <ClipLoader color="#0d6efd" size={60} />
            </div>
        );
    }
    const displayedProducts = products.filter(product => {
        const matchCategory =
            !selectedCategoryId || product.category_id === selectedCategoryId;

        const matchSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
    });
    return (
        <>
            <div className="container my-3">

                <div className="row gx-10">
                    <div className="col-12">
                        {/* filter btn */}
                        <a className="btn btn-outline-gray-400 mb-2 text-muted " data-bs-toggle="collapse" href="#collapseFilter" role="button" aria-expanded="true" aria-controls="collapseFilter">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter me-2">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                            Filters
                        </a>
                        {/* collapse */}
                        <div className="mt-6 collapse show" id="collapseFilter" style={{}}>
                            <div className="row row-cols-lg-3 row-cols-1 row-cols-md-2 mb-3">
                                {/* col */}
                                <div className="col">
                                    {/* card */}
                                    <div className="card mb-4 mb-lg-0">
                                        <div className="card-body p-6">
                                            {/* content */}
                                            <h5 className="mb-3">Categories</h5>
                                            {/* nav */}
                                            <ul className="nav nav-category">
                                                <li className="nav-item border-bottom w-100">
                                                    <button
                                                        className={`nav-link btn btn-link text-success text-start ${selectedCategoryId === null ? 'active-category' : ''}`}
                                                        onClick={() => setSelectedCategoryId(null)}
                                                    >
                                                        All Categories
                                                    </button>
                                                </li>
                                                {/* nav item */}
                                                {
                                                    Categories.map((category) => {
                                                        return (
                                                            <li key={category.id} className="nav-item border-bottom w-100">
                                                                <button
                                                                    className={`nav-link btn btn-link text-success text-start ${selectedCategoryId === category.id ? 'active-category' : ''}`}
                                                                    onClick={() => setSelectedCategoryId(category.id)}
                                                                >
                                                                    {category.name}
                                                                </button>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {/* col */}
                                </div>
                                <div className="col-6">
                                    {/* card */}
                                    <div className="card mb-4 mb-lg-0">
                                        <div className="card-body p-6">
                                            {/* content */}
                                            <div>
                                                <h5 className="mb-3">Stores</h5>
                                                <div className="my-4">
                                                    {/* input */}
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        placeholder="Search by store"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                    />                                                </div>
                                                {products
                                                    .slice(3, 9)
                                                    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                                    .map((product) => (
                                                        <div key={product.id} className="form-check mb-2">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue
                                                                id={product.name}
                                                            />
                                                            <label className="form-check-label" htmlFor={product.name}>
                                                                {product.name}
                                                            </label>
                                                        </div>
                                                    ))}


                                            </div>
                                        </div>
                                    </div>
                                    {/* col */}
                                </div>
                                <div className="col">
                                    {/* card */}
                                    <div className="card mb-4 mb-lg-0">
                                        <div className="card-body p-6">
                                            {/* content */}
                                            <div>
                                                <h5 className="mb-3">Rating</h5>
                                                <div>
                                                    <div className="form-check mb-2">
                                                        {/* input */}
                                                        <input className="form-check-input" type="checkbox" defaultValue id="ratingFive" />
                                                        {/* rating */}
                                                        <label className="form-check-label" htmlFor="ratingFive">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        {/* input */}
                                                        <input className="form-check-input" type="checkbox" defaultValue id="ratingFour" defaultChecked />
                                                        {/* rating */}
                                                        <label className="form-check-label" htmlFor="ratingFour">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        {/* input */}
                                                        <input className="form-check-input" type="checkbox" defaultValue id="ratingThree" />
                                                        {/* rating */}
                                                        <label className="form-check-label" htmlFor="ratingThree">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        {/* input */}
                                                        <input className="form-check-input" type="checkbox" defaultValue id="ratingTwo" />
                                                        {/* rating */}
                                                        <label className="form-check-label" htmlFor="ratingTwo">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        {/* input */}
                                                        <input className="form-check-input" type="checkbox" defaultValue id="ratingOne" />
                                                        {/* rating */}
                                                        <label className="form-check-label" htmlFor="ratingOne">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                            <i className="bi bi-star text-warning" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-10">
                        {/* content */}
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div>
                                <p className="mb-3 mb-md-0">
                                    <span className="text-dark">{products.length} </span>
                                    Products found
                                </p>
                            </div>
                            {/* list */}
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="me-2">
                                    {/* select */}
                                    <select className="form-select">
                                        <option selected>Show: 50</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                    </select>
                                </div>
                                {/* select */}
                                <div>
                                    <select className="form-select">
                                        <option selected>Sort by: Featured</option>
                                        <option value="Low to High">Price: Low to High</option>
                                        <option value="High to Low">Price: High to Low</option>
                                        <option value="Release Date">Release Date</option>
                                        <option value="Avg. Rating">Avg. Rating</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row g-2 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 row-cols-sm-1 mt-2">
                            {displayedProducts.length === 0 && (
                                <div className="alert alert-danger w-100 text-center" role="alert">
                                    No products found!
                                </div>
                            )}
                            {displayedProducts.slice(3, 21).map(product => {
                                const category = Categories.find(cat => cat.id === product.category_id);
                                return (
                                    <div key={product.id} className="col-4">
                                        <div className="product-card mb-2">
                                            <img src={product.image} alt={product.name} />
                                            <div className="product-body">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <h5 className="product-title">{product.name.substring(0, 10)}</h5>
                                                        <p className="product-price">${product.price}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <button className="wishlist-btn">
                                                            <i className="fa-regular fa-heart"></i>
                                                        </button>
                                                        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <Link to={`/product/${product.id}`} className='more-details-btn'>More Details</Link>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="/shopping">1</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="back-to-home-wrapper">
                <Link to="/" className="back-to-home-btn">
                    <span className="btn-icon">
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </span>
                    <span className="btn-text">Back to Home</span>
                </Link>
            </div>

        </>
    )
}

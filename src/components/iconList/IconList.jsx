function IconList({ cartItemCount }) {
    return (
        <div className="Header-icons">
            <div className="icon-container">
                <i className="fas fa-shopping-cart"></i>
                    {cartItemCount > 0 && (
                        <span className="icon-badge">{cartItemCount}</span>
                    )}
            </div>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
        </div>
    )
}

export default IconList;
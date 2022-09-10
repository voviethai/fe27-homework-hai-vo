import "./cartItem.css";
export const CartItem = (props) => {
    return <div className="body">
        <div className="card">
            <div className="card-header">
                <div className="card-img"></div>
            </div>
            <div className="card-body">
                <div className="card-title">Title</div>
                <div className="card-point"><span className="card-icon">*****</span> 4.5(413)</div>
                <h4> Secondary text</h4>
                <div className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div className="card-subtitle"> Subtitle</div>
                <div className="card-item-list">
                    <div className="card-item">Item 1</div>
                    <div className="card-item">Item 2</div>
                    <div className="card-item">Item 3</div>
                    <div className="card-item">Item 4</div>
                </div>
                <div className="action">ACTION 1</div>
            </div>
        </div>
    </div>
}
export default CartItem;
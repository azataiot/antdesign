import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return(
            <div className="shopping-list">
                <h1>Shopping List for { this.props.name }</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsAPP</li>
                    <li>Wechat</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;
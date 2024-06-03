import React from 'react'

export default function Listing(props) {
  const {items} = props;
  
  const titleStr = (str: string) => {
    return str.slice(0, 49) + '...';
  };

  const currency = (curr: string, currSum: number) => {
    if (curr === 'USD') {
      return '$' + currSum;
    } else if (curr === 'EUR') {
      return '€' + currSum;
    } else {
      return currSum + '  £';
    }
  }

  const classQuantity = (quantity: number) => {
    if (quantity <= 10) {
      return 'item-quantity level-low';
    } else if (quantity <= 20) {
      return 'item-quantity level-medium';
    } else {
      return 'item-quantity level-high';
    }
  }

  return (
    <div className="item-list">
      {
        items.map(item => {
          if (item.state === "active") {
            return (
              <div className="item" id = {item.listing_id}>
                <div className = "item-image">
                  <a href = {item.url}>
                    <img src = {item.MainImage.url_fullxfull}/>
                  </a>
                </div>
                <div className = "item-details">
                  <p className = "item-title">{titleStr(item.title)}</p>
                  <p className = "item-price">{currency(item.currency_code, item.price)}</p>
                  <p className = {classQuantity(item.quantity)}>{item.quantity} left</p>
                </div>
              </div>
            );
          }
  
        })
      }

    </div>
  )
}

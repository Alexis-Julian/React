import React from "react";
import SppinerLoading from "./widgets/SppinerLoading";

function CartItem({ items }) {
  const RenderProductCard = (items) => {
    if (items) {
      return items.map((ele) => {
        return (
          <li key={ele.id} data-aos="fade-right" data-aos-duration="1000">
            <div>
              <figure>
                <img src={ele.img} alt="" height={"100"} width={"100"} />
              </figure>
            </div>
            <div>
              <p>{ele.title}</p>
            </div>
            <div>
              <p>$ {ele.price * ele.count}</p>
            </div>
            <div className="counts">Cant: ({ele.count})</div>
          </li>
        );
      });
    } else {
      return <SppinerLoading />;
    }
  };
  return <>{RenderProductCard(items)}</>;
}

export default CartItem;

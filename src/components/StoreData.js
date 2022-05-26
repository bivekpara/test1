import React, { useEffect, useState } from "react";
import { ProductData } from "./ProductData";

export const StoreData = () => {
  const [users, setUsers] = useState(null);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .then(console.log(users));
  }, [url]);

  let content = <div>Loading...</div>;

  if (users) {
    content = (
      <div>
        {users.map((item, i) => (
          <ProductData product={item} key={i} />
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
};

import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function CartWidget({ color }) {
  return (
    <a href="#" style={{ color: color }}>
      <li>
        <ShoppingCartOutlinedIcon />
      </li>
    </a>
  );
}

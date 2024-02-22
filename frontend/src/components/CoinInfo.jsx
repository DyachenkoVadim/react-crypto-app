import { Flex, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useRef, useEffect } from "react";
export default function CoinInfo({ coin, withSymbol, withCross, onClose }) {
  // document.getElementById("cross-icon").addEventListener("click", onClose);
  const ref = useRef(null);
  if (withCross) {
    useEffect(() => {
      const handleClick = (event) => {
        onClose();
      };

      const element = ref.current;

      element.addEventListener("click", handleClick);

      return () => {
        element.removeEventListener("click", handleClick);
      };
    }, []);
  }

  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" style={{ width: "100%" }}>
        <img src={coin.icon} alt={coin.name} style={{ width: 40 }} />
        <Typography.Title level={2} style={{ margin: 0, marginLeft: 10 }}>
          {withSymbol && <span>({coin.symbol})</span>} {coin.name}
        </Typography.Title>
      </Flex>
      {withCross && <CloseOutlined ref={ref} style={{ cursor: "pointer" }} />}
    </Flex>
  );
}

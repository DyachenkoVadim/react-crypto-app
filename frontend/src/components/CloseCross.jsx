import { CloseOutlined } from "@ant-design/icons";
import { useCrypto } from "../context/crypto-context.jsx";
import { useRef, useEffect } from "react";

export default function CloseCross({ asset }) {
  const { removeAsset } = useCrypto();
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      removeAsset(asset);
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);
  return <CloseOutlined style={{ cursor: "pointer" }} ref={ref} />;
}

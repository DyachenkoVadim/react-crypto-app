import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "./antd/dist/antd.variable.min.css";
import { ConfigProvider, theme } from "antd";

const root = document.getElementById("root");

// ConfigProvider.config({ theme: { primaryColor: "#F5F7B2" } });

createRoot(root).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#D65A31",
        colorInfo: "#1687a7",
        colorBgBase: "#393E46",
        colorText: "#EEEEEE",
        colorSuccess: "#a0d911",
        colorError: "#FF4D4F",
      },
      components: {
        Spin: {
          colorBgMask: "#393E46",
          colorWhite: "rgb(214, 90, 49)",
          dotSize: 32,
        },
      },
      algorithm: theme.darkAlgorithm,
    }}
  >
    <App />
  </ConfigProvider>
);

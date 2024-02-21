import { Layout, Spin, ConfigProvider } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context";

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }
  <ConfigProvider
    theme={{
      token: {
        colorBgContainer: "",
        colorPrimary: "#FFC93C",
      },
      components: {
        Table: {
          headerBorderRadius: 10,
        },
      },
    }}
  />;

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}

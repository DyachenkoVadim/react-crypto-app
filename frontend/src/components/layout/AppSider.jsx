import { useEffect, useRef, useContext } from "react";
import { Layout, Card, Statistic, List, Typography, Tag } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { capitalize } from "../../utils";
import CryptoContext from "../../context/crypto-context.jsx";
import CloseCross from "../CloseCross.jsx";

const siderStyle = {
  backgroundColor: "#222831",
  padding: "1rem",
};

export default function AppSider() {
  const { assets } = useContext(CryptoContext);

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map((asset) => (
        <Card
          key={asset.id}
          style={{ marginBottom: "1rem" }}
          extra={<CloseCross asset={asset} />}
          title={capitalize(asset.id)}
        >
          <Statistic
            value={asset.totalAmount}
            precision={2}
            valueStyle={{ color: asset.grow ? "#a0d911" : "#FF4D4F" }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="$"
          />
          <List
            size="small"
            dataSource={[
              {
                title: "Total Profit",
                value: asset.totalProfit,
                withTag: true,
              },
              { title: "Asset Amount", value: asset.amount, isPlain: true },
              // {title: 'Difference', value: asset.growPercent},
              { title: "Price", value: asset.price, isPlain: false },
            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                <span>
                  {item.withTag && (
                    <Tag color={asset.grow ? "green" : "red"}>
                      {asset.growPercent}%
                    </Tag>
                  )}
                  {item.isPlain && item.value}
                  {!item.isPlain && (
                    <Typography.Text type={asset.grow ? "success" : "danger"}>
                      {item.value.toFixed(2) + "$"}
                    </Typography.Text>
                  )}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
}

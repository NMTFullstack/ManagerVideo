"use client";

import React, { useState } from "react";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
import { PATH_HOME } from "@/common/constants/path.constants";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("TimViec365", "sub1", <UserOutlined />, [
        getItem(
            <div>
                <Link href={PATH_HOME.BLOG_TIM_VIEC}>Bài blog</Link>
            </div>,
            "3"
        ),
        getItem(
            <div>
                <Link href={PATH_HOME.TD_TIM_VIEC}>Tin tuyển dụng</Link>
            </div>,
            "4"
        ),
        getItem(
            <div>
                <Link href={PATH_HOME.UV_TIM_VIEC}>Tin ứng viên</Link>
            </div>,
            "5"
        ),
    ]),
    getItem("Work247", "sub2", <TeamOutlined />, [
        getItem(
            <div>
                <Link href={PATH_HOME.BLOG_WORK247}>Bài blog</Link>
            </div>,
            "6"
        ),
        getItem(
            <div>
                <Link href={PATH_HOME.TD_WORK247}>Tin Tuyển dụng</Link>
            </div>,
            "8"
        ),
        getItem(
            <div>
                <Link href={PATH_HOME.UV_WORK247}>Tin Ứng viên</Link>
            </div>,
            "9"
        ),
    ]),
    getItem("HungHa365", "10", <FileOutlined />),
];

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const pathname = usePathname();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <div className="mt-60">
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                        items={items}
                    />
                </div>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb
                        style={{ margin: "16px 0" }}
                        items={[
                            {
                                title: <Link href="/">Home</Link>,
                            },
                            {
                                title: <ArrowRightOutlined />,
                            },
                            {
                                title: pathname,
                            },
                        ]}
                    ></Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 600,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    NMT Design ©2023 Created by NMT
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutDashboard;

import React, {useState} from 'react';
import HeaderDiv from './HeaderDiv';
import {Drawer, Layout} from 'antd';
import MainMenu2 from "./MainMenu2";
import FooterContent from "./FooterContent";

const {Header, Sider, Content, Footer} = Layout;

function Layouts(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }
    const showSidebar = () => {
        setVisible(true);
    }

    return (
        <Layout className={`${props.classname}`}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="sidebar-left"
                width={240}
            >
                <div>
                    <MainMenu2
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}
                    />
                </div>
                <div>
                    <Drawer
                        title={null}
                        closable={false}
                        placement="left"
                        onClose={onClose}
                        visible={visible}
                        bodyStyle={{
                            padding: '0'
                        }}
                        className="wrap-drawer-sidebar"
                    >
                        <MainMenu2
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                        />
                    </Drawer>
                </div>
            </Sider>
            <Layout>
                <Header className="headerTop">
                    <HeaderDiv
                        collapsed={collapsed}
                        toggle={toggle}
                        showSidebar={showSidebar}
                    />
                </Header>
                <Content
                    className={collapsed ? "collapsed mainContent" : "mainContent"}
                >
                    {props.children}
                </Content>
                <Footer
                    className={collapsed ? "collapsed mainFooter" : "mainFooter"}
                >
                    <FooterContent />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Layouts;

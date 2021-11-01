import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import LayoutLogin from '../components/LayoutLogin';
import {Button, Checkbox, Form, Icon, Input, message} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../actions";
import {loginActionType} from "../actions/actionTypes";
import {Routes} from "../common/Routes";
import {contentMessage, notiMessage} from "../common/Message";
import APICode from "../common/APICode";

function Login(props) {
    const dispatch = useDispatch();
    let history = useHistory();

    const loginReducer = useSelector((state) => state.loginReducer);

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const {getFieldDecorator} = props.form;

    const openMessage = () => {
        message.loading('Loading...', 60);
    };

    const handleSubmit = e => {
        e.preventDefault ();
        props.form.validateFields ((err, values) => {
            if (!err && !loadingSubmit) {
                let params = {
                    "email": values.email,
                    "password": values.password,
                }
                dispatch(loginAction.postLogin(params));
                if (!loadingSubmit) {
                    openMessage();
                }
                setLoadingSubmit(true);
            }
        });
    };

    useEffect(() => {
        if (loginReducer.type === loginActionType.LOGIN_SUCCESS) {
            message.destroy();
            history.push(Routes.Dashboard.path);
        }
        if (loginReducer.type === loginActionType.LOGIN_FAILED) {
            if (loginReducer.status === APICode.PERMISSION_DENIED) {
                notiMessage(400, loginReducer.message || contentMessage.MESSAGE_LOGIN_FAILED);
                message.destroy();
                setLoadingSubmit(false);
            } else {
                notiMessage(400, contentMessage.MESSAGE_LOGIN_FAILED);
                message.destroy();
                setLoadingSubmit(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginReducer]);

    return (
        <LayoutLogin title="login" classname="login">
            <div className="d-flex align-items-center justify-content-center flex-column wrap-login">
                <div className="wrap-form-login">
                    <div className="text-center px-5">
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: '66px',
                            }}
                        />
                        <h1 className="m-b-30 m-t-15">FFlancer - Admin</h1>
                        <p className="text-login">Login</p>
                    </div>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator ('email', {
                                rules: [
                                    {required: true, message: 'Please enter your username'},
                                ],
                            }) (
                                <Input
                                    prefix={
                                        <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator ('password', {
                                rules: [
                                    {required: true, message: 'Please enter your password'},
                                ],
                            }) (
                                <Input.Password
                                    prefix={
                                        <Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />
                                    }
                                    // type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator ('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            }) (<Checkbox>Save login</Checkbox>)}
                            <Link className="float-right" to="#">
                                Forgot password
                            </Link>

                            <Button
                                type="primary"
                                htmlType="submit"
                                className="btn-block m-t-15"
                                size="large"
                                // loading={loadingSubmit}
                            >
                                <span>Login</span>
                            </Button>
                            <p>Do not have an account? <Link to="#">Contact now</Link></p>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </LayoutLogin>
    );
}

const WrappedNormalLoginForm = Form.create ({name: 'normal_login'}) (Login);

export default WrappedNormalLoginForm;

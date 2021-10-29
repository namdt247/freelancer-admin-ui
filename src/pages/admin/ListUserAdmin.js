import Layouts from "../../components/Layouts";
import * as React from "react";
import {useEffect, useState} from "react";
import {Breadcrumb, Button, Card, Col, Divider, Input, Row} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {accountAction} from "../../actions";
import {accountActionType} from "../../actions/actionTypes";
import {contentMessage, notiMessage} from "../../common/Message";
import {Routes} from "../../common/Routes";
import ModalAccountAdmin from "./components/ModalAccountAdmin";
import TableAccountAdmin from "./components/TableAccountAdmin";

function ListUserAdmin() {
    const dispatch = useDispatch();

    const accountReducer = useSelector((state) => state.accountReducer);

    const [listUserAdmin, setListUserAdmin] = useState([]);

    // form modal
    const [visible, setVisible] = useState(false);
    const [typeForm, setTypeForm] = useState('add');
    const [accountId, setAccountId] = useState('');

    // loading
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const pageSize = 10;

    // search
    const [fullName, setFullName] = useState('');

    let params = {
        'currentPage': currentPage,
        'pageSize': pageSize,
        'typeUser': 0,
    }

    const titlePage = () => {
        return (
            <div className="d-md-flex justify-content-between mb-3">
                <div>
                    <h4 className="mb-0">List user admin</h4>
                </div>
                <div>
                    <Button type="primary" onClick={handleShowForm} className="mt-md-0 mt-2">
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="mr-2"
                        />
                        Create
                    </Button>
                </div>
            </div>
        )
    }

    const handleChangeKeyword = (e) => {
        setFullName(e.target.value || '');
    }

    const handleSearch = () => {
        let paramSearch = {
            ...params,
            currentPage: 1,
        }
        dispatch(accountAction.getLisAccount(paramSearch));
    }

    const handleShowForm = () => {
        setVisible(true);
        setTypeForm('add');
        setAccountId('');
    }

    const handleChangePage = (value) => {
        setCurrentPage(value);
    }

    const handleDelete = (value) => {
        let paramsDelete = {
            accountId: value,
        }
        dispatch(accountAction.deleteAccount(paramsDelete));
    }

    useEffect(() => {
        dispatch(accountAction.getLisAccount(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    useEffect(() => {
        if (accountReducer.type === accountActionType.GET_LIST_ACCOUNT) {
            setLoading(true);
        }
        if (accountReducer.type === accountActionType.GET_LIST_ACCOUNT_SUCCESS) {
            setListUserAdmin(accountReducer.data?.list || []);
            setTotalPage(accountReducer.data?.totalPage || 0);
            setLoading(false);
        }

        if (accountReducer.type === accountActionType.ADD_ACCOUNT_SUCCESS) {
            let params2 = {
                ...params,
                'currentPage': 1,
            }
            dispatch(accountAction.getLisAccount(params2));
        }

        if (accountReducer.type === accountActionType.UPDATE_ACCOUNT_SUCCESS) {
            dispatch(accountAction.getLisAccount(params));
        }

        if (accountReducer.type === accountActionType.DELETE_ACCOUNT_SUCCESS) {
            notiMessage(200, contentMessage.MESSAGE_DELETE_SUCCESS)
            let params3 = {};
            if (listUserAdmin.length === 1) {
                let page = currentPage;
                if (currentPage > 1) {
                    params3 = {
                        ...params,
                        'currentPage': page - 1,
                        'pageSize': pageSize,
                    }
                    setCurrentPage(page - 1);
                } else {
                    params3 = {
                        ...params,
                    }
                }
            } else {
                params3 = {
                    ...params,
                }
            }
            dispatch(accountAction.getLisAccount(params3));
        }
        if (accountReducer.type === accountActionType.DELETE_ACCOUNT_FAILED) {
            notiMessage(400, contentMessage.MESSAGE_DELETE_FAILED);
            dispatch(accountAction.getLisAccount(params));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountReducer]);

    return (
        <Layouts>
            <div className="mb-1">
                <Breadcrumb>
                    <Breadcrumb.Item href={Routes.Dashboard.path}>
                        <FontAwesomeIcon
                            icon={faHome}
                            className="mr-1"
                        />
                        <span>Home</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>List admin</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            {titlePage()}
            <Card
                bordered={false}
                className="wrap-main-component"
            >
                <Row gutter={16} className="mb-custom-1">
                    <Col md={6} className="search">
                        <Input
                            type="text"
                            placeholder="Full name..."
                            allowClear
                            onChange={handleChangeKeyword}
                            value={fullName}
                        />
                    </Col>
                    <Col md={18} className="mt-md-0 mt-2">
                        <Button type="primary" className="btn-search" onClick={handleSearch}>
                            Search
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <TableAccountAdmin
                    loading={loading}
                    data={listUserAdmin}
                    currentPage={currentPage}
                    totalPage={totalPage}
                    pageSize={pageSize}
                    handleChangePage={handleChangePage}
                    setVisible={setVisible}
                    setTypeForm={setTypeForm}
                    setAccountId={setAccountId}
                    handleDelete={handleDelete}
                />
                <ModalAccountAdmin
                    visible={visible}
                    setVisible={setVisible}
                    typeForm={typeForm}
                    accountId={accountId}
                />
            </Card>
        </Layouts>
    );
};

export default ListUserAdmin;

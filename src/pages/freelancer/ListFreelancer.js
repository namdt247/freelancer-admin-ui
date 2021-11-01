import Layouts from "../../components/Layouts";
import * as React from "react";
import {useEffect, useState} from "react";
import {Breadcrumb, Button, Card, Col, Divider, Input, Row} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {freelancerAction} from "../../actions";
import {freelancerActionType} from "../../actions/actionTypes";
import {contentMessage, notiMessage} from "../../common/Message";
import {Routes} from "../../common/Routes";
import TableFreelancer from "./components/TableFreelancer";
import DrawerFreelancer from "./components/DrawerFreelancer";

function ListFreelancer() {
    const dispatch = useDispatch();

    const freelancerReducer = useSelector((state) => state.freelancerReducer);

    const [listFreelancerAdmin, setListFreelancerAdmin] = useState([]);

    // form modal
    const [visible, setVisible] = useState(false);
    const [typeForm, setTypeForm] = useState('add');
    const [freelancerId, setFreelancerId] = useState('');

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
    }

    const titlePage = () => {
        return (
            <div className="d-md-flex justify-content-between mb-3">
                <div>
                    <h4 className="mb-0">Freelancer management</h4>
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
        dispatch(freelancerAction.getLisFreelancer(paramSearch));
    }

    // const handleShowForm = () => {
    //     setVisible(true);
    //     setTypeForm('add');
    //     setFreelancerId('');
    // }

    const handleChangePage = (value) => {
        setCurrentPage(value);
    }

    const handleDelete = (value) => {
        let paramsDelete = {
            freelancerId: value,
        }
        dispatch(freelancerAction.deleteFreelancer(paramsDelete));
    }

    useEffect(() => {
        dispatch(freelancerAction.getLisFreelancer(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    useEffect(() => {
        if (freelancerReducer.type === freelancerActionType.GET_LIST_FREELANCER) {
            setLoading(true);
        }
        if (freelancerReducer.type === freelancerActionType.GET_LIST_FREELANCER_SUCCESS) {
            setListFreelancerAdmin(freelancerReducer.data?.list || []);
            setTotalPage(freelancerReducer.data?.totalPage || 0);
            setLoading(false);
        }

        if (freelancerReducer.type === freelancerActionType.DELETE_FREELANCER_SUCCESS) {
            notiMessage(200, contentMessage.MESSAGE_DELETE_SUCCESS)
            let params3 = {};
            if (listFreelancerAdmin.length === 1) {
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
            dispatch(freelancerAction.getLisFreelancer(params3));
        }
        if (freelancerReducer.type === freelancerActionType.DELETE_FREELANCER_FAILED) {
            notiMessage(400, contentMessage.MESSAGE_DELETE_FAILED);
            dispatch(freelancerAction.getLisFreelancer(params));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [freelancerReducer]);

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
                        <span>Freelancer management</span>
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
                <TableFreelancer
                    loading={loading}
                    data={listFreelancerAdmin}
                    currentPage={currentPage}
                    totalPage={totalPage}
                    pageSize={pageSize}
                    handleChangePage={handleChangePage}
                    setVisible={setVisible}
                    setTypeForm={setTypeForm}
                    setFreelancerId={setFreelancerId}
                    handleDelete={handleDelete}
                />
                <DrawerFreelancer
                    visible={visible}
                    setVisible={setVisible}
                    typeForm={typeForm}
                    freelancerId={freelancerId}
                />
            </Card>
        </Layouts>
    );
};

export default ListFreelancer;

import Layouts from "../../components/Layouts";
import * as React from "react";
import {useEffect, useState} from "react";
import {Breadcrumb, Card, Divider} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {freelancerAction, transactionAction} from "../../actions";
import {transactionActionType} from "../../actions/actionTypes";
import {Routes} from "../../common/Routes";
import TableTransaction from "./components/TableTransaction";

function ListTransaction() {
    const dispatch = useDispatch();

    const transactionReducer = useSelector((state) => state.transactionReducer);

    const [listTransaction, setListTransaction] = useState([]);

    // loading
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const pageSize = 10;

    // search

    let params = {
        'currentPage': currentPage,
        'pageSize': pageSize,
    }

    const titlePage = () => {
        return (
            <div className="d-md-flex justify-content-between mb-3">
                <div>
                    <h4 className="mb-0">Transaction management</h4>
                </div>
            </div>
        )
    }

    const handleSearch = () => {
        let paramSearch = {
            ...params,
            currentPage: 1,
        }
        dispatch(freelancerAction.getLisFreelancer(paramSearch));
    }

    const handleChangePage = (value) => {
        setCurrentPage(value);
    }

    useEffect(() => {
        dispatch(transactionAction.getLisTransaction(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    useEffect(() => {
        if (transactionReducer.type === transactionActionType.GET_LIST_TRANSACTION) {
            setLoading(true);
        }
        if (transactionReducer.type === transactionActionType.GET_LIST_TRANSACTION_SUCCESS) {
            setListTransaction(transactionReducer.data?.list || []);
            setTotalPage(transactionReducer.data?.totalPage || 0);
            setLoading(false);
        }
    }, [transactionReducer]);

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
                        <span>Transaction management</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            {titlePage()}
            <Card
                bordered={false}
                className="wrap-main-component"
            >
                <Divider />
                <TableTransaction
                    loading={loading}
                    data={listTransaction}
                    currentPage={currentPage}
                    totalPage={totalPage}
                    pageSize={pageSize}
                    handleChangePage={handleChangePage}
                />
            </Card>
        </Layouts>
    );
};

export default ListTransaction;

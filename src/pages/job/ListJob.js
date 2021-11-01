import Layouts from "../../components/Layouts";
import * as React from "react";
import {useEffect, useState} from "react";
import {Breadcrumb, Card} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {jobAction} from "../../actions";
import {jobActionType} from "../../actions/actionTypes";
import {Routes} from "../../common/Routes";
import DrawerJob from "./components/DrawerJob";
import TableJob from "./components/TableJob";

function ListJob() {
    const dispatch = useDispatch();

    const jobReducer = useSelector((state) => state.jobReducer);

    const [listJob, setListJob] = useState([]);

    // form modal
    const [visible, setVisible] = useState(false);
    const [typeForm, setTypeForm] = useState('add');
    const [jobId, setJobId] = useState('');

    // loading
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const pageSize = 10;

    // search
    // const [fullName, setFullName] = useState('');

    let params = {
        'currentPage': currentPage,
        'pageSize': pageSize,
    }

    const titlePage = () => {
        return (
            <div className="d-md-flex justify-content-between mb-3">
                <div>
                    <h4 className="mb-0">Job management</h4>
                </div>
            </div>
        )
    }

    // const handleChangeKeyword = (e) => {
    //     setFullName(e.target.value || '');
    // }

    // const handleSearch = () => {
    //     let paramSearch = {
    //         ...params,
    //         currentPage: 1,
    //     }
    //     dispatch(jobAction.getLisJob(paramSearch));
    // }

    const handleChangePage = (value) => {
        setCurrentPage(value);
    }

    useEffect(() => {
        dispatch(jobAction.getLisJob(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    useEffect(() => {
        if (jobReducer.type === jobActionType.GET_LIST_JOB) {
            setLoading(true);
        }
        if (jobReducer.type === jobActionType.GET_LIST_JOB_SUCCESS) {
            setListJob(jobReducer.data?.list || []);
            setTotalPage(jobReducer.data?.totalPage || 0);
            setLoading(false);
        }
    }, [jobReducer]);

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
                        <span>Job management</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            {titlePage()}
            <Card
                bordered={false}
                className="wrap-main-component"
            >
                <TableJob
                    loading={loading}
                    data={listJob}
                    currentPage={currentPage}
                    totalPage={totalPage}
                    pageSize={pageSize}
                    handleChangePage={handleChangePage}
                    setVisible={setVisible}
                    setTypeForm={setTypeForm}
                    setJobId={setJobId}
                />
                <DrawerJob
                    visible={visible}
                    setVisible={setVisible}
                    typeForm={typeForm}
                    jobId={jobId}
                />
            </Card>
        </Layouts>
    );
};

export default ListJob;

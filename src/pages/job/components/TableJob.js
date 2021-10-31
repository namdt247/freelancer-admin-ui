import * as React from 'react';
import {Table, Tag, Tooltip} from 'antd';
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import DateHelper from "../../../common/DateHelper";

function TableJob(props) {
    const {
        loading, data, currentPage, pageSize, totalPage, handleChangePage,
        setVisible, setTypeForm, setJobId,
    } = props;
    const totalItem = parseInt(pageSize) * parseInt(totalPage);

    const handleEdit = (value) => {
        setJobId(value.id || '');
        setVisible(true);
        setTypeForm('edit');
    }

    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt',
            width: '80px',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Renter',
            dataIndex: 'renter',
            key: 'renter',
            render: (text, record) => (
                <span>
                    {record.account?.username || ''}
                </span>
            ),
        },
        {
            title: 'Freelancer',
            dataIndex: 'freelancer',
            key: 'freelancer',
            render: (text, record) => (
                <span>
                    {record.freelancer?.account?.username || ''}
                </span>
            ),
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: text => (
                <span>
                    {text === 0 && (
                        <Tag className="text-danger">
                            Close
                        </Tag>
                    )}
                    {text === 1 && (
                        <Tag className="text-warning">
                            Pending
                        </Tag>
                    )}
                    {text === 2 && (
                        <Tag className="text-primary">
                            Doing
                        </Tag>
                    )}
                    {text === 3 && (
                        <Tag className="text-secondary">
                            Review
                        </Tag>
                    )}
                    {text === 4 && (
                        <Tag className="text-success">
                            Done
                        </Tag>
                    )}
                </span>
            ),
        },
        {
            title: 'Created at',
            dataIndex: 'created_at',
            key: 'created_at',
            render: text => text ? moment(text).format(DateHelper.formatFullDay()) : '',
        },
        {
            width: '40px',
            render: (text, record) => (
                <div className="d-flex justify-content-end">
                    <Tooltip placement="top" title={'Edit'}>
                        <span
                            className="wrap-button-info-2 text-center"
                            onClick={() => handleEdit(record)}
                        >
                            <FontAwesomeIcon
                                icon={faPencilAlt}
                            />
                        </span>
                    </Tooltip>
                </div>
            ),
        },
    ];

    const convertDataTable = (list) => {
        return list.map((item, index) => {
            return {
                ...item,
                stt: index + 1,
            }
        })
    }

    return (
        <Table
            columns={columns}
            dataSource={convertDataTable(data)}
            scroll={{x: true}}
            bordered
            rowKey={record => record.id}
            loading={loading}
            pagination={{
                current: currentPage,
                pageSize: pageSize,
                total: totalItem,
                onChange: (page) => {
                    handleChangePage(page);
                },
                showSizeChanger: false,
            }}
        />
    );
}
export default TableJob;

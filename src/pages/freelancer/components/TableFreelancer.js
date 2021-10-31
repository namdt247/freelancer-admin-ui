import * as React from 'react';
import {Avatar, Modal, Table, Tag, Tooltip, Rate} from 'antd';
import {faHome, faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {contentMessage, notiMessage} from "../../../common/Message";
import Util from "../../../common/Util";

const {confirm} = Modal;

function TableFreelancer(props) {
    const {
        loading, data, currentPage, pageSize, totalPage, handleChangePage, setVisible,
        setTypeForm, setFreelancerId, handleDelete,
    } = props;
    const totalItem = parseInt(pageSize) * parseInt(totalPage);

    console.log(data);

    const handleEdit = (value) => {
        setFreelancerId(value.id || '');
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
            title: 'Information',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="d-inline-flex align-items-center">
                    <div className="my-auto mr-2">
                        {record.thumbnail ? (
                            <Avatar size={40} src={record.thumbnail} />
                        ) : (
                            <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                {Util.getValueByName(record.account?.username || '')}
                            </Avatar>
                        )}
                    </div>
                    <div>
                        <div className="text-table-2">
                            {record.account?.username}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (text) => (
                <span>
                    {text}
                </span>
            ),
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
            render: (text) => (
                <span>
                    {text}
                </span>
            ),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: text => (
                <span>
                    <span>
                        <FontAwesomeIcon
                            icon={faHome}
                            className="mr-1 info-icon-color-2"
                        />
                    </span>
                    <span>{text}</span>
                </span>
            ),
        },
        {
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
            render: text => (
                <div>
                    {text.split(',').map((item) => {
                        return (<Tag color='geekblue'>{item}</Tag>)
                    })}
                </div>
            ),
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            render: text => (
                <Rate allowHalf value={text} />
            ),
        },
        {
            width: '90px',
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
                    <Tooltip placement="top" title={'Delete'} className="ml-1">
                        <span
                            className="wrap-button-delete-2 text-center"
                            onClick={() => showDeleteConfirm(record)}
                        >
                            <FontAwesomeIcon
                                icon={faTrashAlt}
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

    const showDeleteConfirm = (value) => {
        confirm({
            title: contentMessage.CONFIRM_DELETE_FREELANCER,
            content: contentMessage.UNRECOVERABLE_DATA,
            okText: 'Agree',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                if (value && value.id) {
                    handleDelete(value.id)
                } else {
                    notiMessage(400, contentMessage.MESSAGE_ERROR);
                }
            },
            onCancel() {},
        });
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
export default TableFreelancer;

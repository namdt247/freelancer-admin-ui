import * as React from 'react';
import {Modal, Table, Tooltip, Tag} from 'antd';
import {faHome, faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {contentMessage, notiMessage} from "../../../common/Message";
import ModelManager from "../../../common/ModelManager";

const {confirm} = Modal;

function TableFreelancerAdmin(props) {
    const {
        loading, data, currentPage, pageSize, totalPage, handleChangePage, setVisible,
        setTypeForm, setFreelancer, handleDelete,
    } = props;
    const totalItem = parseInt(pageSize) * parseInt(totalPage);

    const currentUserId = ModelManager.userId;

    const handleEdit = (value) => {
        setFreelancer(value || {});
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
            title: 'Fullname',
            dataIndex: 'name',
            key: 'name',
            render: text => (
                <span>
                    <span className="font-weight-bold">{text}</span>
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
                    {parseInt(currentUserId) !== record.id && (
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
                    )}
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
            title: contentMessage.CONFIRM_DELETE_ACCOUNT,
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
export default TableFreelancerAdmin;

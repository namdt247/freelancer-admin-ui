import * as React from 'react';
import {Avatar, Rate, Table, Tag} from 'antd';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Util from "../../../common/Util";
import moment from "moment";
import DateHelper from "../../../common/DateHelper";

function TableTransaction(props) {
    const {
        loading, data, currentPage, pageSize, totalPage, handleChangePage,
    } = props;
    const totalItem = parseInt(pageSize) * parseInt(totalPage);

    console.log(data)

    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt',
            width: '80px',
        },
        {
            title: 'Fullnane',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <span>
                    {record.account?.username || ''}
                </span>
            )
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text) => (
                <span>
                    {text}
                </span>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: text => (
                <>
                    {text === 1
                        ? (
                            <Tag color='geekblue'>
                                Recharge
                            </Tag>
                        )
                        : (
                            <Tag className="text-success">
                                Withdraw
                            </Tag>
                        )
                    }
                </>
            ),
        },

        {
            title: 'Time',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: text => text ? moment(text).format(DateHelper.formatFull()) : '',
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
export default TableTransaction;

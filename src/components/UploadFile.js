import React, {useEffect, useState} from "react";
import {Button, Icon, message, Upload} from 'antd';
import {APIConfig, BASE_API} from "../requests/ApiConfig";
import ModelManager from "../common/ModelManager";
import Util from "../common/Util";

function UploadFile(props) {
    const {text, file, setFile, fileName, setFileName, type} = props;

    const [listFile, setListFile] = useState([]);

    const [loading, setLoading] = useState(false);

    const beforeUpload = (file) => {
        const isPdf = file.type === 'application/pdf';
        if (!isPdf) {
            message.error('Chỉ có thể upload file có định dạng PDF!');
        }
        const isFileSize= file.size / 1024 / 1024 < 5;
        if (!isFileSize) {
            message.error('Dung lượng file tối đa 5Mb');
        }
        return isPdf && isFileSize;
    }

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
        }
        if (info.file && info.file.status) {
            let fileList = [...info.fileList];

            fileList = fileList.slice(-1);

            fileList = fileList.map(file => {
                if (file.response) {
                    let fUrl = file.response.data?.DuongDan || '';
                    let fName = file.response.data?.TenTepTin || '';
                    file.url = fUrl ? Util.getThumb(fUrl): '';
                    setFile(fUrl);
                    setFileName(fName);
                    if (loading) {
                        setLoading(false);
                    }
                }
                return file;
            });
            setListFile(fileList);
        }
    };

    const handleRemove = () => {
        setFile('');
        setFileName('');
    }

    const uploadButton = (
        <Button className="d-flex align-items-center">
            <Icon type={loading ? 'loading' : 'upload'} /> {text}
        </Button>
    );

    useEffect(() => {
        if (file && (type === 'edit' || type === 'return')) {
            setListFile([
                {
                    uid: '1',
                    name: fileName,
                    status: 'done',
                    url: Util.getThumb(file)
                }
            ])
        }
        if (!file) {
            setListFile([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file, type])

    return (
        <Upload
            name='file'
            action={`${BASE_API}${APIConfig.URL_UPLOAD_PDF}`}
            headers={{
                authorization: `Bearer ${ModelManager.token}`,
            }}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            onRemove={handleRemove}
            fileList={listFile}
        >
            {uploadButton}
        </Upload>
    );
}

export default UploadFile;

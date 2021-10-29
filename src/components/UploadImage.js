import React, {useState} from "react";
import {Icon, message, Upload} from 'antd';
import {APIConfig, BASE_API} from "../requests/ApiConfig";
import ModelManager from "../common/ModelManager";
import Util from "../common/Util";
import {contentMessage} from "../common/Message";

function UploadImage(props) {
    const {form, fieldName} = props;
    const [loading, setLoading] = useState(false);

    let imageUrl = form.getFieldValue(fieldName);

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Chỉ có thể upload file có định dạng JPG/PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 3;
        if (!isLt2M) {
            message.error('Dung lượng ảnh tối đa 3Mb');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            setLoading(false);
            if (info.file.response && info.file.response.message) {
                form.setFields({
                    [fieldName]: {
                        value: info.file.response.message,
                    }
                })
            } else {
                message.error(contentMessage.MESSAGE_ERROR);
            }
        }
    };
    const uploadButton = (
        <div>
            <Icon type={loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <Upload
            name="file"
            listType="picture-card"
            className="upload-image"
            showUploadList={false}
            multiple={false}
            action={`${BASE_API}${APIConfig.URL_UPLOAD_IMAGE}`}
            headers={{
                authorization: `Bearer ${ModelManager.token}`,
            }}
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? <img src={Util.getThumb(imageUrl)} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    );
}

export default UploadImage;

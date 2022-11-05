import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} 파일이 성공적으로 업로드 되었습니다.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} 파일이 업로드가 실패하였습니다.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function MultipleUpload(){

    return(
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">드래그엔 드롭으로 파일을 업로드 해주세요</p>
        <p className="ant-upload-hint">
          단일 업로드와 대량 업로드를 지원합니다.
        </p>
      </Dragger>)
}

export default MultipleUpload
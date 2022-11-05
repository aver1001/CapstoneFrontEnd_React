import { Button, PageHeader,message, Popconfirm,Row, Statistic, Divider } from 'antd';

function Down(props){
  const confirm = () => {
    message.info('삭제되었습니다');
  };

  // 차량번호, 위반, 벌금, 이미지url
  const carNumber = props.info.carNumber
  const violation = props.info.violation
  const imgUrl = props.info.imgUrl
  const fine = {
    '정지선위반': 50000,
    '제차조작신호불이행' : 100000,
  }

    return(
        <div
        >
    <PageHeader
    style={{
      backgroundColor:'white'
    }}
      title="위반 검출"
      extra={[
        <Button key="2" type='primary' >다운로드</Button>,
        <Popconfirm
        placement="bottomRight"
        title='정말로 삭제하시겠습니까?'
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button key="1" type="primary" danger> 삭제</Button>
      </Popconfirm>
        ,
      ]}
    >
      <Row>
        <Statistic title="차량번호" value={carNumber} />
        <Statistic
          title="예상벌금"
          prefix="₩"
          value={fine[violation]}
          style={{
            margin: '0 32px',
          }}
        />
        <Statistic title="위반사항" value={violation} />
      </Row>
      <Divider/>
      <img
      src={imgUrl}
      style={{
        width: '100%'
      }}>
      </img>
    </PageHeader>
  </div>

    )
}

export default Down
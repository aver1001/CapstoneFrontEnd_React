import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function Detail(){
    return(
        <div
        style={{
            marginLeft:'5px'
        }}>
            <Collapse

            bordered={true}
            defaultActiveKey={['1','2','3']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            <Panel header="프로젝트의 진행이유" key="1" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="" key="2" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
        </Collapse>
            
        </div>


    )
}

export default Detail
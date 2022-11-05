import { Collapse, Space } from 'antd';
import React from 'react';
const { Panel } = Collapse;

function Question(){
    return(
        <div>
            <Collapse ghost
            style={{
                textAlign:'left'
            }}>
                <Panel header="첫번쨰 질문" key="1">
                    <p>첫번쨰 질문의 내용</p>
                </Panel>
                <Panel header="두번쨰 질문" key="2">
                    <p>두번쨰 질문의 내용</p>
                </Panel>
                <Panel header="세번쨰 질문" key="3">
                    <p>세번쨰 질문의 내용</p>
                </Panel>
            </Collapse>

        </div>
        

    )
}

export default Question
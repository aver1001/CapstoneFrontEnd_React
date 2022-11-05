import {Layout} from 'antd';
const {Footer} = Layout;
function Foot (){
    return(
    <div>
        
        <Footer style={{ textAlign: 'center',backgroundColor:'#e5e5e5'}}>
            <hr
            style={{
                border:'0.1px solid lightgray'
            }}>
            </hr>
            상태동 ©2022 Created by 박승수,이정혁 
            </Footer>
    </div>
            )
}

export default Foot
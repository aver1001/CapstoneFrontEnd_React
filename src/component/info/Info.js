import Card from "antd/lib/card/Card"
import Question from "./Question"

function Info(){
    return(
        <div
        className="MainWarp"
        style={{
            height:'89vh',
        }}>
            <Card
                title="Info"
                bordered={true}
                style={{
                    textAlign:'center',
                    margin:'auto',
                    height:790,
                    minWidth:500,
                    maxWidth:1200
                }}>
                    <Question/>


                </Card>
            

        </div>

    )
}

export default Info
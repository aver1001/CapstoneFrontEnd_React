import Card from "antd/lib/card/Card"
import DeveloperInfo from "./DeveloperInfo"

function Developer(){
    return(
        <div
        className="MainWarp"
        style={{
            height:'87vh',
        }}>
            <Card
                title="Developer"
                bordered={true}
                style={{
                    textAlign:'center',
                    margin:'auto',
                    height:790,
                    minWidth:500,
                    maxWidth:1200
                }}>

                    <DeveloperInfo/>


                </Card>
            

        </div>

    )
}

export default Developer
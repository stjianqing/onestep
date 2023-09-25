import React from "react";

class info extends React.Component {
    render() {

        const title="This is my title"; 
        const showTitle= true;
        return(
            <div> 
              <h1> {showTitle ? title : "" }</h1>
            </div>
          
            )
    }
}

export default info;
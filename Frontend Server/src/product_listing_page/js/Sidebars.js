import React from 'react';
import Sidebar from 'react-sidebar';

class Sidebars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
        this.sidebar = this.sidebar.bind(this);
      }
     
      sidebar(open) {
        this.setState({ open: open });
      }

   render(){
        return(
                <div>
                    <Sidebar
                        sidebar={<b>Sidebar content</b>}
                        open={this.state.open}
                        onSetOpen={this.sidebar}
                        styles={{ sidebar: { background: "pink"}}}>
                        <button onClick={() => this.sidebar(true)}>
                            Open sidebar
                        </button>
                    </Sidebar>
                </div>
        );
    }  
}

export default Sidebars
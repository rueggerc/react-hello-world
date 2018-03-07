import React from 'react';
import './MyList.css';
import Foo from './Foo';


class MyList extends React.Component {


    render() {
		return (
			<div className="MyList">
              <Foo name="Jim"/>
              <Foo name="Sally"/>
              <Foo name="Captain"/>
			</div>
		);
    }
}

export default MyList;

import {connect} from 'react-redux';
import React, { useState } from 'react';
import { fetchdata } from '../../api/fetcdata'
import { DownloadIcon } from '@patternfly/react-icons';
const Community: React.FC = (props:any) => {
  // const items: any = [];
  // const data = fetchdata()
  // //data.then((val) => console.log(val));
  // // data.then((val) => val.map((it: any) => items.push(it.Name))).then(() => console.log(items))

  return (
    <div>
  
      <h1>Ayo - {props.users}</h1>

    </div>

  );
};

const mapStateToProps = (state:any) => {
  console.log("dsdsdas");
  return {
    users: state.data
  }
}

export default connect (mapStateToProps)(Community);

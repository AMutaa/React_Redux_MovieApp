import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility }) => (
  <div>
    {messageVisibility &&
      <p>You'll be seeing this</p>
    }
    <button>Toggle Me</button>
  </div>
)

const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
})

export default connect(mapStateToProps)(Toggle)
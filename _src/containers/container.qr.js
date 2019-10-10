import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class ContainerQr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Qr Component"
    };
  }

  render() {
    return (
      <Button variant="contained" color="primary">Get Qr Code</Button>
    )
  }
}

export default ContainerQr;
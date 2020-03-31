import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

class navBarComponent extends React.Component {
  onLeftClick = () => {
    const { history } = this.props
    history.goBack();
  }
  render() {
    const { navBarText } = this.props
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={this.onLeftClick}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >{navBarText}</NavBar>
    )
  }
}

export default navBarComponent

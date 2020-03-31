import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class LoadingPage extends React.Component {
  UNSAFE_componentWillMount() {
    NProgress.start()
  }
  componentWillUnmount() {
    NProgress.done()
  }
  render() {
    return (
      <div />
    )
  }
}

export default LoadingPage

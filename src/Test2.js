import React, { Component } from 'react';

import styles from './Test2.module.css';

class Test2 extends Component {

  constructor (props) {
    super(props)
    this.state = {
      'test':'test'
    }
  }

  render() {

    return (
      <section className="section">
          <h1 className={`title ${styles.headerTest}`}>Test2</h1>
          <h2 className="subtitle">
            Lots of cool stuff
          </h2>
      </section>
    )
  }
}

export default Test2;

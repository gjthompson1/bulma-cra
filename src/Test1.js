import React, { Component } from 'react';

import styles from './Test1.module.css';

class Test1 extends Component {

  constructor (props) {
    super(props)
    this.state = {
      'test':'test'
    }
  }

  render() {
    console.log(styles);
    return (
      <section className="section">
          <h1 className={`title ${styles.headerTest}`}>Test1</h1>
          <h2 className="subtitle">
            Lots of cool stuff
          </h2>
      </section>
    )
  }
}

export default Test1;

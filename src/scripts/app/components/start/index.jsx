import React from 'react';
import { connect } from 'react-redux';

import * as itemsActions from 'app/redux/actions/items';

import autobind from 'autobind-decorator';

import _map from 'lodash/map';

class Start extends React.Component {
  static propTypes = {
    itemsCount: React.PropTypes.number.isRequired,
    items: React.PropTypes.array.isRequired
  };

  @autobind
  onAddItem() {
    this.props.dispatch(itemsActions.addItem({
      name: `Item ${this.props.itemsCount + 1}`,
      id: this.props.itemsCount + 1
    }));
  }

  renderItem(item) {
    return (<li key={item.id}>{item.name}</li>);
  }
  renderItems(items) {
    return (<ul>
      {_map(items, this.renderItem)}
    </ul>);
  }
  render() {
    return (<div>
      Total items: {this.props.itemsCount}
      {this.renderItems(this.props.items)}
      <button onClick={this.onAddItem}>Add another</button>
    </div>);
  }
}

const mapStateToProps = (state) => {
  const r = {
    itemsCount: state.items.list.length,
    items: state.items.list
  };
  return r;
};

export default connect(mapStateToProps)(Start);

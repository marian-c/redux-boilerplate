import * as itemsActions from 'app/redux/actions/items';

import defaultState from '../state';

const items = (stateToReduce = defaultState.items, action) => {
  switch (action.type) {
    case itemsActions.ADD_ITEM:
      return {
        ...stateToReduce,
        list: [...stateToReduce.list, action.item]
      };

    default:
      return stateToReduce;
  }
};

export default items;

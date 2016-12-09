import	{	combineReducers	}	from	'redux';

import { booksReducer as books}	from	'./books';
import { cardReducer as card }	from	'./card';

export default combineReducers({
  books,
  card
});

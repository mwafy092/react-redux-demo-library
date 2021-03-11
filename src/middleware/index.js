import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './logger';
import { checker } from './checker';

export default applyMiddleware(thunk, logger, checker);

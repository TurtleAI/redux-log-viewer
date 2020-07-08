import { ACTION_STRING_MAP_FORMAT_TYPE } from './constants';
import { actionStringMapFormatter } from './actionStringMapFormatter';

export function getFormatter(value) {
  switch (value) {
    case ACTION_STRING_MAP_FORMAT_TYPE.value:
      return actionStringMapFormatter;
    default:
      return null;
  }
}

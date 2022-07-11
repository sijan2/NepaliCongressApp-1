import colors from '@assets/colors/colors';
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Search
 **/

const Search: FC<IProps> = props => {
  return (
    <Svg width={21} height={21} fill="none" {...props}>
      <Path
        d="M9.78 16.734a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333ZM18.114 18.4l-3.625-3.624"
        stroke={colors.fontColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Search;

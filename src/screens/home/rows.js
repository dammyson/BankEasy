import {Text, View} from 'react-native';
import {lightTheme} from '../../theme/colors';

export const Rows = ({
  description,
  boldValue,
  lightValue,
  noBorder,
  textClass,
  height,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomWidth: noBorder ? 0 : 1,
        borderColor: lightTheme.BORDER_MAIN,
        height: height ?? 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <Text style={textClass}>{description}</Text>
        <View>
          <Text
            style={{
              color:
                description === 'Total amount'
                  ? lightTheme.ORANGE
                  : lightTheme.HEADER_MAIN,
              fontWeight: 600,
              fontSize: description === 'Total amount' ? 20 : 16,
              textAlign: 'right',
            }}>
            {boldValue}
          </Text>
          {lightValue && (
            <Text style={{textAlign: 'right', color: lightTheme.NEUTRAL_MAIN}}>
              {lightValue}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

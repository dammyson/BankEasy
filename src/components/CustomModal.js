import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {lightTheme} from '../theme/colors';

const CustomModal = ({
  close,
  show,
  description,
  src,
  btnText,
  children,
  className,
  handleClick,
  positionClass,
}) => {
  const deviceHeight = useWindowDimensions().height;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={close}>
      <TouchableOpacity
        onPress={handleClick}
        style={positionClass ?? styles.container}>
        <SafeAreaView>
          {children ? (
            children
          ) : (
            <View>
              <View style={[styles.modalBody, {maxHeight: deviceHeight * 0.7}]}>
                <View>
                  <Image source={src} style={{height: 170, width: 170}} />
                </View>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>{description}</Text>
                </View>
              </View>
            </View>
          )}
        </SafeAreaView>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000AA',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  modalBody: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: Dimensions.get('window').height / 1.8,
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: lightTheme.MODAL_BORDER,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
  },
  modalContent: {
    marginTop: 14,
  },
  modalTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
  },
  modalText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: lightTheme.PRIMARY_COLOR,
  },
  bold: {
    fontWeight: '700',
    fontSize: 17,
  },
  plan: {
    backgroundColor: '#F5F5F5',
    padding: 5,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

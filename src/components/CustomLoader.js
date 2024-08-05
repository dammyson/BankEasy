import {Dimensions, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {mini_logo} from '../assets/images';
import {useEffect, useRef} from 'react';

export const CustomLoader = ({loading}) => {
  const animatableRef = useRef(null);

  useEffect(() => {
    const startAnimation = () => {
      animatableRef.current
        .zoomIn(2000)
        .then(() => animatableRef.current.zoomOut(2000))
        .then(startAnimation);
    };
    if (loading) {
      startAnimation();
    }
  }, [loading]);
  return (
    <Animatable.View
      ref={animatableRef}
      iterationCount="infinite"
      style={{
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image style={{height: 100, width: 100}} source={mini_logo} />
    </Animatable.View>
  );
};

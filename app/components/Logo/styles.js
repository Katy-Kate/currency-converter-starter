import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = 100;

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth
  },
  logo: {
    position: 'absolute',
    height: imageWidth,
    width: imageWidth / 2
  },
  text: {
    color: 'white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600'
  }
});

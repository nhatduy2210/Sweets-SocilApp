const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    imgBack: {
        marginTop: 10,
        marginLeft: 15,
    },
    viewlogo: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
    },
    viewif: {
        width: '100%',
        height: 'auto',
        marginLeft: 15,
    },
    txt1: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000000',
    },
    viewinput: {
        position: 'absolute',
        flexDirection: 'row',
        width: 'auto',
        height: 70,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'grey',
        borderRadius: 20,
        top: 270,
        right: 15,
        left: 15,
      },
      input: {
        flex: 1,
        height: 70,
        paddingLeft: '5%',
        paddingRight: '5%',
        color: '#000000',
        fontSize: 18,
    },
    viewinput2: {
        position: 'absolute',
        flexDirection: 'row',
        width: 'auto',
        height: 70,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'grey',
        borderRadius: 20,
        top: 360,
        right: 15,
        left: 15,
      },
      input2: {
        flex: 1,
        height: 70,
        paddingLeft: '5%',
        paddingRight: '5%',
        color: '#000000',
        fontSize: 18,
    },
    button: {
        position: 'absolute',
        width: 'auto',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3cc8bf',
        borderRadius: 30,
        top: 480,
        left: 15,
        right: 15,
    },
    txt3: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
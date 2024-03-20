import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        flexWrap: "wrap"
    },
    tagStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
        borderRadius: 5,
        marginEnd: responsiveWidth(2),
    },
    labelStyle: {
        color: '#000000',
        fontSize: responsiveFontSize(1.6),
        includeFontPadding: false
    }
});
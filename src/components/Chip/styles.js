import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    style: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
        borderRadius: 5,
    },
    labelStyle: {
        fontSize: responsiveFontSize(1.6),
        includeFontPadding: false
    }
});
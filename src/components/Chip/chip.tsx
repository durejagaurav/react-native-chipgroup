import React, { ReactNode } from "react";
import { Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, View, Image } from "react-native";
import { styles } from "./styles";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

interface Props {
    mode?: 'flat' | 'outlined';
    children?: ReactNode
    onPress?: () => void
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    isCloseIcon?: Boolean
    onClose?: () => void
    containerStyle?: StyleProp<ViewStyle>
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>
}

export const Chip: React.FC<Props> = ({
    mode = 'flat',
    children,
    onPress,
    leftIcon,
    rightIcon,
    isCloseIcon,
    onClose,
    style,
    containerStyle,
    labelStyle
}) => {

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
                onPress={onPress}
                disabled={onPress ? false : true}
                activeOpacity={0.8}
                style={[{
                    backgroundColor: mode == 'flat' ? '#006666' : undefined,
                    borderColor: mode == 'outlined' ? '#b3b3b3' : undefined,
                    borderWidth: mode == 'outlined' ? 1 : undefined,
                },
                styles.style, style
                ]}>

                {leftIcon &&
                    <View style={{ marginEnd: responsiveWidth(2.5) }}>
                        {leftIcon}
                    </View>
                }

                <Text style={[{
                    color: mode == 'outlined' ? '#000' : '#FFF',
                },
                styles.labelStyle, labelStyle
                ]}>
                    {children}
                </Text>

                {isCloseIcon &&
                    <TouchableOpacity onPress={onClose} activeOpacity={0.5} style={{ paddingVertical: responsiveHeight(0.4), paddingHorizontal: responsiveWidth(2), marginEnd: responsiveWidth(-2) }}>
                        <Image style={{
                            tintColor: mode == 'outlined' ? '#000000' : '#FFFFFF',
                            height: responsiveWidth(2.5),
                            width: responsiveWidth(2.5)
                        }}
                            source={require('../../assets/close.png')} />
                    </TouchableOpacity>
                }

                {rightIcon &&
                    <View style={{ paddingHorizontal: responsiveWidth(1), marginEnd: responsiveWidth(-2) }}>
                        {rightIcon}
                    </View>
                }

            </TouchableOpacity>
        </View>
    );
};
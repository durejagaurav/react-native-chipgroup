import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import { styles } from "./styles";

interface ChipGroupProps {
    data: any[];
    onSelect?: ((item: any, index: number) => void);
    renderLabel: (item: any) => string;
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle> | ((selected: boolean) => StyleProp<ViewStyle>);
    labelStyle?: StyleProp<TextStyle> | ((selected: boolean) => StyleProp<TextStyle>);
    defaultSelectedIndex?: number;
}

export const Tag: React.FC<ChipGroupProps> = ({ data, onSelect, renderLabel, style, labelStyle, containerStyle, defaultSelectedIndex = 0 }) => {

    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        if (defaultSelectedIndex !== null && defaultSelectedIndex !== undefined) {
            setSelected(defaultSelectedIndex);
        }
    }, [defaultSelectedIndex]);

    const resolveStyle = (selected: boolean): StyleProp<ViewStyle> => {
        if (typeof style === 'function') {
            return (style as (selected: boolean) => StyleProp<ViewStyle>)(selected);
        }
        return style || {};
    };

    const resolveLabelStyle = (selected: boolean): StyleProp<TextStyle> => {
        if (typeof labelStyle === 'function') {
            return (labelStyle as (selected: boolean) => StyleProp<TextStyle>)(selected);
        }
        return labelStyle || {};
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {data?.map((item: any, index: number) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            onSelect?.(item, index);
                            setSelected(index)
                        }}
                        activeOpacity={0.7}
                        disabled={selected === index}
                        style={[{
                            backgroundColor: selected === index ? '#00D094' : undefined,
                        }, styles.tagStyle, resolveStyle(index === selected)]}>

                        <Text
                            style={[{
                                fontWeight: selected === index ? 'bold' : 'normal',
                            }, styles.labelStyle, resolveLabelStyle(index === selected)]}>
                            {renderLabel(item)}
                        </Text>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View >
    );
};

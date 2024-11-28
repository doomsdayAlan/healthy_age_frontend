import * as React from 'react';
import Container from './Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import GenericText from './Text';
import { TextStyles } from '../styles/TextStyles';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

type CalendarItemProps = {
    date: Date;
    containerStyle?: StyleProp<ViewStyle>;
    innerContainerStyle?: StyleProp<ViewStyle>;
    topTextStyle?: StyleProp<TextStyle>;
    bottomTextStyle?: StyleProp<TextStyle>;
};

const CalendarItem: React.FC<CalendarItemProps> = ({
    date,
    topTextStyle = TextStyles.CalendarItemTextStyleTop,
    bottomTextStyle = TextStyles.CalendarItemTextStyleBottom,
    containerStyle = ContainerStyle.CalendarItemStyle,
    innerContainerStyle = ContainerStyle.CalendarItemInnerContainerStyle,
}) => {

    const formatted_date = new Date(date);
    const dayOfWeek = formatted_date.toLocaleDateString('es-ES', { weekday: 'long'});
    const dayOfMonth = formatted_date.getDate();
    const monthOfYear = formatted_date.getMonth() + 1;
    const yearNumber = formatted_date.getFullYear();
    let customDayLabel;
    let customMonthLabel;

    switch (dayOfWeek) {
        case 'lunes':
          customDayLabel = 'LUN';
          break;
        case 'martes':
          customDayLabel = 'MAR';
          break;
        case 'miércoles':
          customDayLabel = 'MIÉ';
          break;
        case 'jueves':
          customDayLabel = 'JUE';
          break;
        case 'viernes':
          customDayLabel = 'VIE';
          break;
        case 'sábado':
          customDayLabel = 'SÁB';
          break;
        case 'domingo':
          customDayLabel = 'DOM';
          break;
        default:
          customDayLabel = dayOfMonth;
      }

      switch (monthOfYear) {
        case 1:
          customMonthLabel = 'ENE';
          break;
        case 2:
          customMonthLabel = 'FEB';
          break;
        case 3:
          customMonthLabel = 'MAR';
          break;
        case 4:
          customMonthLabel = 'ABR';
          break;
        case 5:
          customMonthLabel = 'MAY';
          break;
        case 6:
          customMonthLabel = 'JUN';
          break;
        case 7:
          customMonthLabel = 'JUL';
          break;
        case 8:
          customMonthLabel = 'AGO';
          break;
        case 9:
          customMonthLabel = 'SEP';
          break;
        case 10:
          customMonthLabel = 'OCT';
          break;
        case 11:
          customMonthLabel = 'NOV';
          break;
        case 12:
          customMonthLabel = 'DIC';
          break;
      }

    return(
        <Container style={containerStyle}>
            <Container style={innerContainerStyle}>
                <GenericText style={topTextStyle}>
                    {dayOfMonth}
                </GenericText>
                
                <GenericText style={bottomTextStyle}>
                    {customMonthLabel}
                </GenericText>

                <GenericText style={bottomTextStyle}>
                   {customDayLabel}
                </GenericText>
            </Container>
        </Container>
    );
};

export default CalendarItem;
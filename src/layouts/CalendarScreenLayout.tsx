import * as React from 'react';
import Container from '../components/Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import CalendarItem from '../components/CalendarItem';
import ScreenTitle from '../components/ScreenTitle';
import Separator from '../components/Separator';
import TabMenu from '../components/TabMenu';



export default function CalendarScreenLayout(){

    const Dates = [];
    const today = new Date();
    for (let i = 0; i <= 31; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        Dates.push(nextDate);
      };
    
    return (
        <Container
            style = {ContainerStyle.DefaultScreenContainer}
        >
            <ScreenTitle text='Calendario' addButton = {false}/>
            
            <Container
                style = {ContainerStyle.CalendarItemScreenContainer}
            >
                {Dates.map( day =>
                    <CalendarItem date={day} containerStyle = {[ContainerStyle.CalendarItemStyle, {margin: '1%'}]}/>
                )}
            </Container>

            <Separator containerStyle={ContainerStyle.TransparentSeparator}/>

            <TabMenu/>
        </Container>
    );
}
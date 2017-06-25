/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import React & React-Native Dependencies
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

/**
 * Import widget dependent other libraries
 */
import { PieChart } from 'react-native-charts-wrapper';

/**
 * Import widget required files
 */
import ColorPalletes from '../../assets/styles/style.color.palletes';

/**
 * Create usage page widget
 */
export default class UsageFrameWidget extends React.Component {

  /**
   * Initillize constructor
   */
  constructor() {
    super();
    this.state = {
      legend: {
        enabled: true,
        textSize: 10,
        form: 'CIRCLE',
        position: 'RIGHT_OF_CHART',
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [
            { value: 40, label: 'Sandwiches' },
            { value: 21, label: 'Salads' },
            { value: 15, label: 'Soup' },
            { value: 9, label: 'Beverages' },
            { value: 15, label: 'Desserts' }
          ],
          label: 'Pie dataset',
          config: {
            colors: [
              processColor(ColorPalletes.navyBlue9),
              processColor(ColorPalletes.red9),
              processColor(ColorPalletes.navyBlue99),
              processColor(ColorPalletes.red999),
              processColor(ColorPalletes.navyBlue999)
            ],
            valueTextSize: 12,
            valueTextColor: processColor(ColorPalletes.white),
            sliceSpace: 5,
            selectionShift: 13
          }
        }],
      },
      description: {
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: processColor(ColorPalletes.bellBlue),
      }
    };
  }

  /**
   * handle pie section select 
   * @param {*} event 
   */
  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null })
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    }
  }

  /**
   * @REACT DEFAULT METHOD - called to render HTML by providing all bindings
   */
  render() {
    return (

      <View style={styles.container}>

        <View style={{ height: 80 }}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <PieChart
            style={styles.container}
            logEnabled={true}
            chartBackgroundColor={processColor(ColorPalletes.white)}
            chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            entryLabelColor={processColor(ColorPalletes.white)}
            entryLabelTextSize={12}
            rotationEnabled={false}
            drawSliceText={true}
            usePercentValues={false}
            centerText={'Data Usage'}
            centerTextRadiusPercent={100}
            holeRadius={40}
            holeColor={processColor(ColorPalletes.white)}
            transparentCircleRadius={45}
            transparentCircleColor={processColor(ColorPalletes.white)}
            maxAngle={350}
            onSelect={this.handleSelect.bind(this)}
          />
        </View>
      </View>
    );
  }
};

/**
 * Create  widget styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

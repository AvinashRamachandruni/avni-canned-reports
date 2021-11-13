import React from 'react';
import {ResponsivePie} from '@nivo/pie';

export default function ActivityPieChart({data, chartName, height}) {

    return (
        <div style={{height: height, flex: 1}}>
            <p>{chartName}</p>
            <ResponsivePie
                data={data}
                margin={{top: 20, left: 80, bottom: 80, right: 20}}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{from: 'color'}}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{from: 'color', modifiers: [['darker', 2]]}}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        justify: false,
                        translateX: -70,
                        translateY: 0,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemsSpacing: 0.5,
                        symbolSize: 14,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#999',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}
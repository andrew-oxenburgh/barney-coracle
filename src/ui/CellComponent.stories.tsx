import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from 'react-native'

import { CellComponent } from './CellComponent'

export default {
   title: 'Top/Cell',
   component: CellComponent,
} as ComponentMeta<typeof CellComponent>

const Template: ComponentStory<typeof CellComponent> = (args) => (
   <CellComponent {...args}>
      <Text>kjhkjdsf</Text>
   </CellComponent>
)

export const CellComponentThing = Template.bind({})
CellComponentThing.args = {}

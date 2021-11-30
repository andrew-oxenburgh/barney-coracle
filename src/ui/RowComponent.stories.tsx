import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RowComponent } from './RowComponent'

export default {
   title: 'Top/Row',
   component: RowComponent,
} as ComponentMeta<typeof RowComponent>

const Template: ComponentStory<typeof RowComponent> = (args) => (
   <RowComponent {...args} />
)

export const RowComponentThing = Template.bind({})
RowComponentThing.args = {
   title: 'thang',
}

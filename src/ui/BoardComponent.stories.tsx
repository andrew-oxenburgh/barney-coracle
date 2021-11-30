import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BoardComponent } from './BoardComponent'

export default {
   title: 'Top/Board',
   component: BoardComponent,
} as ComponentMeta<typeof BoardComponent>

const Template: ComponentStory<typeof BoardComponent> = (args) => (
   <BoardComponent {...args} />
)

export const BoardComponentThing = Template.bind({})
BoardComponentThing.args = {}

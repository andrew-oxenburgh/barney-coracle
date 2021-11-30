import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Main } from './Main'

export default {
   title: 'Top/Main',
   component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const MainThing = Template.bind({})
MainThing.args = {}

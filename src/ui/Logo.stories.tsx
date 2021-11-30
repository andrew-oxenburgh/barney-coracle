import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from './Logo'

export default {
   title: 'Top/Logo',
   component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => (
   <Logo size={args.size} />
)

export const LogoThing = Template.bind({})
LogoThing.args = {
   size: 4,
}

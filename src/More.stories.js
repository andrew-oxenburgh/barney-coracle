
import React from 'react';
import { storiesOf } from '@storybook/react-native'
import { Button } from 'react-native'

export const text = () => (
   <Button onPress={() => {}} title="AAAAA">BBBBBBB</Button>
)

storiesOf('Button', module).add('Text', text)


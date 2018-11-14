import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Todo from '../Todo'
import Progressbar from '../Progressbar'
import Button from '../Button'
import Counter from '../Counter'
import Delete from '../Delete'
import Input from '../Input'
import Separator from '../Separator'

storiesOf('Todo', module)
  .addDecorator(withKnobs)
  .add('TODO', () => (
    <Todo text="Test" done={false} toggle={action('toggled')} />
  ))
  .addDecorator(withKnobs)
  .add('DONE', () => (
    <Todo text="Test" done={true} toggle={action('toggled')} />
  ))

storiesOf('Progressbar', module)
  .addDecorator(withKnobs)
  .add('Show percents', () => <Progressbar percentage={0.3} />)

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Togglebutton', () => (
    <Button
      defaultText={'Just kidding'}
      alternativeText={'Click here'}
      onClick={() => console.log('click')}
    />
  ))

storiesOf('Counter', module)
  .addDecorator(withKnobs)
  .add('Counting', () => <Counter num={1} />)

storiesOf('Delete', module)
  .addDecorator(withKnobs)
  .add('Deletebutton', () => <Delete handleDelete={action('delete Todo')} />)

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Press enter', () => <Input onEnter={action('Show written input')} />)

storiesOf('Separator', module)
  .addDecorator(withKnobs)
  .add('TODO', () => <Separator text="TODO" />)
  .add('DONE', () => <Separator text="DONE" />)

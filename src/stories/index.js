import React from 'react'

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
  .add('TODO', () => (
    <Todo text="Test" done={false} toggle={action('toggled')} />
  ))
  .add('DONE', () => (
    <Todo text="Test" done={true} toggle={action('toggled')} />
  ))

storiesOf('Progressbar', module).add('Show percents', () => (
  <Progressbar percentage={0.3} />
))

storiesOf('Button', module).add('Togglebutton', () => (
  <Button
    defaultText={'Just kidding'}
    alternativeText={'Click here'}
    onClick={() => console.log('click')}
  />
))

storiesOf('Counter', module).add('Counting', () => <Counter num={1} />)

storiesOf('Delete', module).add('Deletebutton', () => (
  <Delete handleDelete={action('delete Todo')} />
))

storiesOf('Input', module).add('Press enter', () => (
  <Input onEnter={action('Show written input')} />
))

storiesOf('Separator', module)
  .add('TODO', () => <Separator text="TODO" />)
  .add('DONE', () => <Separator text="DONE" />)

import { expect, test } from 'vitest'
import { Slug } from './slug'

test('it should be able to create a new Slug', () => {
  const slugText = Slug.createFromText('An example title')

  expect(slugText.value).toBe('an-example-title')
})

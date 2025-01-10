import { type SchemaTypeDefinition } from 'sanity'
import gym from './gym'
import team from './team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gym ,team],
}

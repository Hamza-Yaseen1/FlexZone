import { defineType } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});

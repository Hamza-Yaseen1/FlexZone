import { defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping
      },
    },
    {
      name: 'heading',
      title: 'Heading Text',
      type: 'string',
    },
    {
      name: 'paragraph',
      title: 'Paragraph Text',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Specify the color for the heading and paragraph text (e.g., blue-600, red-500).',
    },
    {
      name: 'buttonColor',
      title: 'Button Color',
      type: 'string',
      description: 'Specify the background color for the button (e.g., purple-500, green-400).',
    },
    {
      name: 'buttonTextColor',
      title: 'Button Text Color',
      type: 'string',
      description: 'Specify the color for the button text (e.g., white, black).',
    },
  ],
});

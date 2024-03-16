{
  /* <div id="tw-dataform" className="relative mt-8 mb-12  overflow-hidden mx-auto max-w-[1200px] p-10 bg-gradient-to-r from-amber-300 to-orange-500">
</div> */
}

export const iconSelectSchema = {
  title: 'User',
  properties: {
    socialMedia: {
      type: 'array',
      title: 'Social Media',
      maxItems: 5,
      minItems: 1,
      uniqueItems: true,
      enum: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'],
      items: {
        type: 'string',
      },
    },
    timeslots: {
      type: 'array',
      title: 'Timeslots',
      uniqueItems: true,
      enum: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      items: {
        type: 'string',
      },
    },
    checIcons: {
      type: 'array',
      title: 'Timeslots',
      'x-control': 'checkbox',
      maxItems: 2,
      uniqueItems: true,
      enum: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      items: {
        type: 'string',
      },
    },
  },
};

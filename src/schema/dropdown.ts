{
  /* <div id="tw-dataform" className="relative mt-8 mb-12  overflow-hidden mx-auto max-w-[1200px] p-10 bg-gradient-to-r from-amber-300 to-orange-500">
</div> */
}

export const dropdown = {
  title: 'User',
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    email: {
      type: 'string',
      title: 'Email',
    },
    address: {
      type: 'object',
      title: 'Address',
      properties: {
        street: {
          type: 'string',
          title: 'Street',
        },
        city: {
          type: 'string',
          title: 'City',
          'x-control': 'radio',
        },
        state: {
          type: 'string',
          title: 'State',
        },
        zip: {
          type: 'string',
          title: 'ZIP',
        },
        location: {
          type: 'object',
          title: 'Location',
          properties: {
            latitude: {
              type: 'string',
              title: 'Latitude',
            },
            longitude: {
              type: 'string',
              title: 'Longitude',
            },
          },
        },
      },
    },
  },
};

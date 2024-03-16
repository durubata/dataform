import { getCountryDropDownOptions } from "./countries";

export const formElementTypes = [
   {
      "title": "Short Text",
      "name": "short-text",
      "description": "A field for a brief text, such as a name or a single line of information.",
      "icon": "FaRegKeyboard",
      "type": "string",
      'x-label-position': 'top'
   },
   {
      "title": "Long Text",
      "name": "long-text",
      "description": "A field for longer text, such as comments or descriptions.",
      "icon": "MdOutlineSubject",
      "type": "string",
      'x-label-position': 'top',
      'x-control': 'textarea',
   },
   {
      "title": "Yes/No",
      "name": "yes-no",
      "description": "A field for simple yes or no questions.",
      "icon": "MdOutlineCheckCircle",
      "type": "boolean",
      'x-label-position': 'top'
   },
   {
      "title": "Multiple Choice",
      "name": "multiple-choice",
      "description": "A field for selecting one or multiple options from a given list.",
      "icon": "FaListUl",
      "type": "string",
      'x-label-position': 'top',
   },
   {
      "title": "Number",
      "name": "number",
      "description": "A field for numerical information, such as age or quantity.",
      "icon": "MdOutlineLooksOne",
      "type": "number",
      'x-label-position': 'top'
   },
   {
      "title": "Email",
      "name": "email",
      "description": "A field for email addresses.",
      "icon": "HiOutlineMail",
      "type": "string",
      'x-label-position': 'top',
      "format": "email"
   },
   {
      "title": "Website",
      "name": "website",
      "description": "A field for URLs or web addresses.",
      "icon": "FiLink",
      "type": "string",
      'x-label-position': 'top',
      "format": "uri"
   },
   {
      "title": "Phone",
      "name": "phone",
      "description": "A field for telephone numbers.",
      "icon": "FiPhone",
      "type": "string",
      'x-label-position': 'top',
      'pattern': '^(1[-.\s]?)?(\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?\d{3}[-.\s]?\d{4}$'
   },
   {
      "title": "Address",
      "name": "address",
      "description": "A field for postal addresses, typically including street, city, state, and zip code.",
      "icon": "FaRegAddressCard",
      "type": "object",
      'x-label-position': 'top',
      'layout': 'card',
      'x-hide-label': false,
      options: {
         allowedCountries: {
            type: 'array',
            title: 'Default Countries',
            'x-multiple': true,
            'x-dataSource': {
               json: getCountryDropDownOptions(),
               source: 'json'
            }
         },
         showName: {
            type: 'boolean',
            'x-group': 'address-options',
         },
         showCompany: {
            'x-group': 'address-options',
            type: 'boolean',
         },
         showMap: {
            'x-group': 'address-options',
            type: 'boolean',
         },
      },
      properties: {
         firstName: {
            type: 'string',
            'x-hide': true,
            'x-group': 'name',
            'x-hide-label': true,
         },
         lastName: {
            'x-hide': true,
            type: 'string',
            'x-group': 'name',
            'x-hide-label': true,
         },
         street: {
            type: 'string',
            'x-hide-label': true,
         },
         street2: {
            'x-hide-label': true,
            type: 'string'
         },
         city: {
            'x-hide-label': true,
            type: 'string',
            'x-group': 'city'
         },
         state: {
            'x-hide-label': true,
            'x-group': 'city',
            type: 'string',
            'x-datasource': {
               value: 'getCountryRegions',
               source: 'function',
               filter: {
                  value: '{{address/country}}',
               }
            }
         },
         country: {
            'x-group': 'zip',
            'x-hide-label': true,
            type: 'string',
            'x-dataSource': {
               json: getCountryDropDownOptions(),
               source: 'json'
            }
         },
         zip: {
            'x-group': 'zip',
            'x-hide-label': true,
            type: 'string'
         },
         map: {
            type: 'string',
            'x-control': 'map',
            'x-hide-label': true,
         },
      },
   },
   {
      "title": "Color",
      "name": "color",
      "description": "A field for choosing a color from a color picker interface.",
      "icon": "BsFillPaletteFill",
      "type": "string",
      'x-label-position': 'top',
      'x-control': 'color',
      'x-control-variant': 'chrome'
   },
   {
      "title": "Ratings",
      "name": "ratings",
      "description": "A field for providing ratings, typically depicted with stars or a numeric scale.",
      "icon": "AiFillStar",
      "type": "number",
      'x-label-position': 'top',
      'x-control': 'rating',
   },
   {
      "title": "Date",
      "name": "date",
      "description": "A field for selecting dates.",
      "icon": "AiOutlineCalendar",
      "type": "string",
      'x-label-position': 'top',
      "format": "date",
      'x-control': 'date-input',
   },
   {
      "title": "File Upload",
      "name": "file-upload",
      "description": "A field for uploading files from the user's device.",
      "icon": "FiUpload",
      "type": "string",
      'x-label-position': 'top',
      'x-control': 'file',
   },
   {
      "title": "Picture Choice",
      "name": "picture-choice",
      "description": "A field where users can select from multiple images.",
      "icon": "BsFillImageFill",
      "type": "string",
      'x-label-position': 'top',
      'x-control': 'checkbox'
   },
   {
      "title": "Ranking",
      "name": "ranking",
      "description": "A field for ordering preferences or priorities.",
      "icon": "AiOutlineBarChart",
      "type": "array",
      "x-control": "ranking",
      'x-label-position': 'top'
   },
   // {
   //    "title": "PayPal",
   //    "name": "paypal",
   //    "description": "A field specifically for making payments through PayPal.",
   //    "icon": "FaPaypal",
   //    'x-label-position': 'top'
   // },
   // {
   //    "title": "Payment",
   //    "name": "payment",
   //    "description": "A field for entering payment information, such as credit card details.",
   //    "icon": "FaCcStripe",
   //    'x-label-position': 'top'
   // },
   {
      "title": "Opinion Scale",
      "name": "opinion-scale",
      "description": "A field for rating an opinion on a numerical scale, such as 1 to 5.",
      "icon": "FaBalanceScaleRight",
      "type": "number",
      'x-label-position': 'top',
      'x-control': 'slider',
      max: 10,
      min: 0,
      step: 1,
      defaultValue: 5,
   },
   // {
   //    "title": "Question Group",
   //    "name": "question-group",
   //    "description": "A set of related questions grouped together.",
   //    "icon": "FaQuestionCircle",
   //    'x-label-position': 'top'
   // },
   {
      "title": "Paragraph",
      "name": "paragraph",
      "description": "A field for displaying read-only text such as terms or instructions.",
      "icon": "HiOutlineDocumentText",
      'x-label-position': 'top',
      'x-control': 'paragraph',
   },
   {
      "title": "Redirect URL",
      "name": "redirect-url",
      "description": "A field for entering a URL where users will be redirected after an action.",
      "icon": "GiDirectionSigns",
      'x-label-position': 'top'
   },
   {
      "title": "Reservation",
      "name": "reservation",
      "description": "A field for making appointments or booking events.",
      "icon": "MdOutlineEventSeat",
      'x-label-position': 'top'
   },
   {
      "title": "Legal Consent",
      "name": "legal-consent",
      "description": "A field for obtaining legal consent or agreement to terms.",
      "icon": "FaGavel",
      "type": "boolean",
      'x-label-position': 'top',
      'x-control': 'legal-consent'
   },
   {
      "title": "Question Matrix",
      "name": "matrix",
      "description": "Row and column headers that allow users to select from multiple options.",
      "icon": "AiOutlineBorderlessTable",
      'x-label-position': 'top',
      'x-control': 'matrix',
   },
   {
      "title": "Map",
      "name": "map",
      "description": "A field for selecting a location or displaying a map.",
      "icon": "FaMapMarkedAlt",
      'x-label-position': 'top',
      'x-control': 'map',
   }
]

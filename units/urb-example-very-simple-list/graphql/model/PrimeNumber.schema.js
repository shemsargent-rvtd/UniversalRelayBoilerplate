/* @flow */

import { addTableSchema } from '../../../../graphql/ExpressCassandra'


addTableSchema( 'PrimeNumber', {
  fields: {
      id: 'uuid',
      PrimeNumber_NumericValue: 'int',
      PrimeNumber_TextValue: 'text',
  },
  key: [ 'id' ],
} )

export default true

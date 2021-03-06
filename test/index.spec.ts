import assert from 'assert';
import { resolve } from 'path';
import * as TJS from 'typescript-json-schema';
import xematic from '../src';

describe('JsonSchema', function() {
  this.timeout(1e5);

  it('Compile JsonShema from TypeScript', () => {
    const program = TJS.getProgramFromFiles([
      resolve('./src/models/user.ts')
    ]);

    const settings: TJS.PartialArgs = {
      required: true
    };

    const jsonSchema = TJS.generateSchema(program, 'IUser', settings);

    console.log(
      JSON.stringify(jsonSchema)
    );

    if (jsonSchema !== null) {
      xematic(jsonSchema);
    }
  });
});

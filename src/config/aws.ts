import Ajv, {JSONSchemaType} from "ajv";

const ajv = new Ajv();


const validator = (schema: JSONSchemaType<AWSConfig>, data: any) => {
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    throw new Error(`Configuration validation error, ${validate.errors}`);
  }
};

interface AWSConfig {
  apiVersion: string,
  region: string,
};

const schema: JSONSchemaType<AWSConfig> = {
  type: "object",
  properties: {
    apiVersion: {type: 'string'},
    region: {type: 'string'}
  },
  required: ["apiVersion", 'region'],
  additionalProperties: false
};


const awsConfig = {  
  apiVersion: '2021-03-18',
  region: process.env.AWS_REGION,
};

validator(schema, awsConfig);

export { 
  awsConfig 
};


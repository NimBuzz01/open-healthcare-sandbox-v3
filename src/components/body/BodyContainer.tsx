import React from 'react'
import ViewDocument from './ViewDocument'
import Heading from './Heading'

const BodyContainer = () => {
  return (
    <>
    <Heading 
      heading='FHIR Validation' 
      description='Validate Your FHIR resources against a FHIR structure definition'
    ></Heading>
    <ViewDocument url="https://wso2.com/solutions/healthcare/"></ViewDocument>
    </>
    
  )
}

export default BodyContainer
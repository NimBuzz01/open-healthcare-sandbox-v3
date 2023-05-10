import { Grid } from '@mui/material'
import React from 'react'
import BodyContainer from '../Body/BodyContainer'
import Heading from '../Common/Heading'
import TextArea from '../Common/TextArea'

const CcdaToFhir = () => {
  return (
    <BodyContainer>
    <Heading
      heading="Connect to EMR"
      description="Connect with your EMR system"
      url="https://wso2.com/solutions/healthcare/"
    ></Heading>
    <Grid
      container
      spacing={2}
      marginTop={5}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
        <Grid container alignItems="center" justifyContent="center">
          <TextArea label="Paste your request resource here:" />
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
  <Grid container alignItems="center" justifyContent="center">
    <ConvertButton></ConvertButton>
  </Grid>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
  <Grid container alignItems="center" justifyContent="center">
    <TextArea label="Converted FHIR resource here:" />
  </Grid>
</Grid> */}
    </Grid>
  </BodyContainer>
  )
}

export default CcdaToFhir
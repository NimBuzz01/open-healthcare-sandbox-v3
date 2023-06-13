interface Sample {
  name: string;
  data: string;
}

// Use \ if theres a \ in the data to prevent the character from being ignored.

export const FhirData: Sample[] = [
  {
    name: "Patient Data",
    data: `{
        "resourceType": "Patient",
        "meta": {
            "versionId": "1",
            "lastUpdated": "2020-01-21T05:30:29.575+00:00",
            "source": "#q6YX9FUQ7Kn5auYe",
            "profile": [
                "http://hl7.org/fhir/StructureDefinition/Patient"
            ]
        },
        "text": {
            "status": "generated",
            "div": "<div xmlns=\\"http://www.w3.org/1999/xhtml\\"><div class=\\"hapiHeaderText\\">Bob <b>ALEXANDER </b></div><table class=\\"hapiPropertyTable\\"><tbody><tr><td>Identifier</td><td>107b71d1-e235-4d52-834c-d3562f15e175</td></tr></tbody></table></div>"
        },
        "identifier": [
            {
                "type": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v2/0203",
                            "code": "MR"
                        }
                    ]
                },
                "value": "107b71d1-e235-4d52-834c-d3562f15e175"
            }
        ],
        "name": [
            {
                "family": "Alexander",
                "given": [
                    "Bob"
                ]
            }
        ]
    }`,
  },
  {
    name: "Encounter Data",
    data: `FHIR data 2`,
  },
  {
    name: "Practitioner Data",
    data: `FHIR data 3`,
  },
  {
    name: "Organization Data",
    data: `FHIR data 2`,
  },
  {
    name: "Observation Data",
    data: `FHIR data 3`,
  },
];

interface Sample {
  name: string;
  apiName?: string;
  data: string;
}

// Use \ if theres a \ in the data to prevent the character from being ignored.

export const FhirData: Sample[] = [
  {
    name: "Patient Sample 1",
    apiName: "Patient",
    data: `{
      "resourceType":"Patient",
      "text":{
         "status":"generated",
         "div":"<div xmlns=\\"http://www.w3.org/1999/xhtml\\"><div class=\\"hapiHeaderText\\">Bob <b>ALEXANDER </b></div><table class=\\"hapiPropertyTable\\"><tbody><tr><td>Identifier</td><td>107b71d1-e235-4d52-834c-d3562f15e175</td></tr></tbody></table></div>"
      },
      "identifier":[
         {
            "type":{
               "coding":[
                  {
                     "system":"http://hl7.org/fhir/v2/0203",
                     "code":"MR"
                  }
               ]
            },
            "value":"107b71d1-e235-4d52-834c-d3562f15e175"
         }
      ],
      "name":[
         {
            "family":"Alexander",
            "given":[
               "Bob"
            ]
         }
      ]
   }`,
  },
  {
    name: "Patient Sample 2",
    apiName: "Patient",
    data: `{
      "resourceType":"Patient",
      "text":{
         "status":"generated",
         "div":"<div xmlns=\\"http://www.w3.org/1999/xhtml\\"><div class=\\"hapiHeaderText\\">taro2 <b>HISTORY </b></div><table class=\\"hapiPropertyTable\\"><tbody><tr><td>Identifier</td><td>888002</td></tr><tr><td>Address</td><td><span>3300 Washtenaw </span><br/><span>Ann Harbor </span><span>MI </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>25 July 1988</span></td></tr></tbody></table></div>"
      },
      "identifier":[
         {
            "system":"http://example.org",
            "value":"888002"
         }
      ],
      "name":[
         {
            "use":"official",
            "family":"history",
            "given":[
               "taro2"
            ]
         }
      ],
      "telecom":[
         {
            "system":"phone",
            "value":"00-0000-0000",
            "use":"home"
         }
      ],
      "gender":"male",
      "birthDate":"1988-07-25",
      "address":[
         {
            "use":"home",
            "text":"3300 Washtenaw Ann Harbor, MI 48104, USA",
            "line":[
               "3300 Washtenaw"
            ],
            "city":"Ann Harbor",
            "state":"MI",
            "postalCode":"48104",
            "country":"USA"
         }
      ]
   }`,
  },
  {
    name: "Patient Sample 3",
    apiName: "Patient",
    data: `{
      "resourceType":"Patient",
      "text":{
         "status":"generated",
         "div":"<div xmlns=\\"http://www.w3.org/1999/xhtml\\">\\n\\t\\t\\t<p>ID: test0114</p>\\n\\t\\t\\t<p>Name: Hanako Yamada</p>\\n\\t\\t\\t<p>Telephone: 06-1234-5678</p>\\n\\t\\t\\t<p>Gender: female</p>\\n\\t\\t\\t<p>BirthDate: 1981-01-23</p>\\n\\t\\t</div>"
      },
      "identifier":[
         {
            "system":"http://test.com",
            "value":"test0114"
         }
      ],
      "name":[
         {
            "family":"Yamada",
            "given":[
               "Hanako"
            ]
         }
      ],
      "telecom":[
         {
            "system":"phone",
            "value":"06-1234-5678"
         }
      ],
      "gender":"female"
   }`,
  },
  {
    name: "Encounter Sample 1",
    apiName: "Encounter",
    data: `{
      "resourceType":"Encounter",
      "identifier":[
         {
            "use":"official",
            "type":{
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/v2-0203",
                     "code":"MR",
                     "display":"Medical record number"
                  }
               ]
            },
            "value":"12345777"
         }
      ],
      "status":"finished",
      "class":{
         "code":"inpatient"
      },
      "priority":{
         "coding":[
            {
               "system":"http://terminology.hl7.org/CodeSystem/v3-ActPriority",
               "code":"NAVA",
               "display":"Emergency"
            }
         ]
      },
      "subject":{
         "reference":"Patient/24739",
         "display":"Roy Tina A"
      },
      "participant":[
         {
            "individual":{
               "reference":"Practitioner/1472"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1473"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1474"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1475"
            }
         }
      ],
      "period":{
         "start":"2010-11-11T11:12:14.456+07:00",
         "end":"2010-11-11T11:12:14.456+07:00"
      },
      "reasonCode":[
         {
            "coding":[
               {
                  "system":"http://snomed.info/sct",
                  "code":"109006",
                  "display":"Anxiety disorder of childhood OR adolescence (disorder)"
               }
            ]
         }
      ],
      "hospitalization":{
         "preAdmissionIdentifier":{
            "use":"official",
            "value":"1234"
         },
         "admitSource":{
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/admit-source",
                  "code":"hosp-trans",
                  "display":"Transferred from other hospital"
               }
            ]
         },
         "reAdmission":{
            "coding":[
               {
                  "userSelected":true
               }
            ]
         },
         "dietPreference":[
            {
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/diet",
                     "code":"vegetarian",
                     "display":"Vegetarian"
                  }
               ]
            }
         ],
         "dischargeDisposition":{
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/discharge-disposition",
                  "code":"aadvice",
                  "display":"Left against advice"
               }
            ]
         }
      },
      "location":[
         {
            "location":{
               "reference":"Location/25284"
            },
            "physicalType":{
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/location-physical-type",
                     "code":"wi",
                     "display":"Wing"
                  }
               ]
            }
         }
      ],
      "serviceProvider":{
         "reference":"Organization/185"
      }
   }`,
  },
  {
    name: "Encounter Sample 2",
    apiName: "Encounter",
    data: `{
      "resourceType":"Encounter",
      "identifier":[
         {
            "use":"official",
            "type":{
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/v2-0203",
                     "code":"MR",
                     "display":"Medical record number"
                  }
               ]
            },
            "value":"12345777"
         }
      ],
      "status":"finished",
      "class":{
         "code":"inpatient"
      },
      "priority":{
         "coding":[
            {
               "system":"http://terminology.hl7.org/CodeSystem/v3-ActPriority",
               "code":"NAVA",
               "display":"Emergency"
            }
         ]
      },
      "subject":{
         "reference":"Patient/24739",
         "display":"Roy Tina A"
      },
      "participant":[
         {
            "individual":{
               "reference":"Practitioner/1472"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1473"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1474"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1475"
            }
         }
      ],
      "period":{
         "start":"2010-11-11T11:12:14.456+07:00",
         "end":"2010-11-11T11:12:14.456+07:00"
      },
      "reasonCode":[
         {
            "coding":[
               {
                  "system":"http://snomed.info/sct",
                  "code":"109006",
                  "display":"Anxiety disorder of childhood OR adolescence (disorder)"
               }
            ]
         }
      ],
      "hospitalization":{
         "preAdmissionIdentifier":{
            "use":"official",
            "value":"1234"
         },
         "admitSource":{
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/admit-source",
                  "code":"hosp-trans",
                  "display":"Transferred from other hospital"
               }
            ]
         },
         "reAdmission":{
            "coding":[
               {
                  "userSelected":true
               }
            ]
         },
         "dietPreference":[
            {
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/diet",
                     "code":"vegetarian",
                     "display":"Vegetarian"
                  }
               ]
            }
         ],
         "dischargeDisposition":{
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/discharge-disposition",
                  "code":"aadvice",
                  "display":"Left against advice"
               }
            ]
         }
      },
      "location":[
         {
            "location":{
               "reference":"Location/25313"
            },
            "physicalType":{
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/location-physical-type",
                     "code":"wi",
                     "display":"Wing"
                  }
               ]
            }
         }
      ],
      "serviceProvider":{
         "reference":"Organization/185"
      }
   }`,
  },
  {
    name: "Encounter Sample 3",
    apiName: "Encounter",
    data: `{
      "resourceType":"Encounter",
      "identifier":[
         {
            "use":"official",
            "type":{
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/v2-0203",
                     "code":"MR",
                     "display":"Medical record number"
                  }
               ]
            },
            "value":"12345777"
         }
      ],
      "status":"finished",
      "class":{
         "code":"inpatient"
      },
      "priority":{
         "coding":[
            {
               "system":"http://terminology.hl7.org/CodeSystem/v3-ActPriority",
               "code":"NAVA",
               "display":"Emergency"
            }
         ]
      },
      "subject":{
         "reference":"Patient/24739",
         "display":"Roy Tina A"
      },
      "participant":[
         {
            "individual":{
               "reference":"Practitioner/1472"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1473"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1474"
            }
         },
         {
            "individual":{
               "reference":"Practitioner/1475"
            }
         }
      ],
      "period":{
         "start":"2010-11-11T11:12:14.456+07:00",
         "end":"2010-11-11T11:12:14.456+07:00"
      },
      "reasonCode":[
         {
            "coding":[
               {
                  "system":"http://snomed.info/sct",
                  "code":"109006",
                  "display":"Anxiety disorder of childhood OR adolescence (disorder)"
               }
            ]
         }
      ],
      "hospitalization":{
         "preAdmissionIdentifier":{
            "use":"official",
            "value":"1234"
         },
         "admitSource":{
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/admit-source",
                  "code":"hosp-trans",
                  "display":"Transferred from other hospital"
               }
            ]
         },
         "reAdmission":{
            "coding":[
               {
                  "userSelected":true
               }
            ]
         },
         "dietPreference":[
            {
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/diet",
                     "code":"vegetarian",
                     "display":"Vegetarian"
                  }
               ]
            }
         ],
         "dischargeDisposition":{
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/discharge-disposition",
                  "code":"aadvice",
                  "display":"Left against advice"
               }
            ]
         }
      },
      "location":[
         {
            "location":{
               "reference":"Location/25328"
            },
            "physicalType":{
               "coding":[
                  {
                     "system":"http://terminology.hl7.org/CodeSystem/location-physical-type",
                     "code":"wi",
                     "display":"Wing"
                  }
               ]
            }
         }
      ],
      "serviceProvider":{
         "reference":"Organization/185"
      }
   }`,
  },
  {
    name: "Practitioner Sample 1",
    apiName: "Practitioner",
    data: `{
      "resourceType":"Practitioner",
      "identifier":[
         {
            "use":"official",
            "value":"ThZkvUW0cItACCq0w4SCj9mRRv9g4WGByYdc2kNPwHY="
         }
      ],
      "active":true
   }`,
  },
  {
    name: "Practitioner Sample 2",
    apiName: "Practitioner",
    data: `{
      "resourceType":"Practitioner",
      "identifier":[
         {
            "use":"official",
            "value":"jv5yrTleccvTilU6sZNhPWIAf6M4WBbVNti3uT7B6/c="
         }
      ],
      "active":true
   }`,
  },
  {
    name: "Practitioner Sample 3",
    apiName: "Practitioner",
    data: `{
      "resourceType":"Practitioner",
      "identifier":[
         {
            "use":"official",
            "value":"CI2szM5vtfQM/Hd2y/VZUBf2HQRIid8Y9ZTnqKwPvZ8="
         }
      ],
      "active":true
   }`,
  },
  {
    name: "Organization Sample 1",
    apiName: "Organization",
    data: `{
      "resourceType":"Organization",
      "text":{
         "status":"generated",
         "div":"<div xmlns=\\"http://www.w3.org/1999/xhtml\\"><p>NPI 1003800194 for ST LUKES EPISCOPAL CHURCH HOME CARE PROGRAM</p></div>"
      },
      "extension":[
         {
            "url":"http://www.nucc.org/",
            "valueCodeableConcept":{
               "coding":[
                  {
                     "system":"http://www.nucc.org/",
                     "code":"251E00000X"
                  }
               ]
            }
         }
      ],
      "identifier":[
         {
            "use":"official",
            "system":"http://hl7.org/fhir/sid/us-npi",
            "value":"1003800194"
         }
      ],
      "name":"ST LUKES EPISCOPAL CHURCH HOME CARE PROGRAM",
      "telecom":[
         {
            "system":"phone",
            "value":"787-843-4185",
            "use":"work"
         },
         {
            "system":"fax",
            "value":"787-843-5850",
            "use":"work"
         }
      ],
      "address":[
         {
            "use":"work",
            "line":[
               "R-10 CALLE ESMERALDA",
               "CARDEMAR SHOPPING CENTER"
            ],
            "city":"CAYEY",
            "state":"PR",
            "postalCode":"7372079",
            "country":"US"
         }
      ],
      "contact":[
         {
            "purpose":{
               "text":"Admin"
            },
            "name":{
               "family":"CASTILLO",
               "given":[
                  "ISUANET"
               ],
               "prefix":[
                  "MS."
               ]
            },
            "telecom":[
               {
                  "system":"phone",
                  "value":"787-843-4185",
                  "use":"work"
               }
            ]
         }
      ]
   }`,
  },
  {
    name: "Organization Sample 2",
    apiName: "Organization",
    data: `{
      "resourceType":"Organization",
      "name":"bobprivate",
      "address":[
         {
            "text":"nécropole nationale de la Doua"
         }
      ]
   }`,
  },
  {
    name: "Organization Sample 3",
    apiName: "Organization",
    data: `{
      "resourceType":"Organization",
      "name":"Chuck clinical Healthcare"
   }`,
  },
  {
    name: "Observation Sample 1",
    apiName: "Observation",
    data: `{
      "resourceType":"Observation",
      "status":"final",
      "category":[
         {
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/observation-category",
                  "code":"procedure",
                  "display":"Procedure"
               }
            ]
         }
      ],
      "code":{
         "coding":[
            {
               "system":"urn:oid:2.16.840.1.113883.6.24",
               "code":"131328",
               "display":"MDC_ECG_ELEC_POTL"
            }
         ]
      },
      "subject":{
         "reference":"Patient/10552512"
      },
      "component":[
         {
            "code":{
               "coding":[
                  {
                     "system":"urn:oid:2.16.840.1.113883.6.24",
                     "code":"131329",
                     "display":"MDC_ECG_ELEC_POTL_I"
                  }
               ]
            }
         }
      ]
   }`,
  },
  {
    name: "Observation Sample 2",
    apiName: "Observation",
    data: `{
      "resourceType":"Observation",
      "status":"final",
      "category":[
         {
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/observation-category",
                  "code":"procedure",
                  "display":"Procedure"
               }
            ]
         }
      ],
      "code":{
         "coding":[
            {
               "system":"urn:oid:2.16.840.1.113883.6.24",
               "code":"131328",
               "display":"MDC_ECG_ELEC_POTL"
            }
         ]
      },
      "subject":{
         "reference":"Patient/10552522"
      },
      "component":[
         {
            "code":{
               "coding":[
                  {
                     "system":"urn:oid:2.16.840.1.113883.6.24",
                     "code":"131329",
                     "display":"MDC_ECG_ELEC_POTL_I"
                  }
               ]
            }
         }
      ]
   }`,
  },
  {
    name: "Observation Sample 3",
    apiName: "Observation",
    data: `{
      "resourceType":"Observation",
      "status":"final",
      "category":[
         {
            "coding":[
               {
                  "system":"http://terminology.hl7.org/CodeSystem/observation-category",
                  "code":"procedure",
                  "display":"Procedure"
               }
            ]
         }
      ],
      "code":{
         "coding":[
            {
               "system":"urn:oid:2.16.840.1.113883.6.24",
               "code":"131328",
               "display":"MDC_ECG_ELEC_POTL"
            }
         ]
      },
      "subject":{
         "reference":"Patient/10552518"
      },
      "component":[
         {
            "code":{
               "coding":[
                  {
                     "system":"urn:oid:2.16.840.1.113883.6.24",
                     "code":"131329",
                     "display":"MDC_ECG_ELEC_POTL_I"
                  }
               ]
            }
         }
      ]
   }`,
  },
];

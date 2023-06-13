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
    data: `{
      "resourceType": "Encounter",
      "id": "25285",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2019-09-24T09:07:37.859+00:00",
        "source": "#15028800c0691be6"
      },
      "identifier": [ {
        "use": "official",
        "type": {
          "coding": [ {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "code": "MR",
            "display": "Medical record number"
          } ]
        },
        "value": "12345777"
      } ],
      "status": "finished",
      "class": {
        "code": "inpatient"
      },
      "priority": {
        "coding": [ {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          "code": "NAVA",
          "display": "Emergency"
        } ]
      },
      "subject": {
        "reference": "Patient/24739",
        "display": "Roy Tina A"
      },
      "participant": [ {
        "individual": {
          "reference": "Practitioner/1472"
        }
      }, {
        "individual": {
          "reference": "Practitioner/1473"
        }
      }, {
        "individual": {
          "reference": "Practitioner/1474"
        }
      }, {
        "individual": {
          "reference": "Practitioner/1475"
        }
      } ],
      "period": {
        "start": "2010-11-11T11:12:14.456+07:00",
        "end": "2010-11-11T11:12:14.456+07:00"
      },
      "reasonCode": [ {
        "coding": [ {
          "system": "http://snomed.info/sct",
          "code": "109006",
          "display": "Anxiety disorder of childhood OR adolescence (disorder)"
        } ]
      } ],
      "hospitalization": {
        "preAdmissionIdentifier": {
          "use": "official",
          "value": "1234"
        },
        "admitSource": {
          "coding": [ {
            "system": "http://terminology.hl7.org/CodeSystem/admit-source",
            "code": "hosp-trans",
            "display": "Transferred from other hospital"
          } ]
        },
        "reAdmission": {
          "coding": [ {
            "userSelected": true
          } ]
        },
        "dietPreference": [ {
          "coding": [ {
            "system": "http://terminology.hl7.org/CodeSystem/diet",
            "code": "vegetarian",
            "display": "Vegetarian"
          } ]
        } ],
        "dischargeDisposition": {
          "coding": [ {
            "system": "http://terminology.hl7.org/CodeSystem/discharge-disposition",
            "code": "aadvice",
            "display": "Left against advice"
          } ]
        }
      },
      "location": [ {
        "location": {
          "reference": "Location/25284"
        },
        "physicalType": {
          "coding": [ {
            "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
            "code": "wi",
            "display": "Wing"
          } ]
        }
      } ],
      "serviceProvider": {
        "reference": "Organization/185"
      }
    }`,
  },
  {
    name: "Practitioner Data",
    data: `{
      "resourceType": "Practitioner",
      "id": "1895",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2019-09-21T01:18:19.287+00:00",
        "source": "#38d7fac4852b412f"
      },
      "identifier": [ {
        "use": "official",
        "value": "ThZkvUW0cItACCq0w4SCj9mRRv9g4WGByYdc2kNPwHY="
      } ],
      "active": true
    }`,
  },
  {
    name: "Organization Data",
    data: `{
      "resourceType": "Organization",
      "id": "39998",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2019-10-03T20:50:05.295+00:00",
        "source": "#727806b69a184f61"
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>NPI 1003800194 for ST LUKES EPISCOPAL CHURCH HOME CARE PROGRAM</p></div>"
      },
      "extension": [ {
        "url": "http://www.nucc.org/",
        "valueCodeableConcept": {
          "coding": [ {
            "system": "http://www.nucc.org/",
            "code": "251E00000X"
          } ]
        }
      } ],
      "identifier": [ {
        "use": "official",
        "system": "http://hl7.org/fhir/sid/us-npi",
        "value": "1003800194"
      } ],
      "name": "ST LUKES EPISCOPAL CHURCH HOME CARE PROGRAM",
      "telecom": [ {
        "system": "phone",
        "value": "787-843-4185",
        "use": "work"
      }, {
        "system": "fax",
        "value": "787-843-5850",
        "use": "work"
      } ],
      "address": [ {
        "use": "work",
        "line": [ "R-10 CALLE ESMERALDA", "CARDEMAR SHOPPING CENTER" ],
        "city": "CAYEY",
        "state": "PR",
        "postalCode": "7372079",
        "country": "US"
      } ],
      "contact": [ {
        "purpose": {
          "text": "Admin"
        },
        "name": {
          "family": "CASTILLO",
          "given": [ "ISUANET" ],
          "prefix": [ "MS." ]
        },
        "telecom": [ {
          "system": "phone",
          "value": "787-843-4185",
          "use": "work"
        } ]
      } ]
    }`,
  },
  {
    name: "Observation Data",
    data: `{
      "resourceType": "Observation",
      "id": "10552513",
      "meta": {
        "versionId": "1",
        "lastUpdated": "2023-05-21T05:48:46.688+00:00",
        "source": "#NamqQ41EMyZLRQUL"
      },
      "status": "final",
      "category": [ {
        "coding": [ {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "procedure",
          "display": "Procedure"
        } ]
      } ],
      "code": {
        "coding": [ {
          "system": "urn:oid:2.16.840.1.113883.6.24",
          "code": "131328",
          "display": "MDC_ECG_ELEC_POTL"
        } ]
      },
      "subject": {
        "reference": "Patient/10552512"
      },
      "component": [ {
        "code": {
          "coding": [ {
            "system": "urn:oid:2.16.840.1.113883.6.24",
            "code": "131329",
            "display": "MDC_ECG_ELEC_POTL_I"
          } ]
        }
      } ]
    }`,
  },
];

interface Sample {
  name: string;
  data: string;
}

// Use \ if theres a \ in the data to prevent the character from being ignored.

export const data: Sample[] = [
  {
    name: "Sample 1",
    data: `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|202211031408|CHARRIS|ADT^A04|1817457|D|2.3
EVN||202211030800||||202211030800
PID||03935753^^^2^ID 1|454721||DOE^JOHN|DOE^JOHN|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086
NK1||ROE^MARIE|SPO||(216)123-4567||EC
PV1||B`,
  },
  {
    name: "Sample 2",
    data: `HL7 data 2`,
  },
  {
    name: "Sample 3",
    data: `HL7 data 3`,
  },
];

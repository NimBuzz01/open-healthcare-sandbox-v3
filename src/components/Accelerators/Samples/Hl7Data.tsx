interface Sample {
  name: string;
  data: string;
}

// Use \ if theres a \ in the data to prevent the character from being ignored. Keep the indentations exact.

export const Hl7Data: Sample[] = [
  {
    name: "ADT_A04",
    data: `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|202211031408|CHARRIS|ADT^A04|1817457|D|2.3
EVN||202211030800||||202211030800
PID||03935753^^^2^ID 1|454721||DOE^JOHN|DOE^JOHN|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086
NK1||ROE^MARIE|SPO||(216)123-4567||EC
PV1||B`,
  },
  {
    name: "ADT_A01",
    data: `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|202211031408|CHARRIS|ADT^A04|1817457|D|2.5
EVN||202211030800||||202211030800
PID||03935753^^^2^ID 1|454721||DOE^JOHN|DOE^JOHN|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086
NK1||ROE^MARIE|SPO||(216)123-4567||EC
PV1||B`,
  },
  {
    name: "ORM_O01",
    data: `MSH|^~\\&|SendingApp|SendingFacility|ReceivingApp|ReceivingFacility|20220419120000||ORM^O01|MSG00001|P|2.3|
PID|||PAT-123||Doe^John||19700101|M|||123 Main St^^Anytown^NY^12345^USA||(555)555-5555|||S||PAT-12345|||
ORC|NW|ORD-123|||CM||||20220419120000|||123456^Smith^John||456789^Jones^Sarah|
OBR|1|ORD-123|||Blood Culture||20220419120000||||||123456^Smith^John|||||||78901234^Johnson^Bill|20220419120000|||||||
OBX|1|ST|111^Comment|1st culture||This is the first culture||
OBX|2|ST|112^Comment|2nd culture||This is the second culture||`,
  },
  {
    name: "ORU_R01",
    data: `MSH|^~\\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120920230252907||ORU^R01|2012092017490562|T|2.3  
PID|||106281^^^1||WOMAN^GENERIC^S^^^^D||19811112|F||W^White^HL70005|1234 MAIN ROAD^^LINDSEY^OH^43442^USA^HOME^^SANDUSKY||5555551234^HOME^^^^555^5551234||EN^English|M|350|123456789^^^001|987654321|||10^NonHispanic^HL70189  
PV1||O|60|1|||01931^PHYSICIAN^THOMAS^W.^^DR|||60||||1||N|01487^PHYSICIAN^JONATHAN^F|3|10478417|21|||||||||||||||||||01|||||201209201932|||||||V  
ORC|RE|00013598436|R-GEN-378456-2-1||||1^^^201209202036^201209202036^S||201209202038|^INTERFACE^HL7|^INTERFACE^HL7|01931^GALLAGHER^THOMAS^W.^^DR|||||001^Memorial Hospital|482643|||Memorial Hospital^^001  
OBR||00013598436|R-GEN-378456-2-1|CST2^CHEST 2 VIEWS|||201209202036|||||||||01931^PHYSICIAN^THOMAS^W.^^DR||888024||||20120920230242||XY|||1^^^201209202036^201209202036^S|WEB^PHYSICIAN^JONATHAN^F^^^^^^^^^ADMIT^WEB&WEBCHART OFFICES|||^fever|39023^PHYSICIAN^PAUL^R^^DR|39023^PHYSICIAN^PAUL^R^^DR  
OBX|1|TX|||CHEST 2 VIEWS~~ANKLE 9/20/2012.~~INDICATION: Fever.~TECHNIQUE: 2 views of the chest are obtained.~~COMPARISON: Chest from 3/17/2012.~FINDINGS: The patient is status post sternotomy as before. Lung volumes are low.~There is motion on the lateral exposure. No focal consolidation is identified.~Vasculature is not congested. No gross effusion is noted. Heart is mildly~enlarged.~IMPRESSION:~~Status post sternotomy. Low inspiration.No definite acute process.~~Interpreted By: RYAN, PAUL R.~Date:  09/20/2012 23:02|||||||||20120920203600.0000-0400|Laboratory^Memorial Hospital^123 Road Avenue^Fremont^OH^43420^`,
  },
  {
    name: "ADR_A19",
    data: `MSH|^~\\\\&|^HL7Server|^Integration|||||ADR^A19||^T|2.3
MSA|AA|MSG00001
PID|1||PATID1234^5^M11||EVERMAN^ADAM^^^Mr.||19610615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27401-1020^US||(000)503-3290^PRN^PH^adame@gmail.com^^^9802061668^^Home telephone|||S
PV1||I|A5TA^5014||||0019^Jonge^^MWC^^de^Jhr.Dr.|||||||||||O|0000519145|||||||||||||||||||||||||200405201030
OBX|1|TX|SR Text||Lungs expanded and clear. Conclusions Normal PA chest x-ray.||||||F`,
  },
];

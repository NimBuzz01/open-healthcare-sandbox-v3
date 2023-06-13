interface Sample {
  name: string;
  data: string;
}

export const CcdaData: Sample[] = [
  {
    name: "Patient Record",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <recordTarget>
        <patientRole>
            <id extension="160920144139807" root="1.3.6.1.4.1.22812.3.2009316.3" />
            <addr use="H">
                <streetAddressLine>1357 Amber Drive</streetAddressLine>
                <city>Beaverton</city>
                <state>OR</state>
                <postalCode>97006</postalCode>
            </addr>
            <telecom nullFlavor="NI" />
            <patient>
                <name use="L">
                    <family>Jones</family>
                    <given>Myra</given>
                </name>
                <administrativeGenderCode code="F" codeSystem="2.16.840.1.113883.5.1" />
                <birthTime value="19470501" />
                <raceCode code="2106-3" codeSystem="2.16.840.1.113883.6.238" displayName="White" />
                <ethnicGroupCode code="2135-2" codeSystem="2.16.840.1.113883.6.238" displayName="Hispanic or Latino" />
                <languageCommunication>
                    <languageCode code="en" />
                    <preferenceInd value="true" />
                </languageCommunication>
            </patient>
            <providerOrganization>
                <id extension="3" root="1.3.6.1.4.1.22812.3.2009316.3" />
                <name>Primary Care's Partners Test</name>
                <telecom use="WP" value="tel:+1-(676)857-6769" />
                <addr use="H">
                    <streetAddressLine>123 main street</streetAddressLine>
                    <city>Chicago</city>
                    <state>IL</state>
                    <postalCode>60629</postalCode>
                </addr>
            </providerOrganization>
        </patientRole>
    </recordTarget>
    <component>
        <structuredBody>
            <!-- ***************** ALLERGIES *************** -->
            <component>
                <section>
                    <!-- *** Allergies and Intolerances section with entries required *** -->
                    <!-- This section represents the statement of "no known allergies" -->
                    <!-- If you want to represent a more generalized 'no information', see null section pattern (e.g. this CCD medications and problems)-->
                    <!-- If you only wanted to represent 'no known drug allergies', the observation/value@code and participant should be changed accordingly -->
                    <templateId root="2.16.840.1.113883.10.20.22.2.6.1" extension="2014-06-09"/>
                    <code code="48765-2" codeSystem="2.16.840.1.113883.6.1"/>
                    <title>ALLERGIES AND ADVERSE REACTIONS</title>
                    <text>
                        <paragraph>No known allergies</paragraph>
                    </text>
                    <entry typeCode="DRIV">
                        <!-- Allergy Concern Act -->
                        <act classCode="ACT" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.20.22.4.30" extension="2014-06-09"/>
                            <id root="36e3e930-7b14-11db-9fe1-0800200c9a66"/>
                            <!-- SDWG supports 48765-2 or CONC in the code element -->
                            <code code="CONC" codeSystem="2.16.840.1.113883.5.6"/>
                            <!--currently tracked concerns are active concerns-->
                            <statusCode code="active"/>
                            <effectiveTime>
                                <!-- This equates to the time the concern was authored in the patient's chart. This may frequently be an EHR timestamp-->
                                <low value="20141003103026-0500"/>
                            </effectiveTime>
                            <entryRelationship typeCode="SUBJ">
                                <!-- No Known Allergies -->
                                <!-- The negationInd = true negates the observation/value -->
                                <!-- The use of negationInd corresponds with the newer Observation.valueNegationInd -->
                                <observation classCode="OBS" moodCode="EVN" negationInd="true">
                                    <!-- allergy - intolerance observation template -->
                                    <templateId root="2.16.840.1.113883.10.20.22.4.7" extension="2014-06-09"/>
                                    <id root="4adc1020-7b14-11db-9fe1-0800200c9a66"/>
                                    <code code="ASSERTION" codeSystem="2.16.840.1.113883.5.4"/>
                                    <statusCode code="completed"/>
                                    <!-- N/A - In this case, no biological onset is documented for the absence of allergies -->
                                    <effectiveTime>
                                        <low nullFlavor="NA"/>
                                    </effectiveTime>
                                    <!-- This code was selected to negate any allergy. For no known drug allergies, code 416098002 would be more appropriate -->
                                    <value xsi:type="CD" code="419199007" displayName="Allergy to substance (disorder)" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
                                    <author>
                                        <time value="20141003103026-0500"/>
                                        <assignedAuthor>
                                            <id extension="99999999" root="2.16.840.1.113883.4.6"/>
                                            <code code="200000000X" codeSystem="2.16.840.1.113883.6.101" displayName="Allopathic &amp; Osteopathic Physicians"/>
                                            <telecom use="WP" value="tel:555-555-1002"/>
                                            <assignedPerson>
                                                <name>
                                                    <given>Henry</given>
                                                    <family>Seven</family>
                                                </name>
                                            </assignedPerson>
                                        </assignedAuthor>
                                    </author>
                                    <!-- ISSUE participant is required for allergy intolerance even when negated -->
                                    <participant typeCode="CSM">
                                        <participantRole classCode="MANU">
                                            <playingEntity classCode="MMAT">
                                                <!-- ISSUE This conflicts with guidance from CDA example task force -->
                                                <!-- Code 410942007 would be appropriate for no known drug allergy -->
                                                <code code="105590001" displayName="Substance" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
                                            </playingEntity>
                                        </participantRole>
                                    </participant>
                                </observation>
                            </entryRelationship>
                        </act>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>
`,
  },
  {
    name: "Patient Record Copy",
    data: `<ClinicalDocument schemaLocation="urn:hl7-org:v3 CDA.xsd">
	<typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
	<id root="2.16.840.1.113883.19.5.99999.1" extension="123456789"/>
	<code code="34133-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Summarization of Episode Note"/>
	<title>Continuity of Care Document</title>
	<effectiveTime value="20191201120000-0800"/>
	<confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"/>
	<languageCode code="en-US"/>
	<setID root="2.16.840.1.113883.19.5.99999"/>
	<versionNumber value="1"/>
	<recordTarget>
		<patientRole>
			<id extension="123456" root="2.16.840.1.113883.4.6"/>
			<addr use="HP">
				<streetAddressLine>123 Main St</streetAddressLine>
				<city>Anytown</city>
				<state>CA</state>
				<postalCode>12345</postalCode>
			</addr>
			<patient>
				<name>
					<given>Jane</given>
					<family>Doe</family>
				</name>
				<administrativeGenderCode code="F" codeSystem="2.16.840.1.113883.5.1"/>
				<birthTime value="19800101000000-0800"/>
			</patient>
		</patientRole>
	</recordTarget>
	<author>
		<time value="20191201120000-0800"/>
		<assignedAuthor>
			<id extension="1234" root="2.16.840.1.113883.4.6"/>
			<addr use="WP">
				<streetAddressLine>456 Oak 
				
				St</streetAddressLine>
				<city>Anytown</city>
				<state>CA</state>
				<postalCode>12345</postalCode>
			</addr>
			<telecom value="tel:+1-555-555-5555"/>
			<assignedPerson>
				<name>
					<given>John</given>
					<family>Smith</family>
				</name>
			</assignedPerson>
			<representedOrganization>
				<id root="2.16.840.1.113883.4.2" extension="123456789"/>
				<name>ABC Hospital</name>
			</representedOrganization>
		</assignedAuthor>
	</author>
	<documentationOf>
		<serviceEvent>
			<effectiveTime value="20191201120000-0800"/>
			<performer>
				<assignedEntity>
					<id extension="5678" root="2.16.840.1.113883.4.6"/>
					<addr use="WP">
						<streetAddressLine>789 &amp; Maple &amp; St <br/></streetAddressLine>
						<city>Anytown</city>
						<state>CA</state>
						<postalCode>12345</postalCode>
					</addr>
				</assignedEntity>
			</performer>
		</serviceEvent>
	</documentationOf>
</ClinicalDocument>`,
  },
  {
    name: "Allergy Document",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <component>
        <structuredBody>
            <!-- ***************** ALLERGIES *************** -->
            <component>
                <section>
                    <!-- *** Allergies and Intolerances section with entries required *** -->
                    <!-- This section represents the statement of "no known allergies" -->
                    <!-- If you want to represent a more generalized 'no information', see null section pattern (e.g. this CCD medications and problems)-->
                    <!-- If you only wanted to represent 'no known drug allergies', the observation/value@code and participant should be changed accordingly -->
                    <templateId root="2.16.840.1.113883.10.20.22.2.6.1" extension="2014-06-09"/>
                    <code code="48765-2" codeSystem="2.16.840.1.113883.6.1"/>
                    <title>ALLERGIES AND ADVERSE REACTIONS</title>
                    <text>
                        <paragraph>No known allergies</paragraph>
                    </text>
                    <entry typeCode="DRIV">
                        <!-- Allergy Concern Act -->
                        <act classCode="ACT" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.20.22.4.30" extension="2014-06-09"/>
                            <id root="36e3e930-7b14-11db-9fe1-0800200c9a66"/>
                            <!-- SDWG supports 48765-2 or CONC in the code element -->
                            <code code="CONC" codeSystem="2.16.840.1.113883.5.6"/>
                            <!--currently tracked concerns are active concerns-->
                            <statusCode code="active"/>
                            <effectiveTime>
                                <!-- This equates to the time the concern was authored in the patient's chart. This may frequently be an EHR timestamp-->
                                <low value="20141003103026-0500"/>
                            </effectiveTime>
                            <entryRelationship typeCode="SUBJ">
                                <!-- No Known Allergies -->
                                <!-- The negationInd = true negates the observation/value -->
                                <!-- The use of negationInd corresponds with the newer Observation.valueNegationInd -->
                                <observation classCode="OBS" moodCode="EVN" negationInd="true">
                                    <!-- allergy - intolerance observation template -->
                                    <templateId root="2.16.840.1.113883.10.20.22.4.7" extension="2014-06-09"/>
                                    <id root="4adc1020-7b14-11db-9fe1-0800200c9a66"/>
                                    <code code="ASSERTION" codeSystem="2.16.840.1.113883.5.4"/>
                                    <statusCode code="completed"/>
                                    <!-- N/A - In this case, no biological onset is documented for the absence of allergies -->
                                    <effectiveTime>
                                        <low nullFlavor="NA"/>
                                    </effectiveTime>
                                    <!-- This code was selected to negate any allergy. For no known drug allergies, code 416098002 would be more appropriate -->
                                    <value xsi:type="CD" code="419199007" displayName="Allergy to substance (disorder)" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
                                    <author>
                                        <time value="20141003103026-0500"/>
                                        <assignedAuthor>
                                            <id extension="99999999" root="2.16.840.1.113883.4.6"/>
                                            <code code="200000000X" codeSystem="2.16.840.1.113883.6.101" displayName="Allopathic &amp; Osteopathic Physicians"/>
                                            <telecom use="WP" value="tel:555-555-1002"/>
                                            <assignedPerson>
                                                <name>
                                                    <given>Henry</given>
                                                    <family>Seven</family>
                                                </name>
                                            </assignedPerson>
                                        </assignedAuthor>
                                    </author>
                                    <!-- ISSUE participant is required for allergy intolerance even when negated -->
                                    <participant typeCode="CSM">
                                        <participantRole classCode="MANU">
                                            <playingEntity classCode="MMAT">
                                                <!-- ISSUE This conflicts with guidance from CDA example task force -->
                                                <!-- Code 410942007 would be appropriate for no known drug allergy -->
                                                <code code="105590001" displayName="Substance" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
                                            </playingEntity>
                                        </participantRole>
                                    </participant>
                                </observation>
                            </entryRelationship>
                        </act>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>`,
  },
  {
    name: "Problem Document",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <component>
        <structuredBody>
            <!-- ***************** ALLERGIES *************** -->
            <component>
                <section>
                    <!-- conforms to Problems section with entries required -->
                    <templateId root="2.16.840.1.113883.10.20.22.2.5.1" extension="2014-06-09"/>
                    <code code="11450-4" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="PROBLEM LIST"/>
                    <title>PROBLEMS</title>
                    <text>Problem Information</text>
                    <entry>
                        <act classCode="ACT" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.20.22.4.3" extension="2015-08-01" />
                            <templateId root="2.16.840.1.113883.10.20.22.4.3" />
                            <id extension="34689300001" root="1.3.6.1.4.1.22812.3.2009316.3.4.1" />
                            <code code="CONC" codeSystem="2.16.840.1.113883.5.6" />
                            <statusCode code="active" />
                            <effectiveTime xsi:type="IVL_TS">
                                <low nullFlavor="NI" />
                            </effectiveTime>
                            <entryRelationship typeCode="SUBJ">
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01" />
                                    <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                                    <id extension="545069300001" root="1.3.6.1.4.1.22812.3.2009316.3.4.1.2.1" />
                                    <code code="55607006" codeSystem="2.16.840.1.113883.6.96">
                                        <translation nullFlavor="NI" />
                                    </code>
                                    <text>
                                        <reference value="#_5011447a-e27f-471d-9e1f-541148c5282f" />
                                    </text>
                                    <statusCode code="completed" />
                                    <effectiveTime xsi:type="IVL_TS">
                                        <low value="20120806" />
                                    </effectiveTime>
                                    <value xsi:type="CD" code="233604007" codeSystem="2.16.840.1.113883.6.96">
                                        <originalText>
                                            <!-- This reference resolves to: Pneumonia -->
                                            <reference value="#_5011447a-e27f-471d-9e1f-541148c5282f" />
                                        </originalText>
                                        <translation code="486" codeSystem="2.16.840.1.113883.6.103" />
                                        <translation code="J18.9" codeSystem="2.16.840.1.113883.6.90" />
                                        <translation code="87580" codeSystem="2.16.840.1.113883.3.247.1.1" />
                                    </value>
                                </observation>
                            </entryRelationship>
                        </act>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>`,
  },
  {
    name: "Immunization Document",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <component>
        <structuredBody>
            <!-- ***************** IMMUNIZATIONS *************** -->
            <component>
                <section>
                    <!-- conforms to Immunizations section with entries optional -->
                    <templateId root="2.16.840.1.113883.10.20.22.2.2"/>
                    <templateId root="2.16.840.1.113883.10.20.22.2.2" extension="2015-08-01"/>
                    <!-- Immunizations section with entries required -->
                    <templateId root="2.16.840.1.113883.10.20.22.2.2.1"/>
                    <templateId root="2.16.840.1.113883.10.20.22.2.2.1" extension="2015-08-01"/>
                    <code code="11369-6" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"
            displayName="History of Immunizations"/>
                    <title>Immunizations</title>
                    <text>
                        <paragraph ID="immun1">Patient objected to 
                            <content ID="ImmunizationProduct_1">influenza, intradermal, quadrivalent</content> on 11/15/2015
                        </paragraph>
                    </text>
                    <entry typeCode="COMP">
                        <!-- negationInd=true indicates substance was NOT given at this date-->
                        <substanceAdministration classCode="SBADM" moodCode="EVN"
                negationInd="true">
                            <!-- ** Immunization activity ** -->
                            <templateId root="2.16.840.1.113883.10.20.22.4.52"/>
                            <templateId root="2.16.840.1.113883.10.20.22.4.52" extension="2015-08-01"/>
                            <id root="e6f1ba43-c0ed-4b9b-9f12-f435d8ad8f92"/>
                            <text>
                                <reference value="#immun1"/>
                            </text>
                            <!-- Indicates the status of the substanceAdministartion -->
                            <statusCode code="completed"/>
                            <effectiveTime value="20151115"/>
                            <consumable>
                                <manufacturedProduct classCode="MANU">
                                    <!-- ** Immunization medication information ** -->
                                    <templateId root="2.16.840.1.113883.10.20.22.4.54"/>
                                    <templateId root="2.16.840.1.113883.10.20.22.4.54" extension="2014-06-09"/>
                                    <manufacturedMaterial>
                                        <code code="166" codeSystem="2.16.840.1.113883.12.292"
                                displayName="influenza, intradermal, quadrivalent, preservative free, injectable"
                                codeSystemName="CVX">
                                            <originalText>
                                                <reference value="#ImmunizationProduct_1"/>
                                            </originalText>
                                        </code>
                                        <!-- DSTU comment relaxing lotNumber requirement -->
                                        <!-- http://www.hl7.org/dstucomments/showdetail_comment.cfm?commentid=995 -->
                                        <!-- <lotNumberText>1</lotNumberText> -->
                        
                                    </manufacturedMaterial>
                                    <!-- Optional manufacturerOrganization
                    				<manufacturerOrganization><name>Health LS - Immuno Inc.</name></manufacturerOrganization>-->
                    
                                </manufacturedProduct>
                            </consumable>
                            <entryRelationship typeCode="RSON">
                                <observation classCode="OBS" moodCode="EVN">
                                    <!-- Immunization Refusal Reason  -->
                                    <!-- Included the reason since it may be relevant to a future clinician or quality measurement -->
                                    <templateId root="2.16.840.1.113883.10.20.22.4.53"/>
                                    <id root="c1296315-9a6d-45a2-aac0-ee225d375409"/>
                                    <code displayName="patient objection" code="PATOBJ"
                            codeSystemName="HL7 ActNoImmunizationReason" codeSystem="2.16.840.1.113883.5.8"/>
                                    <statusCode code="completed"/>
                                </observation>
                            </entryRelationship>
                        </substanceAdministration>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>`,
  },
  {
    name: "Medication Document",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <component>
        <structuredBody>
            <!-- ***************** IMMUNIZATIONS *************** -->
            <component>
                <section>
                    <templateId root="2.16.840.1.113883.10.20.22.2.1.1" extension="2014-06-09"/>
                    <!-- Medication Section (entries required) -->
                    <code code="10160-0" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="History of Medication Use"/>
                    <title>MEDICATIONS</title>
                    <text>
                        <table border="1" width="100%">
                            <thead>
                                <tr>
                                    <th>Medication</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ID="Medication_1">
                                    <td>
                                        <!-- This shouldn't be used if a medication substance can be coded -->
                                        <content ID="MedicationSIG">Experimental '150 cure-all drug', take one tab by mouth every morning</content>
                                    </td>
                                    <td>Jan 10 2018</td>
                                    <td>Active</td>
                                </tr>
                            </tbody>
                        </table>
                    </text>
                    <entry typeCode="DRIV">
                        <substanceAdministration classCode="SBADM" moodCode="INT">
                            <templateId root="2.16.840.1.113883.10.20.22.4.16" extension="2014-06-09"/>
                            <templateId root="2.16.840.1.113883.10.20.22.4.16"/>
                            <id root="cdbd33f0-6cde-11db-9fe1-0800200c9a66"/>
                            <statusCode code="active"/>
                            <effectiveTime xsi:type="IVL_TS">
                                <low value="20220806"/>
                                <high nullFlavor="NI"/>
                            </effectiveTime>
                            <effectiveTime xsi:type="PIVL_TS" institutionSpecified="true" operator="A">
                                <period value="1" unit="d"/>
                            </effectiveTime>
                            <doseQuantity value="1" unit="{Pill}"/>
                            <consumable>
                                <manufacturedProduct classCode="MANU">
                                    <templateId root="2.16.840.1.113883.10.20.22.4.23" extension="2014-06-09"/>
                                    <templateId root="2.16.840.1.113883.10.20.22.4.23"/>
                                    <id root="2a620155-9d11-439e-92b3-5d9815ff4ee8"/>
                                    <manufacturedMaterial>
                                        <code code="617310" codeSystem="2.16.840.1.113883.6.88" codeSystemName="RxNorm" displayName="atorvastatin 20 MG Oral Tablet"/>
                                    </manufacturedMaterial>
                                </manufacturedProduct>
                            </consumable>
                        </substanceAdministration>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>`,
  },
  {
    name: "Procedure Document",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <component>
        <structuredBody>
            <!-- ***************** PROCEDURES *************** -->
            <component>
                <section>
                    <templateId root="2.16.840.1.113883.10.20.22.2.10"/>
                    <templateId root="2.16.840.1.113883.10.20.22.2.10" extension="2014-06-09"/>
                    <code code="18776-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"
        displayName="Plan of care note"/>
                    <title>Plan of Treatment</title>
                    <text>
                        <table>
                            <caption>Scheduled Procedures</caption>
                            <colgroup>
                                <col width="40%"/>
                                <col width="10%"/>
                                <col width="25%" span="2"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Priority</th>
                                    <th>Associated Diagnoses</th>
                                    <th>Date/Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ID="procedure32">
                                    <td>
                                        <content ID="procedure32name">Appendectomy Open</content>
                                    </td>
                                    <td>Urgent</td>
                                    <td>
                                        <paragraph>Appendicitis</paragraph>
                                    </td>
                                    <td>04/30/2022 9:00 PM CDT</td>
                                </tr>
                            </tbody>
                        </table>
                    </text>
                    <entry>
                        <!-- Planned Procedure (V2) -->
                        <procedure classCode="PROC" moodCode="INT">
                            <templateId root="2.16.840.1.113883.10.20.22.4.41"/>
                            <templateId root="2.16.840.1.113883.10.20.22.4.41" extension="2014-06-09"/>
                            <id extension="237181-1-1" root="1.2.840.114350.1.13.861.1.7.1.1988.2"/>
                            <code code="44950" codeSystem="2.16.840.1.113883.6.12" codeSystemName="CPT-4"
                displayName="Appendectomy">
                                <originalText>Appendectomy Open
                                    <reference value="#procedure32name"/>
                                </originalText>
                                <translation code="80146002" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
                    displayName="Excision of appendix"/>
                            </code>
                            <text>
                                <reference value="#procedure32"/>
                            </text>
                            <statusCode code="active"/>
                            <effectiveTime>
                                <low value="20220430210000-0500"/>
                                <high value="20220430213200-0500"/>
                            </effectiveTime>
                            <!-- Omitted: MAY contain zero or more [0..*] performer (CONF:1098-30449) -->
                            <!-- Omitted: SHOULD contain zero or one [0..1] Author Participation (CONF:1098-31979) -->
                            <!-- Priority Preference -->
                            <entryRelationship typeCode="REFR">
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.20.22.4.143"/>
                                    <id nullFlavor="NI"/>
                                    <code code="225773000" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
                        displayName="Preference"/>
                                    <effectiveTime value="20220430201102-0500"/>
                                    <value code="394849002" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
                        displayName="High priority" xsi:type="CD"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>
                                </observation>
                            </entryRelationship>
                            <!-- Indication -->
                            <entryRelationship typeCode="RSON">
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.20.22.4.19"/>
                                    <templateId root="2.16.840.1.113883.10.20.22.4.19" extension="2014-06-09"/>
                                    <id extension="86579" root="1.2.840.114350.1.13.861.1.7.2.696871"/>
                                    <code code="55607006" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
                        displayName="Problem"/>
                                    <text>Appendicitis</text>
                                    <statusCode code="completed"/>
                                    <value code="74400008" displayName="Appendicitis" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
                        xsi:type="CD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                                        <translation code="K37" codeSystem="2.16.840.1.113883.6.90" codeSystemName="ICD10"/>
                                        <translation code="541" codeSystem="2.16.840.1.113883.6.103" codeSystemName="ICD9"/>
                                    </value>
                                </observation>
                            </entryRelationship>
                            <!-- Omitted: MAY contain zero or more [0..*] entryRelationship (CONF:1098-31985) such that it
                        SHALL contain exactly one [1..1] Instruction (V2) (CONF:1098-31989). -->
                            <!-- Omitted: MAY contain zero or more [0..*] entryRelationship (CONF:1098-31990) such that it
                        SHALL contain exactly one [1..1] Planned Coverage (CONF:1098-31992). -->
                            <!-- This entryRelationship contains an organizer listing alternative planned procedures...
                 The options below should be read as: CPT 44960 OR 44970 -->
                            <entryRelationship typeCode="REFR">
                                <organizer classCode="CLUSTER" moodCode="PRP">
                                    <!-- "PRP" = proposal
                         A non-mandated intent to perform an act. Used to record intents that are explicitly not Orders.
                         Professional responsibility for the 'proposal' may or may not be present. -->
                                    <!-- Implementers may include an organizer/code here with a value "alternative procedure options,"
                         although we were unable to find an appropriate one.  -->
                                    <statusCode code="active" />
                                    <!-- First alternative -->
                                    <component>
                                        <procedure classCode="SUBST" moodCode="PRP">
                                            <!-- "SUBST" = substitution
                                 Indicates that the subject Act has undergone or should undergo substitution of a type indicated by Act.code. -->
                                            <code code="44960" codeSystem="2.16.840.1.113883.6.12" codeSystemName="CPT-4"
                                displayName="Appendectomy; for ruptured appendix with abscess or generalized peritonitis" />
                                        </procedure>
                                    </component>
                                    <!-- Second alternative -->
                                    <component>
                                        <procedure classCode="SUBST" moodCode="PRP">
                                            <code code="44970" codeSystem="2.16.840.1.113883.6.12" codeSystemName="CPT-4"
                                displayName="Laparoscopy, surgical, appendectomy" />
                                        </procedure>
                                    </component>
                                    <!-- To represent multiple combined procedures as one option, an organizer may be used to group multiple proposed procedures -->
                
                                </organizer>
                            </entryRelationship>
                        </procedure>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>`,
  },
  {
    name: "Results Document",
    data: `<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:sdtc="urn:hl7-org:sdtc">
    <!-- ** CDA Header ** -->
    <realmCode code="US"/>
    <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/>
    <!-- CCD document template within C-CDA 2.0-->
    <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2014-06-09"/>
    <!-- Globally unique identifier for the document. Can only be [1..1] -->
    <id extension="EHRVersion2.0" root="be84a8e4-a22e-4210-a4a6-b3c48273e84c"/>
    <code code="34133-9" displayName="Summary of episode note" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>
    <!-- Title of this document -->
    <title>Summary of Patient Chart</title>
    <!-- This is the time of document generation -->
    <effectiveTime value="20141015103026-0500"/>
    <confidentialityCode code="N" displayName="normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>
    <!-- This is the document language code which uses internet standard RFC 4646. This often differs from patient language within recordTarget -->
    <languageCode code="en-US"/>
    <setId extension="sTT988" root="2.16.840.1.113883.19.5.99999.19"/>
    <!-- Version of this document -->
    <versionNumber value="1"/>
    <component>
        <structuredBody>
            <!-- ***************** PROCEDURES *************** -->
            <component>
                <section>
                    <!-- ... this component / section is templated as a C-CDA R2.1 Results Section, entries required -->
                    <templateId root="2.16.840.1.113883.10.20.22.2.3" extension="2015-08-01"/>
                    <templateId root="2.16.840.1.113883.10.20.22.2.3"/>
                    <templateId root="2.16.840.1.113883.10.20.22.2.3.1" extension="2015-08-01"/>
                    <templateId root="2.16.840.1.113883.10.20.22.2.3.1"/>
                    <code code="30954-2" codeSystem="2.16.840.1.113883.6.1"/>
                    <title>Results</title>
                    <text>
                        <table>
                            <!-- the results display in 3 columns: 
								col 1: Result Organizer detail, containing the ordered test, date/time
								col 2: the name and result of the items that are resulted
								col 3: additional result details, such as ranges, interpretations, comments
						-->
                            <colgroup>
                                <col width="20%"/>
                                <col width="40%"/>
                                <col width="40%"/>
                            </colgroup>
                            <tbody styleCode="xRowGroup">
                                <tr>
                                    <td>
                                        <content styleCode="xLabel xContentWrapping" ID="_3ffb46b1-9fe4-45f3-9a0f-e0e492563e7b">Urinanalysis macro (dipstick) panel</content>
                                        <br/>
                                        <content styleCode="xSecondary xContentWrapping">22-Jun-2015</content>
                                    </td>
                                    <!-- the CLIA requirement for Lab Location is to show the location in the human readable text -->
                                    <td>
                                        <content styleCode="xLabel">Laboratory: </content>
                                        <content> Value Labs</content>
                                        <content> 2474, Rocky place Beaverton OR 97006</content>
                                        <content> tel:+1-(555)666-1002</content>
                                    </td>
                                    <td>
									</td>
                                </tr>
                                <!-- rows removed just to simplify example -->
                                <tr ID="_13a52df8-79ed-4689-a9da-14c5905de830">
                                    <td>
									</td>
                                    <td>
                                        <content styleCode="xSecondary" ID="_ea838e08-d5eb-4ed4-a176-e5f9a831a780">Specific gravity of Urine by Test strip</content>
                                        <content styleCode="xSecondary"> 1.015</content>
                                    </td>
                                    <td>
                                        <content styleCode="xLabel xSecondary">Range: </content>
                                        <!-- SDWG Example agreed to ID reference here since moving to td would mean text 'Range' is in observation -->
                                        <content ID="_08b7d0ee-aff1-4144-a3a5-c89d56d855ad">
                                            <content styleCode="xSecondary">1.005</content>
                                            <content styleCode="xSecondary"> - </content>
                                            <content styleCode="xSecondary">1.030</content>
                                        </content>
                                        <br/>
                                    </td>
                                </tr>
                                <!-- rows removed just to simplify example -->
							
                            </tbody>
                        </table>
                    </text>
                    <entry>
                        <organizer classCode="BATTERY" moodCode="EVN">
                            <templateId root="2.16.840.1.113883.10.20.22.4.1" extension="2015-08-01"/>
                            <templateId root="2.16.840.1.113883.10.20.22.4.1"/>
                            <id root="1.3.6.1.4.1.22812.20.1.1.4.5" extension="1"/>
                            <code code="24357-6" codeSystem="2.16.840.1.113883.6.1">
                                <originalText>
                                    <!-- reference the text of the organizer code -->
                                    <reference value="#_3ffb46b1-9fe4-45f3-9a0f-e0e492563e7b"/>
                                </originalText>
                            </code>
                            <statusCode code="completed"/>
                            <effectiveTime xsi:type="IVL_TS">
                                <!-- if present, this shall contain the range of times of the resulted components -->
                                <low value="20150622"/>
                                <high value="20150622"/>
                            </effectiveTime>
                            <!-- The lab reporting location and details are recorded here as the lab was the performed of the battery of tests -->
                            <!-- Receiving systems may see the lab reporting location in the author particitipant since the original 2015 ONC certification suggested the author -->
                            <!-- Sending systems SHOULD always place the lab reporting location in the performer-->
                            <performer typeCode="PRF">
                                <assignedEntity>
                                    <id root="2.16.840.1.113883.19.5"/>
                                    <representedOrganization>
                                        <name>Value Labs</name>
                                        <telecom value="tel:+1-(555)666-1002"/>
                                        <addr>
                                            <streetAddressLine>2474, Rocky place</streetAddressLine>
                                            <city>Beaverton</city>
                                            <state>OR</state>
                                            <postalCode>97006</postalCode>
                                        </addr>
                                    </representedOrganization>
                                </assignedEntity>
                            </performer>
                            <!-- components removed to simplify example -->
                            <component>
                                <observation classCode="OBS" moodCode="EVN">
                                    <templateId root="2.16.840.1.113883.10.20.22.4.2" extension="2015-08-01"/>
                                    <templateId root="2.16.840.1.113883.10.20.22.4.2"/>
                                    <id root="1.3.6.1.4.1.22812.20.1.1.4.5" extension="13"/>
                                    <code code="5811-5" codeSystem="2.16.840.1.113883.6.1" displayName="Specific gravity of Urine by Test strip">
                                        <originalText>
                                            <!-- reference the text of the coded component -->
                                            <reference value="#_ea838e08-d5eb-4ed4-a176-e5f9a831a780"/>
                                        </originalText>
                                    </code>
                                    <text>
                                        <!-- reference the entire text of the component -->
                                        <reference value="#_13a52df8-79ed-4689-a9da-14c5905de830"/>
                                    </text>
                                    <statusCode code="completed"/>
                                    <effectiveTime value="20150622"/>
                                    <value xsi:type="PQ" value="1.015" unit="1"/>
                                    <referenceRange>
                                        <observationRange>
                                            <text>
                                                <!-- reference the text of the reference range -->
                                                <reference value="#_08b7d0ee-aff1-4144-a3a5-c89d56d855ad"/>
                                            </text>
                                            <value xsi:type="IVL_PQ">
                                                <low value="1.005" unit="1"/>
                                                <high value="1.030" unit="1"/>
                                            </value>
                                        </observationRange>
                                    </referenceRange>
                                </observation>
                            </component>
                            <!-- components removed to simplify example -->
						
                        </organizer>
                    </entry>
                </section>
            </component>
        </structuredBody>
    </component>
</ClinicalDocument>`,
  },
];

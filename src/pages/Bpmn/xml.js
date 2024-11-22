// export default `<?xml version="1.0" encoding="UTF-8"?>
// <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" targetNamespace="http://www.activiti.org/processdef">
//   <process id="leaveProcess" name="请输入流程名称" isExecutable="true">
//     <documentation>请输入流程名称</documentation>
//     <startEvent id="startEvent1" name="开始" />
//     <userTask id="sid-ECFF0245-6D4D-44D8-9DB7-861D99A42272" approvalType="user" approvalValue="$INITIATOR" name="审核节点" activiti:assignee="$INITIATOR">
//       <extensionElements>
//         <modeler:activiti-idm-initiator xmlns:modeler="http://activiti.com/modeler">true</modeler:activiti-idm-initiator>
//       </extensionElements>
//     </userTask>
//     <endEvent id="sid-07A2CB79-E1C9-48BC-8C8D-0AA058ADAA24" name="结束" />
//     <sequenceFlow id="sid-F5C3F57A-EFA0-4E39-98B4-B1D4FEC5659E" sourceRef="startEvent1" targetRef="sid-ECFF0245-6D4D-44D8-9DB7-861D99A42272" />
//     <sequenceFlow id="sid-83C2288C-D64C-468D-B2F2-A6D216C08119" sourceRef="sid-ECFF0245-6D4D-44D8-9DB7-861D99A42272" targetRef="sid-07A2CB79-E1C9-48BC-8C8D-0AA058ADAA24" />
//   </process>
//   <bpmndi:BPMNDiagram id="BPMNDiagram_leaveProcess">
//     <bpmndi:BPMNPlane id="BPMNPlane_leaveProcess" bpmnElement="leaveProcess">
//       <bpmndi:BPMNEdge id="BPMNEdge_sid-83C2288C-D64C-468D-B2F2-A6D216C08119" bpmnElement="sid-83C2288C-D64C-468D-B2F2-A6D216C08119">
//         <omgdi:waypoint x="500" y="315" />
//         <omgdi:waypoint x="500" y="400" />
//       </bpmndi:BPMNEdge>
//       <bpmndi:BPMNEdge id="BPMNEdge_sid-F5C3F57A-EFA0-4E39-98B4-B1D4FEC5659E" bpmnElement="sid-F5C3F57A-EFA0-4E39-98B4-B1D4FEC5659E">
//         <omgdi:waypoint x="500" y="160" />
//         <omgdi:waypoint x="500" y="235" />
//       </bpmndi:BPMNEdge>
//       <bpmndi:BPMNShape id="BPMNShape_startEvent1" bpmnElement="startEvent1">
//         <omgdc:Bounds x="485" y="130" width="30" height="30" />
//         <bpmndi:BPMNLabel>
//           <omgdc:Bounds x="489" y="100" width="22" height="14" />
//         </bpmndi:BPMNLabel>
//       </bpmndi:BPMNShape>
//       <bpmndi:BPMNShape id="BPMNShape_sid-ECFF0245-6D4D-44D8-9DB7-861D99A42272" bpmnElement="sid-ECFF0245-6D4D-44D8-9DB7-861D99A42272">
//         <omgdc:Bounds x="450" y="235" width="100" height="80" />
//       </bpmndi:BPMNShape>
//       <bpmndi:BPMNShape id="BPMNShape_sid-07A2CB79-E1C9-48BC-8C8D-0AA058ADAA24" bpmnElement="sid-07A2CB79-E1C9-48BC-8C8D-0AA058ADAA24">
//         <omgdc:Bounds x="486" y="400" width="28" height="28" />
//         <bpmndi:BPMNLabel>
//           <omgdc:Bounds x="489" y="443" width="22" height="14" />
//         </bpmndi:BPMNLabel>
//       </bpmndi:BPMNShape>
//     </bpmndi:BPMNPlane>
//   </bpmndi:BPMNDiagram>
// </definitions>`;

// export default `<?xml version="1.0" encoding="UTF-8"?>
// <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" targetNamespace="http://www.activiti.org/processdef">
//   <process id="leaveProcess" name="testSelfField" isExecutable="true">
//     <documentation>请输入流程名称</documentation>
//     <startEvent id="Event_1f17mc7" name="开始">
//       <outgoing>Flow_1a8gx22</outgoing>
//     </startEvent>
//     <task id="Activity_135odg4" name="审核节点">
//       <incoming>Flow_1a8gx22</incoming>
//       <outgoing>Flow_1rbgpfk</outgoing>
//     </task>
//     <sequenceFlow id="Flow_1a8gx22" sourceRef="Event_1f17mc7" targetRef="Activity_135odg4" />
//     <endEvent id="Event_00xga40" name="结束">
//       <incoming>Flow_1rbgpfk</incoming>
//     </endEvent>
//     <sequenceFlow id="Flow_1rbgpfk" sourceRef="Activity_135odg4" targetRef="Event_00xga40" />
//   </process>
//   <bpmndi:BPMNDiagram id="BPMNDiagram_leaveProcess">
//     <bpmndi:BPMNPlane id="BPMNPlane_leaveProcess" bpmnElement="leaveProcess">
//       <bpmndi:BPMNEdge id="Flow_1a8gx22_di" bpmnElement="Flow_1a8gx22">
//         <omgdi:waypoint x="430" y="208" />
//         <omgdi:waypoint x="430" y="300" />
//       </bpmndi:BPMNEdge>
//       <bpmndi:BPMNEdge id="Flow_1rbgpfk_di" bpmnElement="Flow_1rbgpfk">
//         <omgdi:waypoint x="430" y="380" />
//         <omgdi:waypoint x="430" y="482" />
//       </bpmndi:BPMNEdge>
//       <bpmndi:BPMNShape id="Event_1f17mc7_di" bpmnElement="Event_1f17mc7">
//         <omgdc:Bounds x="412" y="172" width="36" height="36" />
//         <bpmndi:BPMNLabel>
//           <omgdc:Bounds x="421" y="142" width="22" height="14" />
//         </bpmndi:BPMNLabel>
//       </bpmndi:BPMNShape>
//       <bpmndi:BPMNShape id="Activity_135odg4_di" bpmnElement="Activity_135odg4">
//         <omgdc:Bounds x="380" y="300" width="100" height="80" />
//       </bpmndi:BPMNShape>
//       <bpmndi:BPMNShape id="Event_00xga40_di" bpmnElement="Event_00xga40">
//         <omgdc:Bounds x="412" y="482" width="36" height="36" />
//         <bpmndi:BPMNLabel>
//           <omgdc:Bounds x="420" y="525" width="22" height="14" />
//         </bpmndi:BPMNLabel>
//       </bpmndi:BPMNShape>
//     </bpmndi:BPMNPlane>
//   </bpmndi:BPMNDiagram>
// </definitions>
// `;

export default `
  <?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:flowable="http://flowable.org/bpmn" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" targetNamespace="http://www.activiti.org/processdef">
  <process id="leaveProcess" name="testSelfField" isExecutable="true">
    <documentation>请输入流程名称</documentation>
    <startEvent id="Event_1f17mc7" name="开始">
      <outgoing>Flow_1a8gx22</outgoing>
    </startEvent>
    <task id="Activity_135odg4" name="审核节点">
      <extensionElements>
        <flowable:field name="type">
          <flowable:typeString>1213</flowable:typeString>
        </flowable:field>
      </extensionElements>
      <incoming>Flow_1a8gx22</incoming>
      <outgoing>Flow_1rbgpfk</outgoing>
    </task>
    <sequenceFlow id="Flow_1a8gx22" sourceRef="Event_1f17mc7" targetRef="Activity_135odg4" />
    <endEvent id="Event_00xga40" name="结束">
      <incoming>Flow_1rbgpfk</incoming>
    </endEvent>
    <sequenceFlow id="Flow_1rbgpfk" sourceRef="Activity_135odg4" targetRef="Event_00xga40" />
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_leaveProcess">
    <bpmndi:BPMNPlane id="BPMNPlane_leaveProcess" bpmnElement="leaveProcess">
      <bpmndi:BPMNEdge id="Flow_1rbgpfk_di" bpmnElement="Flow_1rbgpfk">
        <omgdi:waypoint x="430" y="380" />
        <omgdi:waypoint x="430" y="482" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1a8gx22_di" bpmnElement="Flow_1a8gx22">
        <omgdi:waypoint x="430" y="208" />
        <omgdi:waypoint x="430" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_1f17mc7_di" bpmnElement="Event_1f17mc7">
        <omgdc:Bounds x="412" y="172" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="421" y="142" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_135odg4_di" bpmnElement="Activity_135odg4">
        <omgdc:Bounds x="380" y="300" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_00xga40_di" bpmnElement="Event_00xga40">
        <omgdc:Bounds x="412" y="482" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="420" y="525" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`;

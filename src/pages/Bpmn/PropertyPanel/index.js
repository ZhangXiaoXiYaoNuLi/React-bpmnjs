import React, { Component, useState, useRef, useEffect } from "react";
import { Input, Radio, Select, Drawer, Button } from "antd";
import _ from "lodash";
import styles from "./styles.less";
import Main from "./main";

const PropertyPanel = (props) => {
  const [activeTab, setActiveTab] = useState("base");
  const [elementId, setElementId] = useState("");
  const [elementType, setElementType] = useState("");
  // 元素 businessObject 镜像，提供给需要做判断的组件使用
  const [elementBusinessObject, setElementBusinessObject] = useState({});
  // 流转条件设置
  const [conditionFormVisible, setConditionFormVisible] = useState(false);
  // 表单配置
  const [formVisible, setFormVisible] = useState(false);
  // 当前选中 bpmn 元素
  const [bpmnElement, setBpmnElement] = useState(null);

  // 构建的bpmn描述对象
  const bpmnInstances = useRef(null);

  useEffect(() => {
    setActiveTab("base");
  }, [elementId]);

  useEffect(() => {
    if (props.bpmnModeler != null) {
      bpmnInstances.current = {
        modeler: props.bpmnModeler,
        modeling: props.bpmnModeler.get("modeling"),
        moddle: props.bpmnModeler.get("moddle"),
        eventBus: props.bpmnModeler.get("eventBus"),
        bpmnFactory: props.bpmnModeler.get("bpmnFactory"),
        elementFactory: props.bpmnModeler.get("elementFactory"),
        elementRegistry: props.bpmnModeler.get("elementRegistry"),
        replace: props.bpmnModeler.get("replace"),
        selection: props.bpmnModeler.get("selection"),
      };

      // console.log('bpmnInstances =>', bpmnInstances)

      getActiveElement();
    }
  }, [props.bpmnModeler]);

  const getActiveElement = () => {
    // 初始第一个选中元素 bpmn:Process
    initFormOnChanged(null);
    props.bpmnModeler.on("import.done", (e) => {
      //   console.log(e, 'eeeee')
      initFormOnChanged(null);
    });
    // 监听选择事件，修改当前激活的元素以及表单
    props.bpmnModeler.on("selection.changed", ({ newSelection }) => {
      initFormOnChanged(newSelection[0] || null);
    });
    props.bpmnModeler.on("element.changed", ({ element }) => {
      // 保证 修改 "默认流转路径" 类似需要修改多个元素的事件发生的时候，更新表单的元素与原选中元素不一致。
      if (element && element.id === elementId.value) {
        initFormOnChanged(element);
      }
    });
  };

  // 初始化数据
  const initFormOnChanged = (element) => {
    let activatedElement = element;
    if (!activatedElement) {
      activatedElement =
        bpmnInstances.current.elementRegistry.find(
          (el) => el.type === "bpmn:Process"
        ) ??
        bpmnInstances.current.elementRegistry.find(
          (el) => el.type === "bpmn:Collaboration"
        );
    }
    if (!activatedElement) return;
    // console.log(`
    //             ----------
    //     select element changed:
    //             id:  ${activatedElement.id}
    //             type:  ${activatedElement.businessObject.$type}
    //             ----------
    //             `)
    // console.log('businessObject: ', activatedElement.businessObject)
    bpmnInstances.current.bpmnElement = activatedElement;
    // bpmnElement.value = activatedElement
    setBpmnElement(activatedElement);
    // elementId.value = activatedElement.id
    setElementId(activatedElement.id);
    // elementType.value = activatedElement.type.split(':')[1] || ''
    setElementType(activatedElement.type.split(":")[1] || "");
    // elementBusinessObject.value = JSON.parse(JSON.stringify(activatedElement.businessObject))
    setElementBusinessObject(
      JSON.parse(JSON.stringify(activatedElement.businessObject))
    );
    // conditionFormVisible.value = !!(
    //   elementType.value === 'SequenceFlow' &&
    //   activatedElement.source &&
    //   activatedElement.source.type.indexOf('StartEvent') === -1
    // )
    setConditionFormVisible(
      !!(
        elementType === "SequenceFlow" &&
        activatedElement.source &&
        activatedElement.source.type.indexOf("StartEvent") === -1
      )
    );
    // formVisible.value = elementType.value === 'UserTask' || elementType.value === 'StartEvent'
    setFormVisible(elementType === "UserTask" || elementType === "StartEvent");
  };

  return (
    <Main
      activeTab={activeTab}
      elementId={elementId}
      elementType={elementType}
      elementBusinessObject={elementBusinessObject}
      conditionFormVisible={conditionFormVisible}
      formVisible={formVisible}
      bpmnElement={bpmnElement}
      bpmnInstances={bpmnInstances.current}
    ></Main>
  );
};

export default PropertyPanel;

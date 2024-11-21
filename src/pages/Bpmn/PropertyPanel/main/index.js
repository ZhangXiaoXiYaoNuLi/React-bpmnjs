import React, { Component, useState, useRef, useEffect, Children } from "react";
import { Input, Radio, Select, Drawer, Button, Collapse } from "antd";
import _ from "lodash";
import styles from "./styles.less";
import ElementBaseInfo from "../configItems/ElementBaseInfo";

const { Panel } = Collapse;

const Main = (props) => {
  if (props.bpmnInstances == null) {
    return null;
  }

  const {
    activeTab,
    elementId,
    elementType,
    elementBusinessObject,
    conditionFormVisible,
    formVisible,
    bpmnElement,
    bpmnInstances,
  } = props;

  // useEffect(() => {
  //     console.log('props =>', props)
  // }, [props])

  // useEffect(() => {
  //     console.log('activeTab =>', activeTab)
  // }, [activeTab])

  // useEffect(() => {
  //     console.log('当前节点类型 =>', elementType)
  // }, [elementType])

  useEffect(() => {
    console.log("elementBusinessObject =>", elementBusinessObject);
  }, [elementBusinessObject]);

  return (
    <div className={styles.PropertyPanel}>
      {/* 头部 */}
      <div className={styles.title}>
        <span>属性配置</span>
      </div>

      <Collapse defaultActiveKey={["base", "formPage"]}>
        <Panel header="常规" key="base">
          <ElementBaseInfo
            type={elementType}
            businessObject={elementBusinessObject}
            bpmnInstances={bpmnInstances}
            id={elementId}
          ></ElementBaseInfo>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Main;

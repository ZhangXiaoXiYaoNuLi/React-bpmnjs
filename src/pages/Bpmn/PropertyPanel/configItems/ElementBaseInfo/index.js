import React, { Component, useState, useRef, useEffect } from "react";
import { Input, Radio, Select, Drawer, Button, Form } from "antd";

const ElementBaseInfo = (props) => {
  const formRef = useRef(null);

  const { type, businessObject, id, bpmnInstances } = props;

  // console.log('businessObject', businessObject)
  // console.log('id =>', id)
  // console.log('type =>', type)

  // 初始回填
  useEffect(() => {
    // 流程的初始回填
    if (businessObject != null) {
      if (type === "Process") {
        formRef.current.setFieldsValue({
          id: id,
          name: businessObject.name,
        });
      } else {
        formRef.current.setFieldsValue({
          nodeId: businessObject.id,
          nodeName: businessObject.name,
        });
      }
    }
  }, [type, businessObject]);

  // 流程id更新
  const handleKeyUpdate = (value) => {
    // 校验 value 的值，只有 XML NCName 通过的情况下，才进行赋值。否则，会导致流程图报错，无法绘制的问题
    if (!value) {
      return;
    }
    if (!value.match(/[a-zA-Z_][\-_.0-9a-zA-Z$]*/)) {
      console.log("key 不满足 XML NCName 规则，所以不进行赋值");
      return;
    }
    console.log("key 满足 XML NCName 规则，所以进行赋值");

    bpmnInstances.modeling.updateProperties(bpmnInstances.bpmnElement, {
      id: value,
      di: { id: `${value}_di` },
    });
  };

  // 流程名称更新
  const handleNameUpdate = (value) => {
    if (!value) {
      return;
    }
    bpmnInstances.modeling.updateProperties(bpmnInstances.bpmnElement, {
      name: value,
    });
  };

  const updateBaseInfo = (value, key) => {
    if (!value) {
      return;
    }
    let setObj = {};
    setObj[key] = value;
    bpmnInstances.modeling.updateProperties(bpmnInstances.bpmnElement, setObj);
  };

  return (
    <Form ref={formRef}>
      {type === "Process" ? (
        <>
          {/* 流程整体配置 */}
          <Form.Item label="流程标识" name="id">
            <Input
              value={id}
              disabled={id !== undefined && id.length > 0}
              onChange={(e) => {
                handleKeyUpdate(e.target.value);
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="流程名称" name="name">
            <Input
              value={businessObject.name}
              onChange={(e) => {
                handleNameUpdate(e.target.value);
              }}
            ></Input>
          </Form.Item>
        </>
      ) : (
        <>
          {/* 流程节点配置 */}
          <Form.Item label="ID" name="nodeId">
            <Input
              value={businessObject.id}
              onChange={(e) => {
                updateBaseInfo(e.target.value, "id");
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="名称" name="nodeName">
            <Input
              value={businessObject.name}
              onChange={(e) => {
                updateBaseInfo(e.target.value, "name");
              }}
            ></Input>
          </Form.Item>
        </>
      )}
    </Form>
  );
};

export default ElementBaseInfo;

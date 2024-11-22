// 节点对应表单配置
import React, { Component, useState, useRef, useEffect } from "react";
import { Input, Radio, Select, Drawer, Button, Form, Modal } from "antd";

import { EditOutlined } from "@ant-design/icons";

const ElementForm = (props) => {
  const { businessObject, bpmnInstances, bpmnElement, id } = props;

  const testAddSelfField = () => {
    console.log("bpmnInstances.model =>", bpmnInstances.modeler);

    // 若没有 额外属性标签，则创建，然后插入元素
    let extension = bpmnElement.businessObject.get("extensionElements");

    if (!!!extension) {
      let elExtensionElements = bpmnInstances.moddle.create(
        "bpmn:ExtensionElements",
        { values: [] }
      );
      bpmnInstances.modeling.updateProperties(bpmnInstances.bpmnElement, {
        extensionElements: elExtensionElements,
      });
    }

    // 下面给该节点添加自定义属性
    let body = bpmnInstances.moddle.create("flowable:TypeString", {
      body: "1213",
    });
    let Field = bpmnInstances.moddle.create("flowable:Field", {
      values: [body],
      name: "type",
    });

    console.log("Field", Field);
    updateElementExtensions(Field);
  };

  const updateElementExtensions = (element) => {
    // 更新回扩展元素
    const newElExtensionElements = bpmnInstances.moddle.create(
      `bpmn:ExtensionElements`,
      {
        values: [element],
      }
    );
    // 更新到元素上
    bpmnInstances.modeling.updateProperties(bpmnInstances.bpmnElement, {
      extensionElements: newElExtensionElements,
    });
  };

  useEffect(() => {
    // 测试自定义节点读取以及，回填表单
    console.log("自定义节点 element =>", bpmnElement);
    console.log("bpmnElementl.values", bpmnElement.values);
  }, []);

  return (
    <>
      <Form.Item label="节点表单">
        <Button
          style={{
            width: "96px",
          }}
          type="ghost"
          icon={<EditOutlined></EditOutlined>}
          onClick={() => {
            testAddSelfField();
          }}
        >
          编辑
        </Button>
      </Form.Item>
    </>
  );
};

export default ElementForm;

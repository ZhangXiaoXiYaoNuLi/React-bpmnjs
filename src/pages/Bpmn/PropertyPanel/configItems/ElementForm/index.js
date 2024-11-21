// 节点对应表单配置
import React, { Component, useState, useRef, useEffect } from "react";
import { Input, Radio, Select, Drawer, Button, Form, Modal } from "antd";

import { EditOutlined } from "@ant-design/icons";

const ElementForm = (props) => {
  const { businessObject, bpmnInstances, bpmnElement, id } = props;

  const testAddSelfField = () => {};

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

export const read = {
  name: "Flowable",
  uri: "http://flowable.org/bpmn",
  prefix: "flowable",
  xml: {
    tagAlias: "lowerCase",
  },
  associations: [],
  types: [
    {
      // 因为这个配置，最终xml标签名应该是 <flowable:TypeString ...
      name: "TypeString",
      // 标识自身类型是一个 element 元素
      superClass: ["Element"],
      properties: [
        {
          name: "body",
          isBody: true,
          // 标记子元素类型，String ，子元素为字符串
          type: "String",
        },
      ],
    },
    {
      name: "Field",
      superClass: ["Element"],
      meta: {
        allowedIn: ["*"],
      },
      properties: [
        {
          name: "values",
          // 标记子元素为 TypeString 类型，也就是我们上面刚定义的 TypeString 自定义节点
          type: "TypeString",
          // 允许多个 TypeString 子元素
          isMany: true,
        },
      ],
    },
  ],
  emumerations: [],
};

//   最终出来的 xml 结果
const res = `
    <extensionElements>
        <flowable:field name="type">
            <flowable:typeString>1213</flowable:typeString>
        </flowable:field>
    </extensionElements>
  `;

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Breadcrumb',
  title: '面包屑',
  category: '导航',
  props: [
    {
      name: 'disabled',
      title: '是否禁用',
      setter: 'BoolSetter',
      defaultValue: true,
      supportVariable: true,
    },
    {
      title: '基础',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'separator',
          title: { label: '分隔符自定义', tip: '分隔符自定义' },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: [
            'StringSetter',
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [],
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
  ],
  configure: { supports: { style: true } },
};

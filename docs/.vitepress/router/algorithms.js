module.exports = {
  // "/pages/algorithms/": [
  //   {
  //     text: '线性表',
  //     link: '/pages/algorithms/linear-list/'
  //   },
  //   {
  //     text: '栈',
  //     link: '/pages/algorithms/stacks/'
  //   },
  //   {
  //     text: '队列',
  //     link: '/pages/algorithms/queues/'
  //   },
  // ],
  "/pages/algorithms/linear-list/": [
    { 
      text: '顺序表',
      children: [
        { text: '静态表', link: '/pages/algorithms/linear-list/a' },
        { text: '动态表', link: '/pages/algorithms/linear-list/b' }
      ],
    },
    { 
      text: '链表',
      children: [
        { text: '单链表', link: '/pages/algorithms/linear-list/c' },
        { text: '双链表', link: '/pages/algorithms/linear-list/d' },
      ],
    },
  ],
  "/pages/algorithms/stacks/": [
    { text: '顺序栈', link: '/pages/algorithms/stacks/a' },
    { text: '链栈', link: '/pages/algorithms/stacks/b' }
  ],
  "/pages/algorithms/queues/": [
    { text: '顺序栈', link: '/pages/algorithms/queues/a' },
    { text: '链栈', link: '/pages/algorithms/queues/b' }
  ]
}
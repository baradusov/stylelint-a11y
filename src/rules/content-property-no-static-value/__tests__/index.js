import rule, { messages, ruleName } from '../index';

testRule(rule, {
  ruleName,
  config: [true],

  accept: [
    {
      code: ".foo::after { content: ''; }",
    },
    {
      code: 'a { }',
    },
    {
      code: ".foo:after { content: ''; }",
    },
    {
      code: '.foo::after { content: ""; }',
    },
    {
      code: '.bar::before { content: attr(aria-label); }',
    },
  ],

  reject: [
    {
      code: '.foo::before { content: "bar"; }',
      message: messages.expected('.foo::before'),
      line: 1,
      column: 4,
    },
    {
      code: '.bar::before { content: 23; }',
      message: messages.expected('.bar::before'),
      line: 1,
      column: 4,
    },
    {
      code: ".foo:before, .bar { content: ''; }",
    },
  ],
});

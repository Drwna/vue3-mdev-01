type Rule = {
  validator: () => boolean;
  c?: string;
  h?: string;
  m?: string;
}

type RuleList = {
  [key: string]: Rule[];
}

type RtnObj = {
  reg: RegExp | null,
  rule: Record<string, any>
}

const regRules = [
  {
    c: "len",
    dr: /^[a-zA-Z]{3,7}$s/,
    dm: "长度必须在1和30之间！",
    r: "^[a-zA-Z]{h}$",
    m: "长度必须在m之间！"
  },
  {
    c: "pwd",
    dr: /^[a-zA-Z]{1,10}$/,
    dm: "长度必须在1和10之间！",
    r: "^[a-zA-Z]{h}$",
    m: "长度必须在m之间！"
  },
  {
    c: "dig",
    dr: /^[0-9]*$/,
    dm: "必须为数字！"
  },
  {
    c: "telNo",
    dr: /^(\\(\\d{3,4}\\)|\\d{3,4}-|\\s)?\\d{7,14}$/,
    dm: "格式不正确！"
  },
  {
    c: "mobile",
    dr: /^1([3456789])\\d{9}$/,
    dm: "格式不正确！"
  },
  {
    c: "idNo",
    dr: /(^\\d{15}$)|(^\\d{17}([0-9]|X)$)/,
    dm: "格式不正确！"
  }, {
    c: "dateS",
    dr: /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/,
    dm: "格式应该为yyyy-mm-dd HH:MM:SS！"
  },
  {
    c: "date",
    dr: /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1]))$/,
    dm: "格式应该为yyyy-mm-dd"
  },
  {
    c: "email",
    dr: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
    dm: "格式不正确"
  }
];


const getRegObj = (rule: any) => {
  /*
  rule:
  username: [
    {validator, c: 'len', h: '3,7', m: '0和1000'}
  ],
   */
  const rtnObj: RtnObj = {
    reg: null,
    rule: {}
  };
  const regRule = regRules.find((o) => o.c === rule.c);
  if (!regRule) {
    return rtnObj;
  }
  rtnObj.rule = regRule;

  let reg = regRule.dr;
  if (rule.h && regRule.r) {
    reg = new RegExp(regRule.r.toString().replace("h", rule.h));
  }
  rtnObj.reg = reg;
  return rtnObj;
};

export const validator = (val: string, rule: RuleList): boolean => {
  /*
  c: check len
  dr: default rule
  dm: default message
  r: rule
  h: low high value
   */

  const message = rule.m;
  const ruleObj = getRegObj(rule);
  if (!ruleObj) {
    return false;
  }
  let { c, h, m, r, dm } = ruleObj.rule;
  if (!c) {
    return false;
  }
  if (c === "len" || c === "pwd") {
    if (h) {
      r = r.replace("h", h);
    }
  }
  const reg = ruleObj.reg;
  if (!reg) {
    return false;
  }
  const isTest = reg.test(val);
  if (!isTest) {
    if (m) {
      m = m.replace("m", message);
    }
    rule.message = m || dm;
  }
  return isTest;
};

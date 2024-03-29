import {multiplier, BASE_L1, BASE_L2, BASE_L3, BASE_L4, BASE_L5, BASE_H1, BASE_H2, BASE_H3,BASE_H4,BASE_H5} from './get-usage-limits'

const feats = [
  'Up to 50 sites included',
  'Wildcard subdomains and TLDs',
  'Sitemap extended domain coverage',
  'Set accessibility standard WCAG2 A-AAA, Section508, and etc',
  'Add custom runners like axe or htmlcs',
  'Test private pages over secure proxy connection',
  'Add custom Agent and crawl delays',
  '100% Data ownership',
  'All pages checked daily with email status reports',
  'Unlimited email reports',
  'Analytics monitor',
  '10,000+ AI Models to validate resources',
  'Web Vitals across all pages',
  'Forever data retention',
  'Unlimited CSV & Excel data exports',
  'Enterprise-grade infrastructure',
  'Unlimited API request',
]

const formatter = typeof Intl.NumberFormat !== "undefined" ? new Intl.NumberFormat() : {format: (n: number) => n};

const lPlans = [
  {
    title: 'L1',
    details: [`${formatter.format(BASE_L1 / 1000)} seconds monthly uptime`],
    cost: '$14/month',
    costYearly: '$12/month',
    pageCount: multiplier(10000),
  },
  {
    title: 'L2',
    details: [`${formatter.format(BASE_L2 / 1000)} seconds monthly uptime`],
    cost: '$24/month',
    costYearly: '$20/month',
    pageCount: multiplier(20000),
  },
  {
    title: 'L3',
    details: [`${formatter.format(BASE_L3 / 1000)} seconds monthly uptime`],
    cost: '$44/month',
    costYearly: '$37/month',
    pageCount: multiplier(42000),
  },
  {
    title: 'L4',
    details: [`${formatter.format(BASE_L4 / 1000)} seconds monthly uptime`],
    cost: '$54/month',
    costYearly: '$45/month',
    pageCount: multiplier(62000),
  },
  {
    title: 'L5',
    details: [`${formatter.format(BASE_L5 / 1000)} seconds monthly uptime`],
    cost: '$84/month',
    costYearly: '$70/month',
    pageCount: multiplier(124000),
  },
]

const hPlans = [
  {
    title: 'H1',
    details: [`${formatter.format(BASE_H1 / 1000)} seconds monthly uptime`],
    cost: '$94/month',
    costYearly: '$78/month',
    pageCount: multiplier(155000),
  },
  {
    title: 'H2',
    details: [`${formatter.format(BASE_H2 / 1000)} seconds monthly uptime`],
    cost: '$134/month',
    costYearly: '$112/month',
    pageCount: multiplier(310000),
  },
  {
    title: 'H3',
    details: [`${formatter.format(BASE_H3 / 1000)} seconds monthly uptime`],
    cost: '$194/month',
    costYearly: '$161/month',
    pageCount: multiplier(620000),
  },
  {
    title: 'H4',
    details: [`${formatter.format(BASE_H4 / 1000)} seconds monthly uptime`],
    cost: '$334/month',
    costYearly: '$278/month',
    pageCount: multiplier(1085000),
  },
  {
    title: 'H5',
    details: [`${formatter.format(BASE_H5 / 1000)} seconds monthly uptime`],
    cost: '$544/month',
    costYearly: '$453/month',
    pageCount: multiplier(1860000),
  },
]

export const priceConfig = {
  lPlans,
  hPlans,
  feats,
}

module.exports = {
	title: 'Good',
	description: 'Just playing around',
	base: '/blog/',
	themeConfig: {
		lastUpdated: 'Last Updated', // 最后提交时间
		// sidebarDepth: 2, // 显示标题链接的层数，最大为2，最小为0
		displayAllHeaders: true, // 显示所有页面的标题链接
		activeHeaderLinks: false, // 当用户滚动查看页面时阻止标题链接和 URL 中的 Hash 值实时更新行为
		logo: '/assets/img/logo.png',
		nav: [{
				text: 'html',
				link: '/html/'
			},
			{
				text: 'css',
				link: '/css/'
			},
			{
				text: 'javascript',
				link: '/javascript/'
			},
			{
				text: '知识点',
				link: '/knowledge/'
			},
			{
				text: '语言',
				items: [{
						text: '中文',
						link: '/language/chinese/'
					},
					{
						text: '日文',
						link: '/language/japanese/'
					}
				]
			}
		],
		sidebar: {
			'/html/': [
				{title: 'Group1', children: ['']},
				{title: 'Group2', children: ['one', 'two']}
			],
			'/css/': [
				{title: 'Group1', children: ['']},
				{title: 'Group2', children: ['three', 'four']}
			],
			'/javascript/': [
				''
			],
			'/knowledge/': [
				'',
				'closure',
				'sort'
			]
		}
	},
}
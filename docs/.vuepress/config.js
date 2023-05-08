module.exports = {
	title: 'Good',
	description: 'Just playing around',
	themeConfig: {
		sidebarDepth: 2, // 显示标题链接的层数，最大为2，最小为0
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
				text: 'Languages',
				items: [{
						text: 'Chinese',
						link: '/language/chinese/'
					},
					{
						text: 'Japanese',
						link: '/language/japanese/'
					}
				]
			}
		],
		sidebar: {
			'/html/': [
				'', /* /html/ */
				'one', /* /html/one.html */
				'two' /* /html/two.html */
			],

			'/css/': [
				'',
				'three', /* /css/three.html */
				'four' /* /css/four.html */
			],

			// fallback
			'/javascript/': [
				''
			]
		}
	},
}
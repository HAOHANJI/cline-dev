import { ActionMetadata } from "./types"

export const ACTION_METADATA: ActionMetadata[] = [
	{
		id: "enableAutoApprove",
		label: "启动自动批准",
		shortName: "已启用",
		description: "切换自动批准功能的开关。",
		icon: "codicon-play-circle",
	},
	{
		id: "enableAll",
		label: "全部切换",
		shortName: "全部",
		description: "一键切换所有操作的开关。",
		icon: "codicon-checklist",
	},
	{
		id: "readFiles",
		label: "读取项目文件",
		shortName: "读取",
		description: "允许编程助手读取您工作区内的文件。",
		icon: "codicon-search",
		subAction: {
			id: "readFilesExternally",
			label: "读取所有文件",
			shortName: "读取（全部）",
			description: "允许编程助手读取您计算机上的任意文件。",
			icon: "codicon-folder-opened",
			parentActionId: "readFiles",
		},
	},
	{
		id: "editFiles",
		label: "编辑项目文件",
		shortName: "编辑",
		description: "允许编程助手修改您工作区内的文件。",
		icon: "codicon-edit",
		subAction: {
			id: "editFilesExternally",
			label: "编辑所有文件",
			shortName: "编辑（全部）",
			description: "允许编程助手修改您计算机上的任意文件。",
			icon: "codicon-files",
			parentActionId: "editFiles",
		},
	},
	{
		id: "executeSafeCommands",
		label: "执行安全命令",
		shortName: "安全命令",
		description: "允许编程助手执行安全的终端命令。如果模型判断命令具有潜在破坏性，仍需获得您的批准。",
		icon: "codicon-terminal",
		subAction: {
			id: "executeAllCommands",
			label: "执行所有命令",
			shortName: "全部命令",
			description: "允许编程助手执行所有终端命令。请谨慎使用。",
			icon: "codicon-terminal-bash",
			parentActionId: "executeSafeCommands",
		},
	},
	{
		id: "useBrowser",
		label: "使用浏览器",
		shortName: "浏览器",
		description: "允许编程助手启动并操作任意网站。",
		icon: "codicon-globe",
	},
	{
		id: "useMcp",
		label: "使用 MCP 服务器",
		shortName: "MCP",
		description: "允许编程助手使用已配置的 MCP 服务器，这些服务器可能会修改文件系统或与 API 交互。",
		icon: "codicon-server",
	},
]

export const NOTIFICATIONS_SETTING: ActionMetadata = {
	id: "enableNotifications",
	label: "启用通知",
	shortName: "通知",
	description: "当编程助手需要批准或任务完成时，接收系统通知。",
	icon: "codicon-bell",
}

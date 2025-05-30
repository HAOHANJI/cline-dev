import ClineLogoVariable from "@/assets/ClineLogoVariable"
import HeroTooltip from "@/components/common/HeroTooltip"

const HomeHeader = () => {
	return (
		<div className="flex flex-col items-center mb-5">
			<div className="my-5">
				<ClineLogoVariable className="size-16" />
			</div>
			<div className="text-center flex items-center justify-center">
				<h2 className="m-0 text-[var(--vscode-font-size)]">{"您好，我能为您做什么？"}</h2>
				<HeroTooltip
					placement="bottom"
					className="max-w-[300px]"
					content={
						"我是专注于网络安全的AI编程助手，您可以向我提问或请求帮助，我会尽力为您提供支持和建议。无论是编程问题、网络安全知识还是其他相关内容，我都乐意为您解答。请随时向我提问！"
					}>
					<span
						className="codicon codicon-info ml-2 cursor-pointer"
						style={{ fontSize: "14px", color: "var(--vscode-textLink-foreground)" }}
					/>
				</HeroTooltip>
			</div>
		</div>
	)
}

export default HomeHeader

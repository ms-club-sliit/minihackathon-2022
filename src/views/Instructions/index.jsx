import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function Instructions() {
	const [md, setMD] = useState("");

	useEffect(() => {
		const fn = async () => {
			try {
				let res = await fetch("/instructions.md");
				setMD(await res.text());
			} catch (e) {
				console.error(e);
			}
		};

		fn().catch(console.error);
	}, []);

	return (
		<div className="prose max-w-none flex justify-center items-center pl-[5em] pr-[5em] py-[4em] w-auto">
			<div className="markdown-body">
				<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
					{md}
				</ReactMarkdown>
			</div>
		</div>
	);
}

export default Instructions;

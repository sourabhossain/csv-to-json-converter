"use strict";

const fs = require("fs");
const isWin = process.platform === "win32";

const getFileNameArguments = () => {
	return process.argv.slice(2);
};

const readFile = (file) => {
	let content = fs.readFileSync(file, "utf8");

	if (isWin) {
		content = content.replace(/\r/g, "");
	}

	return content;
};

const writeFile = (directory, fileName, content, extension) => {
	try {
		fs.writeFile(
			`${directory}/${fileName}.${extension}`,
			content,
			function (err) {
				if (err) console.log("Error: ", err);
				else
					console.log(
						`${fileName}.${extension} File constructed successfully!`
					);
			}
		);
	} catch (err) {
		console.error(err);
	}
};

const writeFiles = (content, fileName) => {
	try {
		const lines = content.split("\r\n");
		const length = lines.length;
		const dir = "./";
		const fileContent = {
			headers: lines[0]
				.split(",")
				.map((part) => part.toLowerCase().trim()),
			rows: [],
		};

		for (let i = 1; i < length; i++) {
			const parts = lines[i].split(",");
			const lengthOfPart = parts.length;
			const row = {};

			for (let j = 0; j < lengthOfPart; j++) {
				row[fileContent.headers[j] || `_Column_${j}`] = (
					parts[j] || ""
				).trim();
			}

			fileContent.rows.push(row);
		}

		writeFile(
			dir,
			fileName,
			JSON.stringify(fileContent.rows, " ", 2),
			"json"
		);
	} catch (err) {
		console.error(err);
	}
};

const execute = () => {
	let files = getFileNameArguments();
	console.log("File names: ", files);

	if (files.length) {
		files.forEach((file) => {
			let data = readFile(file);
			writeFiles(data, file.slice(0, -4));
		});
	} else {
		throw new Error(
			"No source files specified. please provide one or more .txt source files separated by empty space."
		);
	}
};

execute();

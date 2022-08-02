# CSV to JSON converter

## Description

Converts _csv_ files to _JSON_ files with Node.js.

Give an input file like:

| first_name | last_name |      email       | gender | age | zip  | registered |
| :--------: | :-------: | :--------------: | :----: | :-: | :--: | :--------: |
|   Sourab   |  Hossain  | sourab@gmail.com |  Male  | 20  | 1216 |    true    |
|   Habib    |  Hridoy   | habibi@gmail.com |  Male  | 32  | 1620 |   false    |

e.g. :

```
first_name;last_name;email;gender;age;zip;registered
Sourab;Hossain;sourab@gmail.com;Male;20;1216;true
Habib;Hridoy;habibi@gmail.com;Male;32;1620;false
```

will generate:

```json
[
	{
		"first_name": "Sourab",
		"last_name": "Hossain",
		"email": "sourab@gmail.com",
		"gender": "Male",
		"age": "20",
		"zip": "1216",
		"registered": "true"
	},
	{
		"first_name": "Habib",
		"last_name": "Hridoy",
		"email": "habibi@gmail.com",
		"gender": "Male",
		"age": "32",
		"zip": "1620",
		"registered": "false"
	}
]
```

## Run Command

```
node csv_to_json_converter.js filePath
```

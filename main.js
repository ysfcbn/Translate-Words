"use strict";

const translateBtn = document.querySelector(".translate");
const input = document.querySelector(".input");
const french = document.querySelector(".french");

import { stringify } from "qs";
import { request } from "axios";

const transletaText = function () {
	const options = {
		method: "POST",
		url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
		data: stringify({
			q: `${input.value}`,
			source: "en",
			target: "fr",
		}),
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"accept-encoding": "application/gzip",
			"x-rapidapi-key": "c72d50f27fmshd80c2d5d5b390b8p10d835jsn102cfa3698d6",
			"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		},
	};
	console.log(input.value);

	request(options)
		.then(function (response) {
			french.innerHTML =
				response.data.data["translations"][0]["translatedText"];
		})
		.catch(function (error) {
			console.error(error);
		});
};

translateBtn.addEventListener("click", transletaText);
window.addEventListener("DOMContentLoaded", transletaText);

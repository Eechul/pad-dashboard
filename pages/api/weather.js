// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import cheerio from "cheerio"

export default async function handler(req, res) {
	const result = await axios.get("https://weather.naver.com/today/09620102")
	const $ = cheerio.load(result.data);
	let now = $('.weather_now').html()
	let sub = $('.weather_quick_area').html()
	const data = {
		now,
		sub
	}
	res.status(200).json({ result: data })
}

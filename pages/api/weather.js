// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import convert from "xml-js"

export default async function handler(req, res) {
	const result = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${process.env.WEATHER_SERVICE_KEY}&numOfRows=10&pageNo=1&base_date=${'20220328'}&base_time=0600&nx=59&ny=25`)
	const xmlToJson = convert.xml2json(result.data, { compact: true, spaces: 4 })
	console.log(xmlToJson.response)
	res.status(200).json({ result: '' })
}

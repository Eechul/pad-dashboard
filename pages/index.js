import useSwr from 'swr'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const fetcher = (url) => fetch(url).then((res) => {
	return res.json()
})

export default function Home() {
	const { data } = useSwr('/api/weather', fetcher)
	console.log(data)
	return (
		<Row gutter={16}>
			<Col span={12}>
				{
					data ? (<div dangerouslySetInnerHTML={ {__html: data.result.now} }></div>) : 'loading'
				}
			</Col>
			<Col span={12}>
				{
					data ? (<div dangerouslySetInnerHTML={ {__html: data.result.sub} }></div>) : 'loading'
				}
			</Col>
		</Row>
	)
}

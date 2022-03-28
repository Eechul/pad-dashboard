import useSwr from 'swr'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const fetcher = (url) => fetch(url).then((res) => {
	return res.json()
})

export default function Dash() {
	const { data } = useSwr('/api/weather', fetcher);
	return (
		<Row gutter={16}>
			<Col span={12}>
				{
					data ? (<div dangerouslySetInnerHTML={ {__html: data.result.now} }></div>) : 'loading'
				}
			</Col>
			<Col span={12}>
				{
					data ? (<div dangerouslySetInnerHTML={ {__html: data.result.summary} }></div>) : 'loading'
				}
			</Col>
			
		</Row>
	)
}

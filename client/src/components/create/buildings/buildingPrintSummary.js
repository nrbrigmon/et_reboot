import React, { Component } from 'react';
import './_tableCSS.css';

let placeholderCSS = {
	border: '1px solid black',
	margin: '20px',
	padding: '100px'
};

const PrintOutlineText = () => (
	<div>
		<div
			className="card-panel teal lighten-2"
			style={{ padding: '5px 15px' }}>
			<h5> 3 Story Apartment </h5> <p> Austin, TX </p>{' '}
		</div>{' '}
		<div className="col s6 myTable">
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Building Form</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Lot Area</td>
						<td>43,560</td>
						<td>sf</td>
					</tr>
					<tr>
						<td>Lot Area</td>
						<td>1</td>
						<td>acres</td>
					</tr>
					<tr>
						<td>Building Footprint</td>
						<td>39,204</td>
						<td>sf</td>
					</tr>
					<tr>
						<td>Parking Footprint</td>
						<td>-</td>
						<td>sf</td>
					</tr>
					<tr>
						<td>Height</td>
						<td>3</td>
						<td>stories</td>
					</tr>
					<tr>
						<td>Floor-area ratio</td>
						<td>2.3</td>
						<td>FAR</td>
					</tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Development Program</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Use</td>
						<td>Gross</td>
						<td>Net</td>
					</tr>
					<tr>
						<td>Residential</td>
						<td>12,000</td>
						<td>11,123</td>
					</tr>
					<tr>
						<td>Retail</td>
						<td>99,750</td>
						<td>85,456</td>
					</tr>
					<tr>
						<td>Office</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Industrial</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Public</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Educational</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Hotel/Motel</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Commercial Parking</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Structured Parking</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Internal Parking</td>
						<td>-</td>
						<td>-</td>
					</tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Units and Employees</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Housing Units</td>
						<td>10</td>
						<td>- per acre</td>
					</tr>
					<tr>
						<td>Average Unit Size</td>
						<td>750 sf</td>
						<td>-</td>
					</tr>
					<tr>
						<td>Employees</td>
						<td>106</td>
						<td>106 per acre</td>
					</tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Parking and Open Space</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Residential</td>
						<td>-</td>
						<td>1.00 per unit</td>
					</tr>
					<tr>
						<td>Retail</td>
						<td>-</td>
						<td>- per 1000 sf</td>
					</tr>
					<tr>
						<td>Office</td>
						<td>-</td>
						<td>- per 1000 sf</td>
					</tr>
					<tr>
						<td>Industrial</td>
						<td>-</td>
						<td>- per 1000 sf</td>
					</tr>
					<tr>
						<td>Public</td>
						<td>-</td>
						<td>- per 1000 sf</td>
					</tr>
					<tr>
						<td>Educational</td>
						<td>-</td>
						<td>- per 1000 sf</td>
					</tr>
					<tr>
						<td>Hotel/Motel</td>
						<td>-</td>
						<td>- per room</td>
					</tr>
					<tr>
						<td>Parking Structure</td>
						<td>-</td>
						<td />
					</tr>
					<tr>
						<td>Total Parking Spaces</td>
						<td>-</td>
						<td />
					</tr>
					<tr>
						<td>Landscaping and Open Space</td>
						<td>- %</td>
						<td>- acres</td>
					</tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Construction Costs</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Total Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Land Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Hard Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Residential</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Retail</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Office</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Industrial</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Public</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Educational</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Hotel/Motel</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Commercial Parking</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Other Parking</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Soft Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Other Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Demolition Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Site Development Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Brownfield Remediation Costs</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Water Quality Controls</td>
						<td>$ -</td>
						<td />
					</tr>
					<tr>
						<td>Additional Infrastructure</td>
						<td>$ -</td>
						<td />
					</tr>
				</tbody>
			</table>
		</div>{' '}
		<div className="col s6 myTable">
			{' '}
			<div style={placeholderCSS}>3d image</div>
			<div style={placeholderCSS}> cool graph here</div>{' '}
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Rents and Sales Price</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Residential Unit Sales Price</td>
						<td>N/A</td>
						<td>N/A sf</td>
					</tr>
					<tr>
						<td>Residential Unit Rent ($/mth)</td>
						<td>$ 750</td>
						<td>sf</td>
					</tr>
					<tr>
						<td>Retail rent (sf/year)</td>
						<td>$18</td>
						<td>per sf</td>
					</tr>
					<tr>
						<td>Office rent (sf/year)</td>
						<td>N/A</td>
						<td>N/A sf</td>
					</tr>
					<tr>
						<td>Industrial rent (sf/year)</td>
						<td>N/A</td>
						<td>N/A sf</td>
					</tr>
					<tr>
						<td>Hotel/Motel ($/night)</td>
						<td>N/A</td>
						<td>per room per night</td>
					</tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<td colSpan="3">
							<b>Financial Performance</b>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<b>Rental</b>
						</td>
						<td />
						<td />
					</tr>
					<tr>
						<td>Cash-on-Cash (After Year 3)</td>
						<td />
						<td>0.0%</td>
					</tr>
					<tr>
						<td>IRR on Project Cost (Unleveraged Return)</td>
						<td />
						<td>0.0%</td>
					</tr>
					<tr>
						<td>
							IRR on Investor Equity (Leveraged Return Before Tax)
						</td>
						<td />
						<td>0.0%</td>
					</tr>
					<tr>
						<td>Debt Service Coverage Ratio (Year 3)</td>
						<td />
						<td>0.0%</td>
					</tr>
					<tr>
						<td>
							<b>Owner</b>
						</td>
						<td />
						<td />
					</tr>
					<tr>
						<td>Project Rate of Return</td>
						<td />
						<td>0.0%</td>
					</tr>
					<tr>
						<td>Return of Equity</td>
						<td />
						<td>0.0%</td>
					</tr>
					<tr>
						<td>
							<b>Subsidy</b>
						</td>
						<td />
						<td />
					</tr>
					<tr>
						<td>Subsidy Amount</td>
						<td />
						<td>$0.0</td>
					</tr>
					<tr>
						<td>Percent of Project Costs</td>
						<td />
						<td>0.0%</td>
					</tr>
				</tbody>
			</table>
			<div style={placeholderCSS}> cool graph here</div>{' '}
		</div>{' '}
	</div>
);

class BuildingPrintSummary extends Component {
	render() {
		return <PrintOutlineText />;
	}
}

export default BuildingPrintSummary;

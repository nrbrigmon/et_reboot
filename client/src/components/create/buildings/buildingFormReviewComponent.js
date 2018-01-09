import React, { Component } from 'react';
import * as bm from './_buildingMathModule';

class BuildingFormReviewComponent extends Component {
	constructor(props) {
		super(props);
		let { physicalInfo, basicFinInfo, advFinInfo } = this.props.attributes;
		this.state = {
			rBuildingName: physicalInfo.buildingName,
			rLotSize: physicalInfo.siteArea,
			rBuildingLotCoverage: bm.buildingLotCoverage(
				physicalInfo.siteArea
			),
			rLanscapeLotCoverage: bm.landscapeLotCoverage(
				physicalInfo.siteArea
			),
			rParkingLotCoverage: bm.parkingLotCoverage( physicalInfo.siteArea ),
			rBuildingHeight: physicalInfo.buildingHeight,
			rFAR: bm.getFAR(physicalInfo.siteArea, advFinInfo),
			rTotalSf: bm.getTotalSf(advFinInfo),
			rResidentialSfMix: bm.getResidentialSfMix(),
			rRetailSfMix: bm.getRetailSfMix(),
			rOfficeSfMix: bm.getOfficeSfMix(),
			rIndustrialSfMix: bm.getIndustrialSfMix(),
			rPublicSfMix: bm.getPublicSfMix(),
			rEducationalSfMix: bm.getEducationalSfMix(),
			rHotelSfMix: bm.getHotelSfMix(),
			rCommercialParkingSfMix: bm.getCommercialParkingSfMix(),
			rInternalParkingSfMix: bm.getInternalParkingSfMix(),
			rResidentialSf: (bm.getTotalSf(advFinInfo)*bm.getResidentialSfMix()),
			rResidentialNetUnit: bm.getResidentialNetUnit(physicalInfo.residentialUnitSize),
			rResidentialGrossUnit: bm.getResidentialGrossUnit(physicalInfo.residentialUnitSize),
			rResidentialDwellUnit: bm.getResidentialDwellUnit(physicalInfo, advFinInfo),
			rHouseholdType: physicalInfo.residentialType,
			rHouseholdOwnerPerc: (physicalInfo.occupancyType === 'Renter' ? 0 : 1),
			rHouseholdRenterPerc: (physicalInfo.occupancyType === 'Owner' ? 0 : 1),
			rHouseholdAffordPerc: bm.getHouseholdAffordability(physicalInfo, basicFinInfo),
			rHouseholdEstIncome: bm.getHouseholdEstIncome(physicalInfo, basicFinInfo),
			rMonthlyRentSf: (physicalInfo.occupancyType === 'Renter' ? basicFinInfo.monthlyRentPerSf : 0),
			rMonthlyRent: (bm.getResidentialNetUnit(physicalInfo.residentialUnitSize) * basicFinInfo.monthlyRentPerSf),
			rSalesPriceSf: (physicalInfo.occupancyType === 'Owner' ? basicFinInfo.salesPricePerSf : 0),
			rSalesPrice: (bm.getResidentialNetUnit(physicalInfo.residentialUnitSize) * basicFinInfo.salesPricePerSf),
			rJobsPerAcre: bm.getJobsPerAcre(physicalInfo),
			rRetailSf: bm.getTotalSf(advFinInfo)*physicalInfo.retailUsePerc,
			rRetailLeaseRate: basicFinInfo.commercialRetailRentSf,
			rRetailSpacePerEmp: physicalInfo.retailAreaPerEmp,
			rRetailEmpPerSf: ( physicalInfo.retailAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.retailUsePerc)/physicalInfo.retailAreaPerEmp ),
			rOfficeSf: bm.getTotalSf(advFinInfo)*physicalInfo.officeUsePerc,
			rOfficeLeaseRate: basicFinInfo.commercialOfficeRentSf,
			rOfficeSpacePerEmp: physicalInfo.officeAreaPerEmp,
			rOfficeEmpPerSf: ( physicalInfo.officeAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.officeUsePerc)/physicalInfo.officeAreaPerEmp )			
		};
	}

	handleSubmit() {
		console.log('submission');
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h4> Review </h4>
					
				</div>
				<div className="col s12">
					<div><strong>Building Name</strong>: {this.state.rBuildingName} </div>
					<div><strong>Lot Size:</strong> {this.state.rLotSize}</div>
					<div><strong>Building Lot Coverage:</strong> {this.state.rBuildingLotCoverage}</div>
					<div><strong>Landscaping Lot Coverage:</strong> {this.state.rLanscapeLotCoverage}</div>
					<div><strong>Parking Lot Coverage:</strong> {this.state.rParkingLotCoverage}</div>
					<div><strong>Height (Stories):</strong> {this.state.rBuildingHeight}</div>
					<div><strong>Floor Area Ratio (FAR):</strong> {this.state.rFAR}</div>
					<div><strong>Total Bldg Square Footage:</strong> {this.state.rTotalSf}</div>
					<div><strong>Residential:</strong> {this.state.getResidentialSf} </div>
					<div><strong>Retail:</strong> {this.state.getRetailSf} </div>
					<div><strong>Office:</strong> {this.state.getOfficeSf} </div>
					<div><strong>Industrial:</strong> {this.state.getIndustrialSf} </div>
					<div><strong>Public/Civic:</strong> {this.state.getPublicSf} </div>
					<div><strong>Educational:</strong> {this.state.getEducationalSf} </div>
					<div><strong>Hotel / Hospitality:</strong> {this.state.getHotelSf} </div>
					<div><strong>Commercial Parking:</strong> {this.state.getCommercialParkingSf} </div>
					<div><strong>Internal / Structured Parking:</strong> {this.state.getInternalParkingSf} </div>
					<div><strong>Residential sf:</strong> {this.state.rResidentialSf}</div>
					<div><strong>Net sf per Unit:</strong> {this.state.rResidentialNetUnit} </div>
					<div><strong>Gross sf per Unit:</strong> {this.state.rResidentialGrossUnit} </div>
					<div><strong>Dwelling Units / Acre:</strong> {this.state.rResidentialDwellUnit} </div>
					<div><strong>Type of Housing:</strong> {this.state.rHouseholdType}</div>
					<div><strong>Percent Renter:</strong>{this.state.rHouseholdRenterPerc }  </div>
					<div><strong>Percent Owner:</strong> {this.state.rHouseholdOwnerPerc } </div>
					<div><strong>Percent Affordable:</strong>{this.state.rHouseholdAffordPerc } </div>
					<div><strong>Estimated Household Income:</strong> {this.state.rHouseholdEstIncome }</div>
					<div><strong>Rent / sf:</strong> {this.state.rMonthlyRentSf}</div>
					<div><strong>Avg Rent (/Mo.):</strong> {this.state.rMonthlyRent}</div>
					<div><strong>Sales Price /sf:</strong> {this.state.rSalesPriceSf}</div>
					<div><strong>Avg Sales Price:</strong> {this.state.rSalesPrice}</div>
					<div><strong>Total Jobs / Acre:</strong> {this.state.rJobsPerAcre}			</div>
					<div><strong>Retail Gross sf:</strong> 		{this.state.rRetailSf}		</div>
					<div><strong>Retail Lease Rate / sf:</strong> 	{this.state.rRetailLeaseRate}				</div>
					<div><strong>Space per Retail Employee:</strong> {this.state.rRetailSpacePerEmp}	</div>
					<div><strong>Retail Employees / Acre:</strong> 	{this.state.rRetailEmpPerSf}</div>
					<div><strong>Office Gross sf:</strong> {this.state.rOfficeSf}</div>
					<div><strong>Office Lease Rate /sf:</strong> {this.state.rOfficeLeaseRate}</div>
					<div><strong>Space per Office Employee:</strong> {this.state.rOfficeSpacePerEmp}	</div>
					<div><strong>Office Employees / Acre:</strong> {this.state.rOfficeEmpPerSf}	</div>
					<div><strong>Industrial Gross sf:</strong> 			=L5*$H$5			</div>
					<div><strong>Industrial Lease Rate /sf:</strong> 	=BF_IndRent					</div>
					<div><strong>Space per Employee:</strong> 		=$'Physical Inputs'.B52				</div>
					<div><strong>Industrial Employees / Acre:</strong> 		=IF(AP5=0,0,AN5/AP5)				</div>
					<div><strong>Public / Civic Gross sf:</strong> 			=O5*$H$5			</div>
					<div><strong>Public / Civic Lease Rate /sf:</strong> 		=BF_PubRent				</div>
					<div><strong>Space per Employee:</strong> 				=$'Physical Inputs'.B53		</div>
					<div><strong>Public / Civic Employees / Acre:</strong> 				=IF(AT5=0,0,AR5/AT5)		</div>
					<div><strong>Educational Gross sf:</strong> =N5*$H$5</div>
					<div><strong>Educational Lease Rate /sf:</strong> =BF_EduRent</div>
					<div><strong>Space per Employee:</strong>=$'Physical Inputs'.B54 </div>
					<div><strong>Educational Employees / Acre:</strong> =IF(AX5=0,0,AV5/AX5)</div>
					<div><strong>Educational Gross sf:</strong> =O5*$H$5</div>
					<div><strong>Hospitality Nightly Rate (per room):</strong>=BF_HotelRent </div>
					<div><strong>Space per Employee:</strong>=$'Physical Inputs'.B55 </div>
					<div><strong>Hospitality Employees / Acre:</strong> =$'Physical Outputs'.F34</div>
					<div><strong>Net Space per Hotel Room:</strong>=IF($'Physical Outputs'.C34=0,0,($'Physical Outputs'.C34/$'Physical Outputs'.D34)) </div>
					<div><strong>Gross Space per Hotel Room:</strong> =IF($'Physical Outputs'.B34=0,0,($'Physical Outputs'.B34/$'Physical Outputs'.D34))</div>
					<div><strong>Hotel Rooms / Acre:</strong> =IF(BE5=0,0,AZ5/BE5)</div>
					<div><strong>Shared Parking Gross sf:</strong> =P5*$H$5</div>
					<div><strong>Parking Hourly Rate (per space):</strong> =BF_ParkingRent</div>
					<div><strong>Space per Employee:</strong> =$'Physical Inputs'.B57</div>
					<div><strong>Shared Parking Employees / Acre:</strong>=$'Physical Outputs'.E35 </div>
					<div><strong>Parking Spaces:</strong> =$'Physical Outputs'.B52</div>
					<div><strong>Parking sf:</strong> =$'Physical Outputs'.C52</div>
					<div><strong>Internal / Structured Parking sf:</strong> =SUM($'Physical Outputs'.B36:B37)</div>
					<div><strong>Parking Cost:</strong> =-$'Basic Financial'.B61</div>
					<div><strong>Land Cost (per sf):</strong> =$'Basic Financial'.B30</div>
					<div><strong>Total Project Value:</strong>=-$'Basic Financial'.B62 </div>
					<div><strong>Annual Property Tax Revenue (Year 1):</strong> =$'Mixed-Use Summary'.C95+$'Residential Owner'.E54</div>
					<div><strong>Total Fees / SDCs:</strong> =-$'Development Costs'.E27</div>
					<div><strong>Subsidy:</strong>=IF($'Basic Financial'.B33>0,$'Basic Financial'.B33,$'Basic Financial'.B34) </div>
					<div><strong>Internal Rate of Return (Rental):</strong> =$'Mixed-Use Summary'.O6</div>
					<div><strong>Project Return (Owner):</strong> =$'Mixed-Use Summary'.U5</div>
					<div><strong>Y-Intercept:</strong> =INTERCEPT($'ROI Scenario'.B146:B147,$'ROI Scenario'.A146:A147)</div>
					<div><strong>Slope:</strong> =LINEST($'ROI Scenario'.B146:B147,$'ROI Scenario'.A146:A147)</div>
					<div><strong>Product Type:</strong> { 'Residential/Office/Mised Use Owner or Renter'} </div>
					{/* more entries for green infrastructure*/}
					

				</div>
				{/*
				<div className="col s12">
					<ul className="collection">
						<li className="collection-item">
							Building Height:  
							{fullBuildingInfo.physicalInfo.buildingHeight}  
						</li>
						  
						<li className="collection-item">
							Lot Size: {this.state.rLotSize}  
						</li>
						  
					</ul>
					  
				</div>
				  
				<div className="col s12 center-align">
					<h6> Finances </h6>  
				</div>
				  
				<div className="col s6">
					<ul className="collection">
						<li className="collection-item">
							Residential Costs:  
							{fullBuildingInfo.basicFinInfo.residentialConCosts} 
							  
						</li>
						  
						<li className="collection-item">
							Retail Costs:  
							{fullBuildingInfo.basicFinInfo.retailConCosts}  
						</li>
						  
						<li className="collection-item">
							Office Costs:  
							{fullBuildingInfo.basicFinInfo.officeConCosts}  
						</li>
						  
						<li className="collection-item">
							Industrial Costs:  
							{fullBuildingInfo.basicFinInfo.industrialConCosts}  
						</li>
						  
					</ul>
					  
				</div>
				  
				<div className="col s6">
					<ul className="collection">
						<li className="collection-item">
							Residential Rate:  
							{fullBuildingInfo.advFinInfo.residentialRentalRate} 
							  
						</li>
						  
						<li className="collection-item">
							Retail Rate:  
							{fullBuildingInfo.advFinInfo.retailRentalRate}  
						</li>
						  
						<li className="collection-item">
							Office Rate:  
							{fullBuildingInfo.advFinInfo.officeRentalRate}  
						</li>
						  
						<li className="collection-item">
							Industrial Rate:  
							{fullBuildingInfo.advFinInfo.industrialRentalRate}  
						</li>
						  
					</ul>
					  
				</div>
				  */}
			</div>
		);
	}
}

export default BuildingFormReviewComponent;

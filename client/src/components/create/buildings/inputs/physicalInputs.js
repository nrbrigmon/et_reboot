export default {
    section1: [{
        name: 'Building Name',
        attr: 'buildingName',
        placeholder: 'ex. Two story Mixed-Use',
        input: 'text'
    },{
        name: 'Site Location',
        attr: 'siteLocation',
        placeholder: 'ex. Waco, TX',
        input: 'text'
    },{
        name: 'Site Area',
        attr: 'siteArea',
        placeholder: 'ex. 1500 (square feet)',
        input: 'text'
    },{
        name: 'Number of Stories',
        attr: 'buildingHeight',
        placeholder: 'ex. 2',
        input: 'text'
    },{
        name: 'Site net-to-gross ratio',
        attr: 'siteNetToGross',
        placeholder: 'ex. 70 (%)',
        input: 'text'
    },{
        name: 'Landscaping %',
        attr: 'landscapingPerc',
        placeholder: 'ex. 20 (%)',
        input: 'text'
    },{
        name: 'Underbuild %',
        attr: 'underbuildPerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    }],
    section2: [{
        name: 'Residential Type',
        attr: 'residentialType',
        placeholder: 'Single Family',
        input: 'select',
        values: ['Single Family', 'Semi-Detached / Townhome', 'Multifamily', 'None']
    },{
        name: 'Occupancy Type',
        attr: 'occupancyType',
        placeholder: 'Renter',
        input: 'select',
        values: ['Owner', 'Renter', 'None']
    },{
        name: 'Residential Use %',
        attr: 'residentialUsePerc',
        placeholder: 'ex. 20 (%)',
        input: 'text'
    },{
        name: 'Retail Use %',
        attr: 'retailUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    },{
        name: 'Office Use %',
        attr: 'officeUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    },{
        name: 'Industrial Use %',
        attr: 'industrialUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    },{
        name: 'Public Use %',
        attr: 'publicUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    },{
        name: 'Education Use %',
        attr: 'educationUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    },{
        name: 'Hotel Use %',
        attr: 'hotelUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    },{
        name: 'Commercial Parking Use %',
        attr: 'parkingUsePerc',
        placeholder: 'ex. 75 (%)',
        input: 'text'
    }],
    section3: [{
        name: 'Avg. Residential Unit Size',
        attr: 'residentialUnitSize',
        placeholder: 'ex. 750 (sf)',
        input: 'text'
    }],
    section4: [{
        name: 'Retail Sf per Emp',
        attr: 'retailAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Office Sf per Emp',
        attr: 'officeAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Industrial Sf per Emp',
        attr: 'industrialAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Public Sf per Emp',
        attr: 'publicAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Education Sf per Emp',
        attr: 'educationAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Hotel Sf per Emp',
        attr: 'hotelAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Hotel Sf per Room',
        attr: 'hotelAreaPerRoom',
        placeholder: '400 sf',
        input: 'text'
    },{
        name: 'Commercial Parking Sf per Emp',
        attr: 'parkingAreaPerEmp',
        placeholder: '400 sf',
        input: 'text'
    }],
    section5: [{
        name: 'Spaces per Dwelling Unit',
        attr: 'residentialParkPerUnit',
        placeholder: '2',
        input: 'text'
    },{
        name: 'Spaces per 1000 Sf Retail',
        attr: 'retailParkPerArea',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Spaces per 1000 Sf Office',
        attr: 'officeParkPerArea',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Spaces per 1000 Sf Industrial',
        attr: 'industrialParkPerArea',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Spaces per 1000 Sf Public',
        attr: 'publicParkPerArea',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Spaces per 1000 Sf Education',
        attr: 'educationParkPerArea',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Spaces per Hotel Room',
        attr: 'hotelParkPerRoom',
        placeholder: '1',
        input: 'text'
    }],
    section6: [{
        name: 'Surface/Structure Parking',
        attr: 'surfaceParkingLvls',
        placeholder: '2',
        input: 'text'
    },{
        name: 'Internal Parking',
        attr: 'internalParkingLvls',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Underground Parking',
        attr: 'undergroundParkingLvls',
        placeholder: '1',
        input: 'text'
    },{
        name: 'Mechanical Parking User?',
        attr: 'mechanicalParking',
        placeholder: 'Yes',
        input: 'text'
    },{
        name: 'Parking Layout',
        attr: 'parkingLayout',
        placeholder: 'Suburban',
        input: 'select',
        values: ['Suburban', 'Urban', 'Structured', 'Mechanical', 'Custom']
    },{
        name: 'Spaces per 1000 Sf Public',
        attr: 'parkingAreaPerSf',
        placeholder: '350',
        input: 'text'
    }]
};

import _buildingList from 'constants/sampleBuildings/_buildingList';

export const fetchBldgTemplates = () => {
	const action = {
        type: 'FETCH_BLDG_TEMPLATES',
        payload: _buildingList
	}
	return action;
}
export const filterBldgTemplates = (text) => {
	const action = {
        type: 'FILTER_BLDG_TEMPLATES',
        payload: text
	}
	return action;
}
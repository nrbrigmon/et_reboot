const shortid = require("shortid")

let workbook_library_starter = {
    library_id: shortid.generate()
    ,library_name: ''
    ,library_isNew: true
    ,library_bldgs: []
    ,user_id: ''
}

module.exports = {
	workbook_id: shortid.generate()
	,workbook_isNew: true 
    ,workbook_name: ''
    ,workbook_devtypes: []
	,user_id: ''
	,workbook_library: workbook_library_starter
}
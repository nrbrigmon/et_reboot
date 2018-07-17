
import React from 'react';
import Moment from 'react-moment';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const addDate = (date) => {
    return (date ? <Moment format="MM-DD-YYYY">{ date }</Moment> : "N/A")
}

export default (ctx) => {
    let { availableS3Layers } = ctx.props;
    let { formControl } = ctx.props;
    let { layerSelection } = ctx;
    // console.log(ctx);
    return (
        <div>
            <FormControl className={formControl}>
                <Select
                    value={0}
                    onChange={layerSelection}
                >
                    <MenuItem value={0}>
                        <em>Select an Existing Layer</em>
                    </MenuItem>
                    {
                        availableS3Layers.map( (elem, idx) => {
                            return (
                                <MenuItem key={idx} value={elem.objectKey}>
                                    {elem.objectName} ({ addDate( elem.modifiedDate ) })
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
}
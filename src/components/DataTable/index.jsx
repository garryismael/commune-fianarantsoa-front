import { DataGrid, frFR } from "@mui/x-data-grid";

import "./index.css";

import {
	GridToolbarContainer,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useState } from "react";

export const Toolbar = ({ setFilterButtonEl }) => (
	<GridToolbarContainer>
		<GridToolbarFilterButton ref={setFilterButtonEl} />
	</GridToolbarContainer>
);

const DataTable = (props) => {
	const [filterButtonEl, setFilterButtonEl] = useState(null);

	return (
		<div style={{ height: 430, width: "100%" }}>
			<DataGrid
				{...props}
				className='data-table'
				localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
				components={{
					Toolbar,
				}}
				componentsProps={{
					panel: {
						anchorEl: filterButtonEl,
					},
					toolbar: {
						setFilterButtonEl,
					},
				}}
				rowsPerPageOptions={[5, 10, 20]}
			/>
		</div>
	);
};

export default DataTable;

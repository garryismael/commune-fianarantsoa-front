import { DataGrid, frFR } from "@mui/x-data-grid";

import "./index.css";

import { Stack } from "@mui/system";
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

export const Actions = ({ onEdit, onDelete }) => (
	<Stack direction='row' spacing={2}>
		<i
			className='fas fa-edit fa-lg blue-color cursor-pointer'
			onClick={onEdit}
		/>
		<i
			className='fas fa-trash-alt fa-lg red-color cursor-pointer'
			onClick={onDelete}
		/>
	</Stack>
);

const DataTable = (props) => {
	const [pageSize, setPageSize] = useState(5);
	const [filterButtonEl, setFilterButtonEl] = useState(null);

	return (
		<div style={{ height: 431, width: "100%" }}>
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
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				getRowClassName={(params) => `data-table-row`}
			/>
		</div>
	);
};

export default DataTable;

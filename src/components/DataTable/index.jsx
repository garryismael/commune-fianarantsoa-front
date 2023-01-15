import { DataGrid, frFR } from "@mui/x-data-grid";

import "./index.css";

import {
	GridToolbarContainer,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useState } from "react";
import { Tooltip } from "recharts";

export const Toolbar = ({ setFilterButtonEl }) => (
	<GridToolbarContainer>
		<GridToolbarFilterButton ref={setFilterButtonEl} />
	</GridToolbarContainer>
);

export const Actions = ({ onEdit, onDelete }) => (
	<div className='actions'>
		<Tooltip title='Modifier'>
			<i
				className='fas fa-edit fa-lg blue-color cursor-pointer'
				onClick={onEdit}
			/>
		</Tooltip>
		<Tooltip title='Supprimer'>
			<i
				className='fas fa-trash-alt fa-lg red-color cursor-pointer'
				onClick={onDelete}
			/>
		</Tooltip>
	</div>
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

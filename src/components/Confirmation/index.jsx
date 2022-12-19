import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React from "react";
import { confirmable } from "react-confirm";

function ConfirmDialog({
	okLabel = "OK",
	cancelLabel = "Annuler",
	title = "Confirmation",
	color = "error",
	confirmation,
	show,
	proceed,
	dismiss,
}) {
	const handleOk = async () => {
		await proceed();
		dismiss();
	};
	return (
		<Dialog
			open={show}
			onClose={dismiss}
			sx={{
				"& .MuiDialog-container": {
					"& .MuiPaper-root": {
						width: "100%",
						maxWidth: "350px", // Set your width here
					},
				},
			}}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent sx={{ textAlign: "center" }}>
				{confirmation}
			</DialogContent>
			<DialogActions>
				<Button variant='text' onClick={dismiss}>
					{cancelLabel}
				</Button>
				<Button variant='contained' color={color} onClick={handleOk}>
					{okLabel}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default confirmable(ConfirmDialog);

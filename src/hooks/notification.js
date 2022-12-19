import { useState } from "react";
import useModal from "./modal";

const useNotification = () => {
	const [open, handleOpen, handleClose] = useModal();
	const [notification, setNotification] = useState({
		message: "",
		severity: "success",
	});

	const setSuccess = (message) => {
		setNotification({
			message,
			severity: "success",
		});
		handleOpen();
	};

	const setError = (message) => {
		setNotification({
			message,
			severity: "error",
		});
		handleOpen();
	};

	const setWarning = (message) => {
		setNotification({
			message,
			severity: "warning",
		});
		handleOpen();
	};

	const setInfo = (message) => {
		setNotification({
			message,
			severity: "info",
		});
		handleOpen();
	};

	return {
		open,
		handleClose,
		notification,
		setSuccess,
		setError,
		setWarning,
		setInfo,
	};
};

export default useNotification;

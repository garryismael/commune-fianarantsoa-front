import { createConfirmation } from "react-confirm";
import Confirmation from "../components/Confirmation";

const confirm = createConfirmation(Confirmation);

function confirmWrapper(confirmation, options = {}) {
	return confirm({ confirmation, ...options });
}

export default confirmWrapper;

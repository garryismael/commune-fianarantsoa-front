import {
	Button,
	Card,
	CardContent,
	CardHeader, TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useZoneForm } from "../../../hooks/zone";
import { appendZone,updateZone } from "../../../redux/zoneSlice";
import { addZone, editZone } from "../../../services/zone";

const ZoneForm=(props)=>{
    return(
        <div className="">
            <Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
                <form className='' onSubmit={props.handleSubmit}>
						<TextField
							id='nom'
							label='Nom'
							name='nom'
							value={props.values?.nom}
							variant='outlined'
							onChange={props.onChange}
						/>
                        <Button
							variant='contained'
							className='button-form'
							type='submit'>
							{props.button}
						</Button>
                        </form>
                </CardContent>
                </Card>
                
        </div>
    );
};
export const ZoneAdd=(props)=>{
    const[values, onChange]=useZoneForm();
    const dispatch=useDispatch();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await addZone(values);
            dispatch(appendZone(response.data));
            props.handleClose();

        }catch(errors){
            console.error(errors);
        }
    };

    return (
        <ZoneForm
            title='Ajouter une zone'
            values={values}
            handleSubmit={handleSubmit}
            oneChange={onChange}
            />
        );
    };
    
    export const ZoneEdit = (props) => {
        const [values, onChange] = useZoneForm(props.pavillon);
        const dispatch = useDispatch();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await editZone(props.zone.id, values);
                dispatch(updateZone(response.data));
                props.handleClose();
            } catch (errors) {
                console.error(errors);
            }
        };
    
        return (
            <ZoneForm
                title='Modifier une zone'
                values={values}
                button='Modifier'
                handleSubmit={handleSubmit}
                onChange={onChange}
            />
        );
    };
    
    export default ZoneForm;
    